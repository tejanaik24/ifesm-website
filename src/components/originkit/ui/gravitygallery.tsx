import { useEffect, useRef } from "react"
// @ts-ignore — matter-js may not ship bundled type declarations
import Matter from "matter-js"

// Shown when the user hasn't added their own images.
const DEFAULT_IMAGES = [
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/5f084e5a-2e3f-4239-be1a-5084a6dcef00/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/3b42034b-897e-456d-cb00-1f2cf0aa4700/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/c84f3e45-635f-4eaa-4e24-730098b55500/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/9652cf81-4644-4471-1122-4e40ef6e2600/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/1640f8fe-2cb1-4026-88e3-10dd0019f400/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/20fd03c3-49d6-408c-3ac9-8c5a6ed2b500/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/4b1ec233-9a09-4483-1adb-404a93094100/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/8fd4d2a3-a363-4658-d6ee-84790bc8f300/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/3ad8e2bd-dc38-49ba-d186-1a5ab1428d00/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/93ba867c-59af-4b58-8021-c0c0fbce8300/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/6c99279a-d77b-4fe0-a32a-a674adced100/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/6ab26fe4-5016-4c65-01e8-b3a71ea08200/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/9d2dbaa2-7b61-4bf9-4830-2c93e4706000/w=800",
    },
    {
        src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/4d1fe81d-5289-4e08-b381-03e4e9efed00/w=800",
    },
]

/**
 * Physics
 * Drops a set of generated bodies (circles or squares) into a Matter.js world:
 * gravity, walls, click-drag with the mouse. Bodies are filled with the
 * uploaded images, cycled across the count (one image repeats for all).
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */

const M: any = Matter

// Static boundary walls around the container (thick, just outside the edges).
function makeWalls(
    bounding: { width: number; height: number },
    world: any,
    opts: any
) {
    const { width: w, height: h } = bounding
    const t = 200
    const walls: any[] = []
    if (opts.top)
        walls.push(
            M.Bodies.rectangle(w / 2, -t / 2, w + 2 * t, t, { isStatic: true })
        )
    if (opts.bottom)
        walls.push(
            M.Bodies.rectangle(w / 2, h + t / 2, w + 2 * t, t, {
                isStatic: true,
            })
        )
    if (opts.left)
        walls.push(
            M.Bodies.rectangle(-t / 2, h / 2, t, h + 2 * t, { isStatic: true })
        )
    if (opts.right)
        walls.push(
            M.Bodies.rectangle(w + t / 2, h / 2, t, h + 2 * t, {
                isStatic: true,
            })
        )
    M.Composite.add(world, walls)
    return walls
}

export default function Physics(props: any) {
    props = { ...COMPONENT_DEFAULTS, ...props }
    const {
        images = DEFAULT_IMAGES,
        count = 20,
        size = 126,
        shape = "square",
        color = "#FFFFFF",
        ringColor = "transparent",
        friction = 1,
        mouseEnable = true,
        mouseStiffness = 0.991,
        mouseAngularStiffness = 0,
        gravX = 0,
        gravY = 1,
        wallOptions = { top: true, bottom: true, right: true, left: true },
        // Nudges bodies away from the cursor on hover, no click needed.
        hoverRepel = false,
        hoverForce = 0.003,
        // Ms between each body dropping in, so the pile visibly forms one
        // logo at a time instead of everything landing in one instant.
        dropStagger = 160,
        style,
    } = props

    const n = Math.max(1, Math.min(40, Math.round(count)))
    const containerRef = useRef<HTMLDivElement>(null)
    const rafRef = useRef(0)

    const depKey = JSON.stringify({
        n,
        size,
        shape,
        gravX,
        gravY,
        wallOptions,
        friction,
        mouseEnable,
        mouseStiffness,
        mouseAngularStiffness,
    })

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const engine = M.Engine.create({
            enableSleeping: false,
            gravity: { x: gravX, y: gravY },
            positionIterations: 10,
            velocityIterations: 8,
        })

        const bounding = container.getBoundingClientRect()
        makeWalls(bounding, engine.world, wallOptions)

        let mouseConstraint: any = null
        const onLeave = () =>
            mouseConstraint?.mouse?.mouseup(new Event("mouseup"))
        if (mouseEnable) {
            const mouse = M.Mouse.create(container)
            mouseConstraint = M.MouseConstraint.create(engine, {
                mouse,
                constraint: {
                    angularStiffness: mouseAngularStiffness,
                    stiffness: mouseStiffness,
                },
            })
            M.Composite.add(engine.world, mouseConstraint)
            const el = mouseConstraint.mouse.element
            el.removeEventListener(
                "mousewheel",
                mouseConstraint.mouse.mousewheel
            )
            el.removeEventListener(
                "DOMMouseScroll",
                mouseConstraint.mouse.mousewheel
            )
            container.addEventListener("mouseleave", onLeave)
        }

        // Build the generated bodies. Each starts just above the container
        // (clipped by overflow:hidden, so invisible) at the column it will
        // fall down — added to the world one at a time below, not all at
        // once, so the pile visibly forms logo by logo.
        const bodyOpts = {
            friction: Math.max(1, Math.min(10, friction)) / 10,
            frictionAir: 0.02,
        }
        const made: any[] = []
        for (let i = 0; i < n; i++) {
            const x = ((i + 0.5) / n) * bounding.width
            const y = -size
            const body =
                shape === "square"
                    ? M.Bodies.rectangle(x, y, size, size, bodyOpts)
                    : M.Bodies.circle(x, y, size / 2, bodyOpts)
            made.push(body)
        }

        const els = Array.from(
            container.querySelectorAll<HTMLElement>("[data-physics-body]")
        )

        const revealed = new Array(n).fill(false)
        let revealedCount = 0
        const startTime = performance.now()

        const hoverRadius = size * 1.5
        const update = () => {
            rafRef.current = requestAnimationFrame(update)

            // Bring bodies into the world one at a time as time passes,
            // instead of all at once, so the pile visibly forms logo by
            // logo. Driven off the same clock as the render loop rather
            // than separate timers, so it can't drift or race with it.
            const dueCount = Math.min(
                n,
                Math.floor((performance.now() - startTime) / dropStagger) + 1
            )
            while (revealedCount < dueCount) {
                M.Composite.add(engine.world, made[revealedCount])
                revealed[revealedCount] = true
                revealedCount++
            }

            if (hoverRepel && mouseConstraint) {
                const mp = mouseConstraint.mouse.position
                for (let i = 0; i < made.length; i++) {
                    if (!revealed[i]) continue
                    const body = made[i]
                    const dx = body.position.x - mp.x
                    const dy = body.position.y - mp.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist > 0.01 && dist < hoverRadius) {
                        const mag = hoverForce * body.mass * (1 - dist / hoverRadius)
                        M.Body.applyForce(body, body.position, {
                            x: (dx / dist) * mag,
                            y: (dy / dist) * mag,
                        })
                    }
                }
            }

            M.Engine.update(engine)

            // Guard against the solver injecting a runaway impulse into a
            // tightly packed pile (e.g. a fresh drop landing hard on it),
            // which can otherwise tunnel a body clean through a wall.
            const maxSpeed = size
            const maxY = bounding.height + size * 4
            const minY = -size * 3
            for (let i = 0; i < made.length; i++) {
                if (!revealed[i]) continue
                const body = made[i]
                const { x: vx, y: vy } = body.velocity
                const speed = Math.sqrt(vx * vx + vy * vy)
                if (speed > maxSpeed) {
                    const s = maxSpeed / speed
                    M.Body.setVelocity(body, { x: vx * s, y: vy * s })
                }
                // A body that ends up impossibly far past the floor or
                // ceiling tunneled through it in one solver step; put it
                // back on the floor.
                if (body.position.y > maxY || body.position.y < minY) {
                    M.Body.setPosition(body, {
                        x: Math.min(
                            Math.max(body.position.x, size / 2),
                            bounding.width - size / 2
                        ),
                        y: bounding.height - size / 2,
                    })
                    M.Body.setVelocity(body, { x: 0, y: 0 })
                }
            }

            for (let i = 0; i < made.length; i++) {
                const el = els[i]
                if (!el) continue
                const { position, angle } = made[i]
                el.style.visibility = "visible"
                el.style.left = `${position.x}px`
                el.style.top = `${position.y}px`
                el.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`
            }
        }
        update()

        return () => {
            cancelAnimationFrame(rafRef.current)
            if (mouseEnable)
                container.removeEventListener("mouseleave", onLeave)
            M.World.clear(engine.world, false)
            M.Engine.clear(engine)
        }
    }, [depKey])

    // Cycle the uploaded images across the bodies (one image repeats for all).
    const imgFor = (i: number) => {
        const imgs =
            Array.isArray(images) && images.length > 0 ? images : DEFAULT_IMAGES
        if (!imgs.length) return undefined
        return imgs[i % imgs.length]
    }

    return (
        <div
            ref={containerRef}
            style={{
                ...style,
                position: "relative",
                height: "100%",
                width: "100%",
                overflow: "hidden",
            }}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
        >
            {Array.from({ length: n }).map((_, i) => {
                const img = imgFor(i)
                return (
                    <div
                        key={i}
                        data-physics-body=""
                        style={{
                            position: "absolute",
                            visibility: "hidden",
                            width: size,
                            height: size,
                            borderRadius: shape === "circle" ? "50%" : 0,
                            overflow: "hidden",
                            background: color,
                            border: `2px solid ${ringColor}`,
                            boxSizing: "border-box",
                            padding: size * 0.16,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "grab",
                        }}
                        draggable={false}
                    >
                        {img && (
                            <img
                                src={img.src}
                                alt={img.alt ?? ""}
                                draggable={false}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    pointerEvents: "none",
                                }}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

const COMPONENT_DEFAULTS = {
    images: DEFAULT_IMAGES,
    count: 20,
    size: 126,
    shape: "square",
    color: "#FFFFFF",
    gravY: 1,
    gravX: 0,
    wallOptions: {
        top: true,
        bottom: true,
        left: true,
        right: true,
    },
    friction: 1,
    mouseEnable: true,
    mouseStiffness: 0.991,
    mouseAngularStiffness: 0,
}

Physics.displayName = "Physics"

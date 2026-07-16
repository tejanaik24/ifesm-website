"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SectionRevealProps {
  children: ReactNode;
  variant?: "curtain" | "diagonal" | "circle";
  className?: string;
}

const CLIP_PATHS = {
  curtain: {
    from: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  diagonal: {
    from: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)",
    to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  circle: {
    from: "circle(0% at 50% 50%)",
    to: "circle(100% at 50% 50%)",
  },
};

export default function SectionReveal({ children, variant = "curtain", className = "" }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { from, to } = CLIP_PATHS[variant];

    // Set initial clip
    gsap.set(el, { clipPath: from });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      end: "top 30%",
      scrub: 1,
      onUpdate: (self) => {
        // Interpolate clip-path based on scroll progress
        gsap.set(el, {
          clipPath: variant === "circle"
            ? `circle(${self.progress * 100}% at 50% 50%)`
            : interpolateClipPath(from, to, self.progress),
        });
      },
    });

    return () => {
      st.kill();
      gsap.set(el, { clearProps: "clipPath" });
    };
  }, [variant]);

  return (
    <div ref={ref} className={className} style={{ willChange: "clip-path" }}>
      {children}
    </div>
  );
}

// Interpolate between two polygon clip-paths
function interpolateClipPath(from: string, to: string, progress: number): string {
  // For polygon: parse points and lerp each coordinate
  if (from.includes("polygon")) {
    const fromPoints = parsePolygon(from);
    const toPoints = parsePolygon(to);
    const interpolated = fromPoints.map((fp, i) => {
      const tp = toPoints[i];
      return `${lerp(fp.x, tp.x, progress)}% ${lerp(fp.y, tp.y, progress)}%`;
    });
    return `polygon(${interpolated.join(", ")})`;
  }
  return to;
}

function parsePolygon(path: string): { x: number; y: number }[] {
  const match = path.match(/polygon\((.+)\)/);
  if (!match) return [];
  return match[1].split(",").map((p) => {
    const [x, y] = p.trim().split("%").map(Number);
    return { x, y };
  });
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

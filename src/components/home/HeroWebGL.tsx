"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function HeroWebGL() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    // ── Scene setup ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ── Mouse tracking (normalized -1 to +1) ──
    const mouse = { x: 0, y: 0 };
    const smoothMouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ── Scroll tracking ──
    let scrollProgress = 0;
    const handleScroll = () => {
      scrollProgress = Math.min(window.scrollY / window.innerHeight, 1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // ── Central 3D object — wireframe icosahedron ──
    const icosaGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const icosaMat = new THREE.MeshBasicMaterial({
      color: 0xe31e24,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icosa = new THREE.Mesh(icosaGeo, icosaMat);
    scene.add(icosa);

    // Inner solid core (subtle)
    const coreGeo = new THREE.IcosahedronGeometry(0.6, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xe31e24,
      transparent: true,
      opacity: 0.08,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // ── Particles — 250 spheres with physics ──
    const PARTICLE_COUNT = 250;
    const particleGeo = new THREE.SphereGeometry(1, 6, 6);
    const particles: Array<{
      mesh: THREE.Mesh;
      vel: THREE.Vector3;
      flickerSpeed: number;
      flickerOffset: number;
    }> = [];

    const palette = [0xe31e24, 0xe31e24, 0xe31e24, 0x3a3a3a, 0x3a3a3a, 0xffffff];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)];
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.6,
      });
      const mesh = new THREE.Mesh(particleGeo, mat);
      const scale = Math.random() * 0.06 + 0.02;
      mesh.scale.setScalar(scale);
      mesh.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8
      );

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.006,
        (Math.random() - 0.5) * 0.004
      );

      const flickerSpeed = Math.random() > 0.7 ? Math.random() * 2 + 0.5 : 0;
      const flickerOffset = Math.random() * Math.PI * 2;

      scene.add(mesh);
      particles.push({ mesh, vel, flickerSpeed, flickerOffset });
    }

    // ── Ambient point light for depth ──
    const light = new THREE.PointLight(0xe31e24, 0.5, 20);
    light.position.set(0, 2, 4);
    scene.add(light);

    // ── Animation loop ──
    let rafId: number;
    let active = true;
    const time = { value: 0 };

    const animate = () => {
      if (!active) return;
      time.value = performance.now() * 0.001;
      const t = time.value;

      // Smooth mouse follow (lerp with 0.03 dampening — the SPYLT pattern)
      smoothMouse.x = lerp(smoothMouse.x, mouse.x, 0.03);
      smoothMouse.y = lerp(smoothMouse.y, mouse.y, 0.03);

      // ── Icosahedron — constant spin + mouse tilt + scroll scale ──
      icosa.rotation.y += 0.004;
      icosa.rotation.x += 0.001;
      icosa.rotation.x = lerp(icosa.rotation.x, smoothMouse.y * 0.2, 0.02);
      icosa.rotation.z = lerp(icosa.rotation.z, -smoothMouse.x * 0.1, 0.02);
      // Float bob
      icosa.position.y = Math.sin(t * 0.8) * 0.15;
      // Scroll-driven scale out
      const scrollScale = lerp(1, 0.6, scrollProgress);
      icosa.scale.setScalar(scrollScale);

      // Core follows with slight delay
      core.rotation.y = icosa.rotation.y * 0.5;
      core.rotation.x = icosa.rotation.x;
      core.position.y = icosa.position.y;
      core.scale.setScalar(scrollScale);

      // ── Particles — drift + gravity + bounce + mouse attraction ──
      for (const p of particles) {
        // Apply velocity (drift)
        p.mesh.position.add(p.vel);

        // Micro-gravity (pull downward slightly)
        p.vel.y -= 0.00002;

        // Mouse attraction — particles gently pulled toward cursor
        const dx = smoothMouse.x * 4 - p.mesh.position.x;
        const dy = smoothMouse.y * 3 - p.mesh.position.y;
        p.vel.x += dx * 0.00003;
        p.vel.y += dy * 0.00003;

        // Dampen velocity
        p.vel.multiplyScalar(0.999);

        // Bounce off bounds
        if (p.mesh.position.y < -5.5) {
          p.vel.y *= -0.6;
          p.mesh.position.y = -5.5;
        }
        if (p.mesh.position.y > 5.5) {
          p.vel.y *= -0.6;
          p.mesh.position.y = 5.5;
        }
        if (Math.abs(p.mesh.position.x) > 9) {
          p.vel.x *= -1;
        }
        if (p.mesh.position.z > 5 || p.mesh.position.z < -5) {
          p.vel.z *= -1;
        }

        // Flicker effect (for red particles)
        if (p.flickerSpeed > 0) {
          (p.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(
            0.15,
            Math.sin(t * p.flickerSpeed + p.flickerOffset) * 0.3 + 0.4
          );
        }
      }

      // ── Camera — subtle mouse parallax ──
      camera.position.x = lerp(camera.position.x, smoothMouse.x * 0.3, 0.02);
      camera.position.y = lerp(camera.position.y, smoothMouse.y * 0.2, 0.02);
      camera.lookAt(0, 0, 0);

      // Scroll-driven camera pull-back
      camera.position.z = lerp(6, 10, scrollProgress);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    // IntersectionObserver — pause when hero leaves viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !active) {
            active = true;
            animate();
          } else if (!e.isIntersecting && active) {
            active = false;
            cancelAnimationFrame(rafId);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    animate();

    // ── Resize ──
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ── Cleanup ──
    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      icosaGeo.dispose();
      icosaMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particles.forEach((p) => {
        (p.mesh.material as THREE.MeshBasicMaterial).dispose();
        scene.remove(p.mesh);
      });
      scene.remove(icosa, core, light);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />;
}

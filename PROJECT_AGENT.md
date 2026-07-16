# Project Agent Memory (PROJECT_AGENT.md)

## Current Status
- **Phase**: Phase 2 — Skeleton Layout & Routing
- **Target**: Static Single Page App + Supporting Pages (About, Services, Training, Projects, Clients, Careers, Contact).
- **Environment**: Next.js 16+, TypeScript, Tailwind CSS v4, GSAP.

## Completed Tasks
- [x] Create project directory and bootstrap Next.js 15/16 app.
- [x] Configure Tailwind CSS.
- [x] Initialize Shadcn CLI (`npx shadcn@latest init`).
- [x] Install animation and styling dependencies (`gsap`, `lenis`, `framer-motion`, `lucide-react`).
- [x] Create `PROJECT.md` and `DESIGN.md`.

## Active Pipeline Focus
- Configure Next.js static export setting (`output: 'export'`) in `next.config.ts`.
- Set up global fonts and CSS variables in `src/app/globals.css`.
- Develop layout components: Navigation, smooth scroll context (Lenis).
- Setup skeleton routes: `src/app/about`, `src/app/services`, `src/app/training`, `src/app/projects`, `src/app/clients`, `src/app/careers`, `src/app/contact`.

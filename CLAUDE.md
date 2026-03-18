# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Motion system

Uses **Framer Motion 12**. All animated components are `'use client'`. Server components import the motion wrappers freely.

- `lib/motion.ts` — single source of truth: `EASE`, `DURATION`, `STAGGER`, `VIEWPORT`, `variants`
- `components/motion/Reveal.tsx` — scroll-triggered `motion.div` wrapper (fade-up)
- `components/motion/Stagger.tsx` — `StaggerParent` + `StaggerChild` for grids/lists
- `components/Providers.tsx` — app-level `<MotionConfig reducedMotion="user">` (in layout)

**Patterns:**
- `<Reveal delay={n}>` wraps headings, labels, text blocks
- `<StaggerParent className="grid...">` replaces the grid/flex container; `<StaggerChild className="...">` replaces each item's outer div
- Hero uses `initial/animate` (page-load entrance); all other sections use `whileInView`

## Architecture

**Andén** is a single-page marketing website for a digital infrastructure platform targeting special economic zones in Latin America. Built with Next.js 15 (app router), React 19, TypeScript, and Tailwind CSS.

### Structure

- `app/` — Next.js app router: `layout.tsx` (root layout, fonts, metadata) and `page.tsx` (home page that composes all sections)
- `components/` — One component per landing page section, rendered top-to-bottom in `page.tsx`
- `public/assets/` — SVGs and images referenced by components

### Key conventions

- All navigation is hash-based anchor links (e.g. `#contacto`). There is no client-side router navigation.
- Only `Header.tsx` uses `'use client'` — all other components are server components.
- Path alias `@/` maps to the repo root (e.g. `@/components/Header`).
- `next.config.ts` sets `output: 'standalone'` for deployment.

### Styling

Custom Tailwind tokens defined in `tailwind.config.ts`:
- Colors: `cream`, `blue-brand` (#303994), `orange-brand` (#f9982f), `lime-brand` (#e0e738)
- Fonts via CSS variables: `--font-jost`, `--font-fraunces`, `--font-display` (Playfair Display)
- Max content width: `1056px`

Font families (Jost, Fraunces, Playfair Display) are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables applied on `<body>`.

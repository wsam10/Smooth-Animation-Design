# NABEL Industrial Windows Factory — Landing Page

## Overview

Standalone React + Vite landing page for NABEL Industrial Windows Factory. Pure npm project (no monorepo, no pnpm). Runs entirely from the project root.

## Stack

- **Package manager**: npm
- **Node.js version**: 24
- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS v4 + tw-animate-css
- **UI components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React + React Icons
- **Animation**: Framer Motion
- **Routing**: Wouter
- **TypeScript**: 5.9

## Project Structure

```text
/
├── src/
│   ├── components/         # All page sections + shadcn ui/ components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx        # 4-slide auto-advancing crossfade slider
│   │   ├── Stats.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Cities.tsx
│   │   ├── Clients.tsx     # 3-track infinite marquee
│   │   ├── Gallery.tsx
│   │   ├── WhyUs.tsx
│   │   ├── CTA.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/             # shadcn/ui components
│   ├── context/
│   │   └── LanguageContext.tsx  # EN/AR translations + RTL switching
│   ├── hooks/
│   │   ├── useScrollReveal.ts   # Intersection Observer scroll animations
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── not-found.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Custom purple branding + animations
├── public/
│   ├── nabel-logo.png      # Arabic logo
│   ├── nabel-logo-en.png   # English logo
│   ├── favicon.svg
│   ├── opengraph.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── index.html              # Full SEO meta, structured data, font preloads
├── vite.config.ts          # Simple config — reads PORT env or defaults to 5173
├── tsconfig.json           # Standalone TS config (bundler resolution)
├── package.json            # npm-based dependencies
├── components.json         # shadcn/ui config
└── vercel.json             # Vercel deployment config (npm build → dist/)
```

## Scripts

- `npm run dev` — start Vite dev server on `$PORT` or 5173
- `npm run build` — production build → `dist/`
- `npm run preview` — preview production build locally
- `npm run typecheck` — TypeScript check

## Design

- **Primary**: `#5B3B8A` (deep purple)
- **Accent**: `#8E6BC4` (soft purple)
- **Dark bg**: `#1E1040` / `#2D1B55`
- **Fonts**: Inter (EN), Cairo (AR)
- **Logos**: `/nabel-logo-en.png` (EN), `/nabel-logo.png` (AR)

## Key Features

- EN ↔ AR language switching with full RTL layout
- Hero: 4-slide crossfade slider, 6s autoplay, hover pause, arrows, dot indicators, progress bar
- Scroll reveal animations (`useScrollReveal` + IO)
- Animated counters (Stats section)
- 3-track infinite clients marquee
- Google Maps embed in Contact section
- Full SEO: structured data, OG tags, sitemap, robots.txt

## Deployment

Vercel deployment via `vercel.json`:
- Install: `npm install`
- Build: `npm run build`
- Output: `dist/`

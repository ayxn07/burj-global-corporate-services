# Copilot Instructions for Burj Global Corporate Services

## Project Context

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (layout/elements) + GSAP (text/complex sequences)
- **Package Manager:** npm

## Design System & Aesthetics

- **Theme:** Luxury / Corporate / Modern.
- **Color Palette:**
  - **Background:** `#000000` (Pure Black)
  - **Primary Gold:** `#ab9423` (Headings/Accents)
  - **Text:** `#ffffff` (Body)
- **Typography:** Clean, modern sans-serif (Geist).
- **UI Style:** Dark mode default, high contrast, premium feel.

## Architecture & Patterns

- **App Router:** All routes are defined in the `app/` directory.
  - Pages: `app/(pages)/**/page.tsx` (Group pages logically)
  - Layouts: `app/**/layout.tsx`
- **Server Components:** Default to RSC. Use `'use client'` only for interactivity (animations, forms).
- **Components:** Located in `components/`.
  - **Required Components:** `AnimatedHero`, `SectionTitle` (GSAP shimmer), `ServiceCards` (Framer Motion), `Navbar`, `Footer`.

## Animation Strategy

- **Framer Motion:** Use for structural transitions.
  - Patterns: `fadeIn`, `slideIn` (left/right/up), `staggerChildren`, `scaleIn`, scroll-based reveals.
- **GSAP:** Use for high-performance text animations.
  - Patterns: Fade in from bottom, shimmer text effect, letter stagger, strong opacity reveal.
  - Targets: Page hero headings, section headers, numeric highlights, CTA buttons.
  - **Hooks:** Create reusable hooks like `useGsapFadeInText`.

## Page Structure (12 Pages)

Implement the following pages with SEO-optimized content:

1.  **Home** (`/`)
2.  **About Us** (`/about-us`)
3.  **Services Overview** (`/services`)
4.  **Dubai Mainland Setup** (`/services/dubai-mainland`)
5.  **UAE Freezone Setup** (`/services/uae-freezone`)
6.  **Offshore Company Formation** (`/services/offshore`)
7.  **PRO & Government Services** (`/services/pro-services`)
8.  **Visas** (`/services/visas`) - Investor, Partner, Family.
9.  **Corporate Compliance** (`/services/compliance`)
10. **Branding & Identity Design** (`/services/branding`)
11. **Marketing, PR & Creative Design** (`/services/marketing-pr`)
12. **Contact Us** (`/contact`)

## SEO & Content Guidelines

- **Metadata:** Every page MUST have `generateMetadata()` with strong titles and descriptions.
- **Keywords:** `business setup dubai`, `uae freezone license`, `dubai mainland company formation`, `corporate services in dubai`, `investor visa uae`, `pro services dubai`.
- **Heading Structure:**
  - **H1:** Gold color (`#ab9423`), animated.
  - **H2/H3:** Clear hierarchy for content structure.
- **Keyword Density:** Target ~3% for primary keywords.

## Styling Conventions (Tailwind CSS v4)

- **Configuration:** CSS-first configuration in `app/globals.css`.
- **Theme Customization:** Use `@theme` in `app/globals.css`.
  - Define colors: `--color-gold: #ab9423;`, `--color-black: #000000;`.
- **Imports:** Use `@import "tailwindcss";`.

## Key Files & Directories

- `app/globals.css`: Global styles, Tailwind theme, GSAP/Framer defaults.
- `components/`: Reusable UI components.
- `public/`: Assets (Logo path: `/logo.png`).

## Developer Workflow

- **Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Type Check:** TypeScript is enforced.

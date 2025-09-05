# Repository Guidelines

## Project Structure & Module Organization
- Source lives in `src/`:
  - `app/`: Next.js App Router (route segments, `layout.tsx`, `page.tsx`, `not-found.tsx`).
  - `components/`: Reusable UI (PascalCase files/folders), including `ui/` primitives and feature modules.
  - `lib/`: Utilities and data (`utils.ts`, `data/meditation-benefits.ts`).
- Static assets in `public/` (images, audio, icons). Config at root: `next.config.ts`, `eslint.config.mjs`, `biome.json`, `postcss.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev`: Start local development at `http://localhost:3000`.
- `npm run build`: Production build (`next build`).
- `npm start`: Serve the built app from `.next/`.
- `npm run lint`: Lint with Biome (applies safe fixes).
- `npm run format`: Format with Biome.
- `npm run check`: Biome full check (lint + format issues).

## Coding Style & Naming Conventions
- TypeScript + React; prefer Server Components. Use Client Components only when needed (`"use client"`).
- Formatting via Biome: 2-space indent, double quotes, sorted class names (see `biome.json`).
- Naming: Components PascalCase (e.g., `BenefitCarousel.tsx`); utilities lower camel case (e.g., `utils.ts`); route segments lowercase/kebab.
- Styling: Tailwind v4 utilities in `src/app/globals.css`; prefer utilities over custom CSS.

## Testing Guidelines
- No test runner configured yet. If adding tests:
  - Use Vitest or Jest with React Testing Library.
  - Place tests next to code as `*.test.ts(x)` or in `__tests__/`.
  - Target 80%+ coverage for `lib/` and critical UI.
  - Add an `npm test` script and (optionally) CI.

## Commit & Pull Request Guidelines
- Commits follow Conventional Commits (`feat:`, `fix:`, `chore:`) as seen in history.
- PRs: concise description, linked issues, screenshots/GIFs for UI changes, note breaking changes.
- Before opening a PR: `npm run format && npm run lint && npm run build`.

## Security & Configuration Tips
- Never commit secrets; use `.env.local` for runtime config.
- Keep assets in `public/` optimized; prefer Next Image for images.
- Sitemaps are generated on `postbuild` (`next-sitemap`); ensure public routes are discoverable.


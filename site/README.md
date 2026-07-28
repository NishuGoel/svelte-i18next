# The Interior Aura — Website

"Surfaces, considered." A SvelteKit + Tailwind site for The Interior Aura, an
interior-surfaces atelier in Gurugram, India — dark editorial design (ink,
limewash and bronze; Fraunces + Hanken Grotesk), structured around five surface
collections: Flooring, Walls, Ceilings, Light & Glass, Carpets & Textiles.

## Tech stack

- **SvelteKit 2** (Svelte 5 runes) with `@sveltejs/adapter-static` — fully prerendered
- **Tailwind CSS 4** via `@tailwindcss/vite`, plus a hand-written design system in `src/app.css`
- **EN/DE language toggle** — lightweight store-based i18n (`src/lib/i18n.ts`); English
  lives in the markup, German overrides in the dictionary, untranslated keys fall back
- **Fonts**: Fraunces (serif) + Hanken Grotesk (sans) from Google Fonts

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server
npm run build    # static build into build/
npm run preview  # preview production build
npm run check    # svelte-check
```

## Structure

- `src/lib/data/company.ts` — single source of truth: company facts, the five
  collections, every product with its indicative price. Edit copy and prices here.
- `src/lib/i18n.ts` — language store + DE dictionary
- `src/lib/actions/reveal.ts` — scroll-reveal action
- `src/app.css` — the design system (tokens, plates, sections, forms, footer)
- `src/routes/` — `/` (the one-page story), `/collections`, `/collections/[slug]`,
  `/atelier`, `/enquire`
- `static/images/` — product photos (see its README for expected filenames)

## Pricing

The ₹40/sq ft nylon carpet rate is confirmed from the company's public listing;
all other prices are indicative "from ₹X" Gurgaon-market rates — adjust in
`src/lib/data/company.ts`.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push
to `main` (Pages source must be set to "GitHub Actions"). The build honors
`BASE_PATH` for project-site subpaths; local dev and root-domain hosts run with
an empty base.

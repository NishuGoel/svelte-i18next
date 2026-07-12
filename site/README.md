# The Interior Aura — Website

A SvelteKit + Tailwind CSS website for The Interior Aura, a flooring and interiors
business in Gurugram, Haryana (inspired by the concept of theinterioraura.com,
with a curated product catalog rather than a 1:1 copy).

## Tech Stack

- **SvelteKit 2** (Svelte 5 runes) with `@sveltejs/adapter-static` — fully prerendered static site
- **Tailwind CSS 4** via the `@tailwindcss/vite` plugin
- **Fonts**: Playfair Display (headings) + Inter (body), loaded from Google Fonts

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm run build    # build static site into build/
npm run preview  # preview the production build
npm run check    # svelte-check type checking
```

## Structure

- `src/lib/data/company.ts` — **single source of truth** for all content: company
  info, product categories, products, prices, and installation services. Edit
  prices and copy here; every page renders from this file.
- `src/lib/components/` — Header, Footer, PageHero, ProductCard
- `src/routes/` — pages: home, `/products`, `/products/[slug]` (one per category),
  `/services`, `/about`, `/contact`
- `static/images/` — product photos (see the README there for expected filenames;
  cards show styled placeholders until photos are added)

## Pricing

The ₹40/sq ft nylon carpet rate is confirmed from the company's public listing.
All other prices are indicative "Starting ₹X" Gurgaon-market rates — adjust them
in `src/lib/data/company.ts` once the actual price list is confirmed.

## Deployment

The build output in `build/` is plain static files — deploy to Vercel, Netlify,
GitHub Pages, or any static host.

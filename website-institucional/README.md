# Institutional company website

A responsive sample website for an independent creative studio, featuring its story, services, selected work, and contact information. Local photography features architecture, interiors, and places; the sample contains no people or company logos.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` and `npm run build` to validate changes.

## Project structure

- `app/page.tsx` — route entry point
- `app/components/CompanyExperience.tsx` — page sections and reusable UI
- `app/globals.css` — responsive layout, component styles, and design tokens
- `public/images/` — locally served architectural and studio photos

Update the `--color-*` and `--font-*` custom properties in `app/globals.css` to change the visual theme.

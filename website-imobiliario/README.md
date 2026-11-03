# Real estate website

A responsive sample real estate website featuring searchable property listings with location, property type, bedroom, and budget filters. Local photography features home interiors and architecture; the sample contains no people or company logos.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` and `npm run build` to validate changes.

## Project structure

- `app/page.tsx` — route entry point
- `app/components/PropertyExperience.tsx` — page sections, listing data, and search filters
- `app/globals.css` — responsive layout, component styles, and design tokens
- `public/images/` — locally served property and interior photos

Update the `--color-*` and `--font-*` custom properties in `app/globals.css` to change the visual theme. Replace the sample listings and contact details in `PropertyExperience.tsx` with the agency's information.

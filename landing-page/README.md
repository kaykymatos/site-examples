# Conversion-focused landing page

A responsive sample product landing page with a dashboard preview, benefits, social proof, and a focused trial call to action. It uses a locally bundled, people-free workspace photograph and original CSS artwork; no company logos are used.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` and `npm run build` to validate changes.

## Project structure

- `app/page.tsx` — route entry point
- `app/components/LandingExperience.tsx` — page sections and reusable UI
- `app/globals.css` — responsive layout, component styles, and design tokens
- `public/images/workspace.jpg` — locally served workspace photo

Update the `--color-*` and `--font-*` custom properties in `app/globals.css` to change the visual theme.

# Professional portfolio

A responsive sample portfolio for an independent designer, with photo-led case studies, a professional introduction, skills, experience, and direct contact links. Project photography is stored locally in `public/images/`; no portraits or company logos are used.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` and `npm run build` to validate changes.

## Project structure

- `app/page.tsx` — route entry point
- `app/components/PortfolioExperience.tsx` — page sections and reusable UI
- `app/globals.css` — responsive layout, component styles, and design tokens
- `public/images/` — local project photography

Update the `--color-*` and `--font-*` custom properties in `app/globals.css` to change the visual theme.

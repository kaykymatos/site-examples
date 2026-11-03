# Restaurant website

A responsive sample restaurant website with a filterable seasonal menu, opening hours, location details, and phone reservations. Local photography features food only; the sample contains no people or company logos.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` and `npm run build` to validate changes.

## Project structure

- `app/page.tsx` — route entry point
- `app/components/RestaurantExperience.tsx` — page sections, menu data, and category filters
- `app/globals.css` — responsive layout, component styles, and design tokens
- `public/images/` — locally served food photography

Update the `--color-*` and `--font-*` custom properties in `app/globals.css` to change the visual theme. Replace the sample phone number in `RestaurantExperience.tsx` before accepting reservations.

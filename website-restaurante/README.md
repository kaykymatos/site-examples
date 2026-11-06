# Restaurant website

A responsive sample restaurant website with a filterable seasonal menu, individual dish pages with photos and ingredient details, opening hours, location details, and phone reservations. Local photography features food only; the sample contains no people or company logos.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` and `npm run build` to validate changes.

## Project structure

- `app/page.tsx` — route entry point
- `app/components/RestaurantExperience.tsx` — home page sections
- `app/components/dishData.ts` — dish details shared by the menu and individual pages
- `app/menu/[slug]/page.tsx` — individual dish details
- `app/globals.css` — responsive layout, component styles, and design tokens
- `public/images/` — locally served food photography

Update the `--color-*` and `--font-*` custom properties in `app/globals.css` to change the visual theme. Replace the sample phone number in the restaurant header and dish detail page before accepting reservations.

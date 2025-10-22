## NovaMart – Next.js Marketplace

Sleek multi-page marketplace with App Router, Tailwind CSS, Framer Motion, next-themes, and Zustand.

### Quick Start

1. Install dependencies:

   - npm install

2. Run dev server:

   - npm run dev

3. Open:

   - http://localhost:3000

### Tech Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion (animations + transitions)
- next-themes (dark/light)
- Zustand (cart state)

### Structure

- `app/` pages: home, products, product details, cart, login, signup, profile, about, contact
- `components/` UI: navbar, footer, hero, grids, cards, forms, transitions
- `data/` mock products
- `store/` Zustand cart store
- `types/` shared types

### Notes

- Images use Unsplash URLs; replace as needed or configure Next Image.
- Page transitions are enabled via Framer Motion.
- Basic ripple micro-interaction added to elements with `ripple-container`.

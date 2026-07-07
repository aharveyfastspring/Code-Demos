# Dark Mode Toggle — FastSpring Embedded Checkout

A React + Vite demo showing a FastSpring [embedded checkout](https://fastspring.com/docs/) that switches between a light and dark storefront skin, driven by a header toggle in the host page.

Live demo: https://aharvey.fastspringexamples.com/demos/dark-mode/

## How it works

- `src/context/FastSpringContext.jsx` injects the FastSpring SBL (`fastspring-builder.min.js`) script and adds a demo product to the cart once it's ready.
- Switching themes re-points `data-storefront` at a different storefront (`embedded-light` / `embedded-dark`) and fully tears down and reinitialises the SBL script, since FastSpring reads `data-storefront` once at script load and doesn't support swapping it live.
- The checkout container is force-remounted on theme change (via a React `key`) so FastSpring's script sees an empty container to render into.
- A custom loading spinner replaces FastSpring's default skeleton by giving it the exact id (`fsc-embedded-checkout-skeleton`) FastSpring's script looks for — it's preserved and faded out automatically once the real checkout loads.

## Requirements

- Node.js 18+

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/`. `vite.config.js` sets `base: '/demos/dark-mode/'` to match the hosted deployment path — update that if you deploy elsewhere.

## Storefronts

The `data-storefront` values in `src/App.jsx` point to FastSpring test-mode storefronts (`aharvey.test.onfastspring.com`) and are not secrets — swap them for your own storefront to reuse this demo.

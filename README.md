# Zestora landing page

A mobile-first Next.js landing page based on the supplied reference, using the existing artwork in `public`.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run lint
npm run build
npm run format:check
```

Use `npm run format` to format source files.

## Structure

- `src/app/page.tsx`: landing-page composition.
- `src/components`: reusable sections, navigation, account preview, and Swiper carousels.
- `src/lib/constants.ts`: products, navigation, lifestyle images, and footer links.
- `src/app/globals.css`: shared design tokens and mobile-first responsive styles.
- `src/app/layout.tsx`: self-hosted Barlow Condensed and DM Sans fonts.
- `DESIGN_SYSTEM.md`: component conventions, accessibility behavior, and integration notes.

Original header routes resolve to landing-page sections. Account forms are UI previews; authentication and checkout services are not connected.

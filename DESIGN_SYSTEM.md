# Zestora design system

The landing page follows the supplied reference using the existing Zestora artwork in `public`. The source artwork differs from the reference's Zestify cans and photos; assets are used without modification.

## Tokens and typography

`src/app/globals.css` is a small, mostly-global stylesheet: a `@theme` block maps the design tokens (colors, radii, gutter/section-gap spacing) into Tailwind's own theme so components use generated utilities (`bg-lime-400`, `text-muted`, `border-border`, `rounded-pill`, `px-gutter`, …) instead of arbitrary-value brackets referencing CSS variables. The project's custom 600/768/1100px responsive breakpoints override the gutter/section-gap/radius-panel variables directly via plain `@media` blocks (not Tailwind's `sm`/`md`/`lg` prefixes). A handful of base/reset rules that Tailwind's Preflight doesn't already cover live in `@layer base` (so component-level Tailwind utilities can still override them); a `@layer components` block holds the shared `.btn`/`.btn-primary`/`.btn-outline`/`.btn-dark`/`.icon-btn` classes used by every button and icon-button across the app. The shared `.container`/`.wide-container`/`.panel`/`.section-space` structural helpers are kept global because they depend on the responsive gutter/section-gap/radius-panel tokens, and there's a narrow, documented exception for Swiper's own library-rendered markup (`.hero-product-stage .swiper*`, `.products-track .swiper`). Everything else — every component's specific look (`.hero`, `.product-card`, `.footer-title`, badges, pills, etc.) — lives as inline Tailwind utility classes directly on the JSX elements in each component. Mobile styles are the default; enhancements start at 600px (`sm:`), 768px (`md:`), and 1100px (`lg:`).

- **Ink:** `#30312e`; **muted text:** `#686b63`; **panels:** `#f6f6f4`.
- **Primary accent:** `#d5ed8b`, with `#c1df6b` for hover.
- **Spacing:** 4, 8, 12, 16, 24, 32, 48, 64, and 96px.
- **Display:** Barlow Condensed, weights 600–800, for headings, navigation, labels, and editorial copy.
- **Body:** DM Sans, weights 400–500, for general text and account forms.
- Fonts are bundled through Fontsource and optimized with `next/font/local`; visitors make no requests to a font CDN.

## Reusable building blocks

`src/components/ui.tsx` exports `ButtonLink`, `SectionBadge`, `LifestylePhotos`, and `FreshStrip`. Button and icon-button styling comes from the shared `.btn`/`.btn-primary`/`.btn-outline`/`.btn-dark`/`.icon-btn` classes in `globals.css` — primary actions use `.btn-primary` (lime background), secondary controls use `.btn-outline` or `.btn-dark`, and icon-only controls share `.icon-btn`. Badge/pill styling is still a small per-component utility string (e.g. `SectionBadge`, `PILL_BASE` in `Sections.tsx`) since each has different sizing.

Product data, header links, footer groups, image lists, and currency formatting live in `src/lib/constants.ts`. Add products there to extend both carousels. Keep stable product IDs for React keys and selection state.

## Interaction and accessibility

- Swiper powers both the flavor transition and the responsive product carousel.
- Hero selectors expose the selected flavor through `aria-pressed` and a live label.
- Carousels support touch, focus-scoped arrow keys, and reduced motion. Page Up and Page Down retain their normal scrolling behavior.
- Product cards provide reversible, session-only flavor selection; these are not checkout actions.
- Mobile navigation preserves every original header destination. `/about`, `/products`, `/services`, and `/order` resolve to their corresponding landing-page anchors.
- The native account dialog contains focus, supports Escape, and restores focus after dismissal.
- Semantic landmarks, a skip link, descriptive image alternatives, visible focus indicators, and reduced-motion styles are included.

## Integration boundaries

This is a frontend landing page. Login and registration are explicitly marked as previews and do not transmit or store credentials. Connect an authentication provider before enabling account submission. Product selection is not persisted and there is no checkout or payment backend.

Prices, discount copy, rating copy, the contact email, and generic social destinations are design content. Confirm business details and replace social URLs with the actual brand profiles before launch.

## Validation

Run `npm run lint`, `npm run build`, and `npm run format:check`. Development preview: `npm run dev`.

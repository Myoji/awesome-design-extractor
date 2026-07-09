# Audi Global Design System Extraction

Source: https://www.audi.com/en.html  
Language: Korean  
Scope: public, rendered visual analysis only. This document describes observable design patterns and does not imply affiliation with Audi.

## 1. Visual Theme & Atmosphere

Audi global uses a dark-first premium media system: black chrome header, charcoal page planes, near-white typography, slate-gray controls, rounded model cards, and restrained image-led storytelling. The mood is technical, quiet, and editorial, but less severe than a pure black-and-white system because many controls use soft blue-gray fills and rounded pills.

The site feels like a corporate/media hub plus model catalog. It uses large empty dark fields, compact article cards, model grids, search/form utilities, and dense legal/footer regions. Avoid bright decorative accents, colorful SaaS palettes, and playful gradients. Visual interest should come from tonal layering, image crops, precise spacing, and rounded dark components.

## 2. Color Palette & Roles

| Token | Value | Role | Evidence |
| --- | --- | --- | --- |
| `audi-black` | `#020203` | Header, deepest footer, high-contrast chrome | Observed in global header |
| `audi-page` | `#101319` | Page background and breadcrumb bands | Observed as repeated page/background strip |
| `audi-surface` | `#181D25` | Secondary buttons, search field fill, deep panels | Observed across header/search/register |
| `audi-card` | `#2C343F` | Card borders, panel divisions, menu surface approximation | Observed as border/surface color |
| `audi-panel` | `#404A59` | Selected locale, lifted control surfaces | Observed on active locale button |
| `audi-primary` | `#657081` | Primary CTA fill | Observed on primary pill buttons |
| `audi-text` | `#FCFCFD` | Primary heading/body text on dark | Dominant computed foreground |
| `audi-text-muted` | `rgba(252,252,253,.70)` | Supporting copy, breadcrumbs, legal copy | Dominant muted foreground |
| `audi-text-faint` | `rgba(154,163,177,.30)` | Disabled controls and de-emphasized UI | Observed on disabled carousel arrow |
| `audi-border` | `rgba(219,223,230,.60)` | Search and form field borders | Observed on inputs/search |
| `audi-border-subtle` | `rgba(252,252,253,.10)` | Inset controls and low-contrast dividers | Observed in shadow/border samples |

Do not invent red as the main Audi web accent for this source. In the crawled global site, primary actions use slate-gray pills, not red. Semantic success, warning, and error colors were not observed.

## 3. Typography Rules

Primary stack:

```css
font-family: "Audi Type Variable", Verdana, Geneva, sans-serif;
```

Observed type rhythm:

| Role | Desktop Size / Line Height | Mobile Size / Line Height | Weight | Usage |
| --- | --- | --- | --- | --- |
| Body copy | `16px / 24px` | `16px / 24px` | `400` | Paragraphs, card copy, form text |
| Small UI | `14px / 24px` | `14px / 24px` | `400` | Buttons, labels, footer links |
| Page H1 | `40px / 60px` | `28px / 40px` | `400` | Page title blocks |
| Section H2 | `32px / 44px` | `24px / 36px` | `400` | Model categories, form sections |
| Module heading | `24px / 36px` | `20px / 32px` | `400` | Cards, media-center panels, submodules |
| Caption/legal | `12px-14px / ~16-24px` | same | `400` | Legal text, metadata, footer |

Use regular weight as the default. Audi's observed hierarchy comes from size, spacing, and contrast rather than heavy bold. Keep line heights relaxed and readable; avoid all-caps display treatments unless new evidence supports them.

## 4. Component Stylings

Navigation:

- Desktop header is `72px` high, `#020203`, with about `96px` left padding and `84px` right padding at a `1440px` viewport.
- Header contains a compact brand mark area, a `50px` high pill-style menu button, and a full search input around `500 x 46`.
- Breadcrumb/language strip is about `40px` high with `#101319` background and compact right-aligned locale controls.
- Open menu appears as a dark left drawer with simple vertical list rows and chevron disclosure indicators.

Buttons and chips:

- Primary CTA: `#657081` fill, `#FCFCFD` text, `999px` radius, `50px` height, `12px 24px` padding, `14px / 24px` type.
- Secondary CTA: `#181D25` fill, `1px` border using `#2C343F` or subtle gray alpha, `999px` radius, same height and padding.
- Locale or selected pill: `#404A59` fill with subtle border.
- Topic chips: rounded rectangular tiles, `20px` radius, dark transparent fill, `#2C343F` border. Desktop chips are short horizontal pills; mobile chips become taller two-column tiles.

Cards and content modules:

- Model cards are rounded dark media tiles. Desktop card body is around `237 x 179`; mobile card body is around `334 x 216`.
- Use `20px` radius on card shells and chips. Do not make cards sharp-cornered unless they are structural bands.
- Cards are flat: no default drop shadow. Use tone, border, and media crop to separate surfaces.
- Article/media modules use image thumbnail plus short metadata and title, usually on dark surfaces.

Forms and search:

- Search input: dark translucent fill `rgba(24,29,37,.6)`, `rgba(219,223,230,.6)` border, `999px` radius, `46px` height.
- Form fields: dark translucent fill, `rgba(219,223,230,.6)` border, `10px` radius, about `46px` high.
- Labels use `14px / 24px` or similar small UI text. Keep labels close to fields and avoid oversized form chrome.
- Desktop forms use paired columns where space allows; mobile stacks full-width.

Carousel and utility controls:

- Circular arrow controls are `56 x 56`, `999px` radius.
- Pagination dots are small, around `8 x 8`, using solid near-white for active and low-alpha white for inactive.
- Disabled or inactive states should lower opacity instead of changing hue.

Footer:

- Footer is dense, black, and legal-heavy.
- Use small links, thin separators, locale pills, and muted legal copy.
- Keep the same content rail rather than centering a decorative footer card.

## 5. Layout Principles

Desktop uses a strong rail system. At `1440px`, content commonly sits in a `1216-1248px` rail with about `96px` side margins. The header inner rail was measured around `1260px`.

Use these layout rules:

- Start with a dark page canvas and layer charcoal sections.
- Prefer full-width section bands with inner rails over floating white cards.
- Use generous top/bottom spacing around title blocks and category sections.
- Use five-column model/card grids on wide desktop when cards are compact.
- Use two-column layouts for forms and paired narrative/media blocks.
- Keep search, filters, and breadcrumbs compact; they should support the content rather than dominate.
- Footer and legal text can be dense, but must remain aligned and scannable.

Mobile uses a `334px` content rail on a `390px` viewport, approximately `28px` side padding. Cards stack vertically, topic chips wrap into two columns, search collapses to an icon, and type scales down while preserving relaxed line heights.

## 6. Depth & Elevation

The system is mostly flat and tonal.

Observed depth rules:

- Use dark tonal layers instead of heavy shadows.
- Default card and chip depth comes from `20px` radius plus subtle border.
- Use `1px` borders and low-alpha inset outlines for controls.
- Reserve shadows for overlays or exceptional floating surfaces; observed shadows were rare and subtle.
- Menu drawer depth is created by a large dark overlay panel, not by bright drop shadows.

## 7. Do's and Don'ts

Do:

- Use `#020203`, `#101319`, `#181D25`, `#2C343F`, `#404A59`, `#657081`, and `#FCFCFD` as the core palette.
- Use `"Audi Type Variable", Verdana, Geneva, sans-serif`.
- Keep typography regular weight and spacious.
- Use pill CTAs and rounded dark model cards.
- Use slate-gray primary actions instead of bright accent CTAs.
- Build desktop around a `1216-1248px` rail and mobile around a `334px` rail.
- Treat original logos and photography as protected evidence, not reusable assets.

Don't:

- Do not use red as the default primary CTA for this extracted global site.
- Do not introduce white-background SaaS cards, bright gradients, glassmorphism, or decorative blobs.
- Do not overuse drop shadows.
- Do not make every component sharp-cornered; Audi global uses rounded pills and cards heavily.
- Do not force desktop five-column grids onto mobile.
- Do not invent alert/success/error tokens without additional evidence.
- Do not copy Audi vehicle imagery, rings, or brand artwork into reusable templates.

## 8. Responsive Behavior

Use desktop as the canonical base system. Mobile values are responsive overrides.

Desktop:

- Header is `72px` high with brand mark, menu pill, full search field, and right-side actions.
- Breadcrumb/language band sits below the header at about `40px`.
- H1 uses `40px / 60px`; section H2 uses `32px / 44px`.
- Model cards fit a five-column grid.
- Topic chips can run as a horizontal row.
- Forms can use two columns for related fields.

Mobile:

- Header becomes compact: menu icon, small brand mark, search icon.
- H1 drops to `28px / 40px`; section headings to `24px / 36px`; module headings to `20px / 32px`.
- Model cards stack one per row at about `334px` width.
- Topic chips wrap into a two-column grid with taller tap targets.
- Forms stack full-width.
- Footer links and legal copy stack vertically; locale pills remain visible.

## 9. Agent Prompt Guide

Use this prompt when asking another coding agent to recreate an Audi global-inspired interface without copying proprietary assets:

```text
Build a dark-first premium automotive media/catalog interface inspired by the publicly observed Audi global website. Use desktop rendering as the base system and mobile as responsive overrides. Use the palette #020203, #101319, #181D25, #2C343F, #404A59, #657081, #FCFCFD, rgba(252,252,253,.70), rgba(219,223,230,.60). Set typography to "Audi Type Variable", Verdana, Geneva, sans-serif with regular weight: body 16/24, UI 14/24, desktop H1 40/60, desktop H2 32/44, module 24/36; mobile H1 28/40, H2 24/36, module 20/32. Use a 1216-1248px desktop content rail with about 96px margins, and a 334px mobile rail on 390px screens. Build a 72px black header, compact breadcrumb/language strip, pill buttons, rounded topic chips, 20px-radius model cards, 10px-radius form fields, circular carousel controls, dark menu drawer, and dense black footer. Primary CTAs are slate-gray pills (#657081), not red. Keep depth mostly flat with borders and tonal layers. Avoid bright gradients, glassmorphism, white SaaS cards, heavy shadows, and copied Audi images or logos. Mark any brand/media references as protected evidence only and state that no affiliation is implied.
```

# Genesis Korea Design System Extraction

Source: https://www.genesis.com/kr/ko  
Language: Korean  
Scope: public, rendered visual analysis only. This document describes observable design patterns and does not imply affiliation with Genesis or Hyundai Motor Company.

## 1. Visual Theme & Atmosphere

Genesis Korea presents a cinematic luxury automotive system: dark hero media, quiet navigation, large light-weight type, precise line work, and restrained editorial pacing. The visual language is premium but not ornamental. It relies on black, white, charcoal, pale gray, warm copper-brown accents, full-bleed vehicle photography, and wide negative space.

The system feels like a luxury gallery plus automotive configurator. Product pages use immersive hero imagery and long editorial sections; service and support pages use dark photographic banners followed by dense, practical list layouts. The brand posture is calm, confident, and controlled.

Use this system with sharp alignment, low-radius rectangles, measured typography, and image-led sections. Avoid generic SaaS cards, colorful badges, gradients, and decorative shadows.

## 2. Color Palette & Roles

| Token | Value | Role | Evidence |
| --- | --- | --- | --- |
| `gx-black` | `#000000` | Primary text, dark sections, dark page backgrounds | Most common sampled foreground color |
| `gx-ink` | `#111111` | Near-black surfaces, footer, primary filled CTA, main text | Repeated in header/footer/shopping pages |
| `gx-charcoal` | `#1A1A1A`, `#151515` | Dark vehicle cards and commerce surfaces | Quote and purchase pages |
| `gx-white` | `#FFFFFF` | Text on dark media, utility page backgrounds, form fields | Repeated across all page types |
| `gx-surface` | `#F5F5F5` | Light page modules, carousel control fill, neutral cards | Home, product, controls |
| `gx-surface-soft` | `#F8F8F8`, `#F0F0F0` | Subtle section and card backgrounds | Support/product surfaces |
| `gx-border` | `#E5E5E5`, `#EAEAEB`, `#CECED0` | Row dividers, field lines, subtle card borders | FAQ, notice, forms |
| `gx-muted` | `#69696E`, `#535356`, `#757575`, `#808080`, `#929296` | Secondary text, inactive tabs, placeholders | Tabs, forms, secondary copy |
| `gx-copper` | `#AF6249`, `#C36F51` | Sparse brand/program accent and category emphasis | FAQ/category labels and warm Genesis/Magma accents |
| `gx-overlay-control` | `rgba(245,245,245,.8)`, `rgba(58,58,60,.7)` | Carousel and floating utility controls | Home carousel controls |

Do not use `#0000EE` as a Genesis token. It appeared in computed values for some links, but the visible design did not establish blue as a deliberate brand color.

No reliable success, warning, error, or focus tokens were observed. Do not invent them without new evidence.

## 3. Typography Rules

Primary text stack:

```css
font-family: GenesisSansTextKr, "Noto Sans", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", Roboto, sans-serif;
```

Primary heading stack:

```css
font-family: GenesisSansHeadKr, "Noto Sans", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", Roboto, sans-serif;
```

Legacy/generated aliases such as `genesis-text`, `genesis-head-light`, and `genesis-head` also appeared in rendered styles. For new implementation, prefer the explicit Korean fallback stacks above unless matching existing Genesis CSS directly.

Observed type rhythm:

| Role | Desktop Size / Line Height | Mobile Size / Line Height | Weight | Usage |
| --- | --- | --- | --- | --- |
| Utility page H1 | `80px / 94px` | `40px / 45px` | `400` | FAQ, support, notice hero banners |
| Brand or program H1 | `60px / 66px` | not fully sampled | `300-400` | Brand overview, Magma pages |
| Shopping H1 | `42px / 50px` | `26px / 32px` | `400` | Quote, purchase, showroom utility pages |
| Product hero title | `48px / 62px` | `32px / 44px` | `300` | Vehicle hero titles |
| Editorial section title | `52px / 66px` | `28px / 40px` | `300` | Product story headings |
| Home section title | `40px-48px` | `28px / 40px` | `300` | Home modules and journeys |
| Category tab | `18px / 20px` | smaller or scrollable | `400` | Quote/purchase tabs |
| Body/UI | `16px / 24px` | `14px-16px` | `400` | Nav, cards, CTAs, copy |
| Small UI/footer | `14px / 18-22px` | `14px / 22px` | `400-500` | Footer links, compact labels |

Regular weight is the default. Use light `300` for large luxury display type. Use `500` only for emphasis such as active/footer links. Bold is rare and should not be the default.

Large headings often use tight negative tracking in the source site. Apply that only when reproducing the observed Genesis hierarchy; for robust generated UI, keep tracking subtle and never use wide letter spacing.

## 4. Component Stylings

Navigation:

- Desktop header is about `66px` high, thin, high-z, and text-led.
- Mobile header is about `56px` high and collapses to logo plus compact menu controls.
- Header color adapts to context: white text/icons over dark hero media; black text/icons on light utility pages.
- Main nav labels are `16px / 24px`, regular weight, no pill backgrounds, no rounded hover chips.
- Mega navigation is expansive but still line-and-text driven.

Buttons and links:

- Primary filled CTA: `#111111` background, `#FFFFFF` text, about `48px` high, `2px` radius, horizontal padding around `24px`.
- Dark-media outline CTA: transparent fill, `1px solid #FFFFFF`, about `200 x 52`, `4px` radius, centered `14px` label.
- Text CTA: no fill, no border, `14-16px` text with a small directional affordance. Common labels include `자세히 보기`, `견적 내기`, `더 알아보기`, `예약하기`.
- Do not turn every CTA copper. Copper is an accent, not the default action color.

Tabs and filters:

- Category tabs are rectangular and underline-based.
- Quote/purchase tabs are about `52px` high with equal columns.
- Active tabs use white text on dark pages and a bottom rule; inactive tabs use gray such as `#808080`.
- Product/test-drive filters use line separators rather than filled pills.

Cards and content modules:

- Product/model cards are flat, image-led, and rectangular. Home model cards were about `296 x 316` in a four-column rail at `1440px`.
- Cards have `0px` radius and no drop shadow.
- Dark commerce cards use charcoal surfaces (`#1A1A1A` / `#151515`) and subtle borders.
- News/event/boutique cards rely on imagery, short titles, and small text links. Avoid nested decorative cards.

Forms and search:

- Search inputs are about `43px` high, white-filled, `0px` radius, with `10-18px` horizontal padding.
- Placeholder and label text uses muted gray such as `#757575`.
- Field treatment is flat; use bottom lines or thin box boundaries rather than raised inputs.
- Validation states were not observed, so keep them outside this extraction unless separately evidenced.

Lists and accordions:

- FAQ rows are dense, separator-based, and right-aligned with a plus icon.
- Category labels can use the copper-brown accent, but row text remains black or dark gray.
- Long support lists should prioritize scanning and vertical rhythm over card decoration.

Utility controls:

- Carousel arrows are a clear exception to the square system: about `52 x 52`, circular, using translucent pale gray.
- Floating dark utility controls can use `rgba(58,58,60,.7)`.
- Do not generalize circular controls to primary UI.

State handling:

- Treat active tabs, selected category rows, visible accordion affordances, and filled/outline CTA variants as observed component states.
- Treat hover, focus, validation, disabled, and error states as unresolved unless a separate interaction crawl captures them.
- Do not use inferred validation colors or animated configurator behavior as part of the base system.

Footer:

- Footer uses `#111111` background with white text.
- Desktop padding is around `48px 0 60px`; mobile is around `40px 0`.
- Links are compact, commonly `14px / 22px`, arranged in rows that wrap on mobile.

## 5. Layout Principles

Genesis uses two dominant page grids:

- Wide product rail: about `50px` side offsets at `1440px`, leaving roughly `1340px` for product modules, carousels, and full media storytelling.
- Utility/content column: support, FAQ, notice, quote, and purchase pages often start content around `x=250px` with a narrower, more editorial content region.

Use full-width or near full-width bands instead of floating page-section cards. Major sections should feel like gallery rooms: clear top/bottom spacing, image-led composition, and restrained copy blocks.

Core rules:

- Let media carry emotional weight; keep UI controls quiet.
- Prefer horizontal product/media carousels on desktop.
- Use dense line-based lists for support and FAQ content.
- Keep product cards aligned to a strict grid and avoid decorative containers.
- Use dark hero bands with white text for premium tone, then transition to white editorial sections.
- On utility pages, pair a dark photographic banner with clean white list/search content below.

Mobile layout uses roughly `20px` rails for product/home pages and `30px` rails for some utility pages. Most content stacks into one column, but some carousels remain horizontally scrollable.

## 6. Depth & Elevation

The system is intentionally flat.

Observed depth rules:

- `0px` radius dominates buttons, cards, rows, and panels.
- Drop shadows are almost absent; only a handful of light overlay shadows were sampled.
- Separators and contrast replace elevation.
- Dark hero overlays create depth through photography and scrims, not layered UI.
- Circular carousel/utility controls are exceptions.
- Do not use glassmorphism, soft floating cards, heavy shadows, bokeh, or gradient decoration.

## 7. Do's and Don'ts

Do:

- Use black, near-black, white, pale gray, and sparse copper.
- Use large, light-weight headings with generous vertical space.
- Use full-bleed or wide media blocks for product and brand storytelling.
- Use flat rectangular CTAs and thin outline buttons.
- Use precise 1px separators for lists, tabs, and forms.
- Keep model cards image-led and grid-aligned.
- Keep mobile typography substantially smaller than desktop.
- Use neutral placeholders in generated work unless legally usable product imagery is provided.

Don't:

- Do not use rounded cards, pill buttons, colorful badges, or generic SaaS panels.
- Do not make copper the primary CTA fill.
- Do not add blue links, purple gradients, decorative orbs, or saturated accent palettes.
- Do not use heavy bold headings as the default.
- Do not center every section; Genesis uses anchored grid composition.
- Do not invent alert colors, validation states, or a full dark mode.
- Do not copy Genesis product photography into generated previews or imply affiliation.

## 8. Responsive Behavior

Use desktop rendering as the canonical base system. Mobile evidence should be documented as responsive overrides or mobile variants, especially when navigation, CTA stacking, carousel behavior, or type scale differs from desktop.

Desktop:

- Header exposes horizontal navigation and right utility links.
- Home and product pages use wide rails, horizontal carousels, large imagery, and multi-column cards.
- Utility pages use big dark hero banners followed by centered search/list content.
- Product sections alternate full-width imagery, two-column detail areas, and editorial text.

Mobile:

- Header compresses to about `56px` and hides desktop nav.
- Page H1 scale drops roughly from `80px` to `40px`; product hero titles from `48px` to `32px`; section titles to around `28px`.
- Side padding is typically `20-30px`.
- Journey CTAs stack into full-width black buttons.
- Product/detail content stacks vertically; selected carousels remain horizontally scrollable.
- Footer links wrap into compact rows over a dark background.

Tablet behavior was not captured. Use cautious interpolation between the desktop and mobile rules.

## 9. Agent Prompt Guide

Use this prompt when asking another coding agent to build a Genesis Korea-inspired interface without copying proprietary assets:

```text
Build a luxury automotive interface inspired by the public Genesis Korea site. Use a restrained palette of #000000, #111111, #FFFFFF, #F5F5F5, #F8F8F8, #E5E5E5, muted grays, and a sparse copper accent around #AF6249. Use Genesis-like typography through a Korean sans stack: GenesisSansHeadKr/GenesisSansTextKr when available, otherwise Noto Sans and Apple/system fallbacks. Large headings should feel light, spacious, and premium; regular weight is the default, with light display headings and very little bold.

Structure pages as full-width bands, wide product rails, and editorial media sections. Use flat rectangular CTAs, text links with small directional affordances, underline tabs, separator-based FAQ rows, and image-led product cards with no radius and no shadows. Use black or charcoal surfaces for hero and commerce sections, white and pale gray for support/content sections, and thin borders instead of elevation.

Use desktop as the canonical base: wide product rails, horizontal navigation, multi-column cards, and full media bands define the system. On mobile, compress the header, reduce display type aggressively, stack CTA groups, keep 20-30px side rails, and allow selected carousels to scroll horizontally as responsive overrides. Render header/nav, filled and outline CTAs, text links, underline tabs, product cards, dark commerce cards, search/list rows, carousel controls, footer rows, and limited observed states in catalog previews. Do not use rounded SaaS cards, colorful badges, decorative gradients, glassmorphism, blue browser-link styling, or copied Genesis imagery.
```

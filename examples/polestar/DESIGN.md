# Polestar Korea Design System Extraction

Source: https://www.polestar.com/kr/
Language: Korean
Scope: public, rendered visual analysis only. This document describes observable design patterns and does not imply affiliation with Polestar.

## 1. Visual Theme & Atmosphere

Polestar Korea presents a restrained premium EV identity: monochrome surfaces, large product imagery, flat UI controls, and editorial pacing. The system avoids decorative chrome, gradients, rounded cards, and dense ornament. Visual weight comes from photography, sharp contrast, huge type, spacious composition, and exact alignment.

The dominant impression is technical, calm, and high-control. Pages alternate between white or light gray product-selection areas and black/dark product-story sections. Orange appears only as a functional highlight, usually for active filters, promotional year labels, map/search accents, and arrow indicators.

Use the system like a product catalog plus editorial magazine, not like a SaaS dashboard or generic marketing landing page. Keep the interface quiet and exact; let the product/media area carry the drama.

## 2. Color Palette & Roles

| Token | Value | Role | Evidence |
| --- | --- | --- | --- |
| `ps-black` | `#000000` | Primary text, primary buttons, dark sections, icon strokes | Observed across all visited pages |
| `ps-white` | `#FFFFFF` | Page background, dark-section text, white product-card areas | Observed across home/product/news/form pages |
| `ps-text-muted` | `rgba(0,0,0,.6)` | Secondary copy, inactive headings, footer column labels | Observed as `#000000 @ 0.6` |
| `ps-text-faint` | `rgba(0,0,0,.3)` / `rgba(0,0,0,.15)` | Disabled or de-emphasized controls | Limited evidence from forms/map pages |
| `ps-surface` | `#F0F0F0` | Footer, product cards, light modules | Repeated on home, product, offers, footer |
| `ps-surface-soft` | `#F3F4F4` | Form field fills and subtle form sections | Newsletter and locations pages |
| `ps-warm-gray` | `#ECECE7` | Warm light informational surfaces | Charging page |
| `ps-banner-gray` | `#D9D9D6` | Top promotional strip | Home page |
| `ps-dark-gray` | `#3A3C3F`, `#53565A`, `#5D5D5D` | Map markers, chat/help affordances, dark media areas | Locations and product pages |
| `ps-orange` | `#F06E00` | Active filters, promotional labels, arrow accents | Offers, locations, forms |
| `ps-orange-hot` | `#FF7500` | Secondary orange accent in charging/location surfaces | Limited evidence |

Do not treat browser-blue `#0000EE` as a brand token. It appeared in computed values for some link wrappers, but the visible design relies on black, white, gray, and orange.

## 3. Typography Rules

Primary stack:

```css
font-family: "Polestar Unica", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

Observed type rhythm:

| Role | Size / Line Height | Weight | Letter Spacing | Usage |
| --- | --- | --- | --- | --- |
| Body / UI | `16px / 18px` | `400` | `-0.3px` | Nav, buttons, labels, body copy, footer links |
| Legal / caption | `12px / 14px` | `400` | about `-0.1px` | Legal copy, small footnotes |
| Section title | `30px / 32px` | `400` | `-1.2px` | Home modules, booking steps, newsletter headings |
| Product narrative | `32px / 33.92px` | `400` | about `-1.28px` | Product pages and large editorial paragraphs |
| Mobile narrative | `24px / ~25px` | `400` | about `-0.96px` | Product-page mobile story copy |
| Product display | `60px`, `72px`, `80px` | `400` | tight negative tracking | Product hero titles |
| Oversized action text | up to `110px / 110px` | `400` | tight negative tracking | Home action stack such as booking/order/location links |

Bold is rare. Use `700` only for selected emphasis such as active footer links or small inline emphasis. Do not introduce extra font weights, all-caps headings, wide tracking, or decorative display fonts.

## 4. Component Stylings

Navigation:

- Desktop header is flat white, about `72px` high, with a left wordmark area and right-aligned product/category links.
- A top promotional strip can sit above the header at about `40px` high with `#D9D9D6` background and centered `16px / 18px` text.
- Mobile collapses to a compact header with wordmark left and hamburger right. The footer becomes accordion-like grouped sections.

Buttons and links:

- Primary button: `#000000` background, `#FFFFFF` text, `0px` radius, `48px` height, `padding: 0 32px 0 16px`. Arrow accent is commonly orange.
- Compact product-nav button: black background, white text, `36px` height, `padding: 0 16px`.
- Secondary outline button: transparent background, `1px` inset or border in black or white, `0px` radius, `48px` height.
- Text links do not need underlines. Pair them with a precise right arrow; use orange sparingly for the arrow or active state.

Cards and content modules:

- Product cards are flat rectangular media tiles with no radius and no drop shadow.
- Use light gray image wells (`#F0F0F0`) and sharp 1px separators.
- Cards can be full-width bands, two-column desktop grids, or three-column link rows. Do not float cards inside decorative containers.

Forms:

- Inputs are rectangular and flat: often `48px` high, `#F3F4F4` fill or transparent field area, bottom border or 1px line.
- Labels are `16px / 18px`, regular weight, black or muted black.
- Desktop forms use two-column alignment for personal information; mobile stacks fields full width.
- Checkbox controls are square, about `22px`, with no radius.

Filters and map controls:

- Filter buttons are `40px` high, `0px` radius.
- Active filter uses orange fill (`#F06E00`) with black text.
- Inactive filters use transparent fill and `1px solid rgba(0,0,0,.6)`.
- Map UI remains grayscale and utilitarian; markers use black/dark circular forms.

State handling:

- Treat selected filter states as observed: selected is orange, inactive is transparent outline.
- Treat simple focus, hover, and disabled samples as conservative CSS-transformable states unless separately measured in the live site.
- Do not promote deep configurator, profile, or modal/help internals into core components without new interaction evidence.

## 5. Layout Principles

Desktop layout uses a strong central grid. At `1440px`, the common content width is about `1216px`, leaving roughly `112px` side margins. Product story pages also use full-bleed media blocks, but internal copy remains carefully anchored.

Use these layout rules:

- Prefer full-width bands over floating section cards.
- Use sharp horizontal and vertical separators instead of shadows.
- Use generous vertical whitespace between major sections.
- Pair short editorial copy with very large product media.
- Keep text blocks narrow when images are large; avoid long dense paragraphs across the full page width.
- Use 2-column grids for product choices and offer cards on desktop.
- Use 3-column link rows for compact navigation blocks on desktop.
- For map/search pages, reserve a fixed left control panel and let the map fill the remaining viewport.

Mobile layout uses about `24px` side padding and stacks most modules into one column. Large media crops vertically; text remains aligned, not centered by default.

## 6. Depth & Elevation

The system is intentionally flat.

Observed depth rules:

- No card radius and almost no drop shadow.
- Borders and `box-shadow: inset 0 0 0 1px` replace elevation.
- Dark sections create depth through black/charcoal backgrounds and image contrast, not layered shadows.
- Floating help controls and map controls may be circular, but these are utility exceptions.
- Modal overlays exist for consent/help flows, but normal page UI should not use modal-like cards for decoration.

## 7. Do's and Don'ts

Do:

- Use black, white, pale gray, and sparse orange.
- Keep radius at `0px` for buttons, inputs, cards, and panels.
- Use Polestar-like tight typography with regular weight.
- Use product-scale media blocks and calm editorial spacing.
- Use exact 1px separators and inset outlines.
- Keep orange accents functional, not decorative.
- Use real product/state imagery when legally available; otherwise use neutral placeholders without copying proprietary assets.

Don't:

- Do not add rounded cards, pill buttons, glassmorphism, shadows, gradient blobs, or decorative bokeh.
- Do not turn every CTA orange. Orange is an accent, not the primary button color.
- Do not use heavy bold headings as the default.
- Do not center everything. Most layouts are anchored and grid-based.
- Do not use saturated blues, purples, or generic SaaS palettes.
- Do not invent a full dark mode. Dark product sections exist, but a site-wide dark theme was not observed.

## 8. Responsive Behavior

Use desktop as the canonical base system. Mobile rules should be applied as responsive overrides or named mobile variants rather than replacing desktop component anatomy, grid logic, or default token roles.

Desktop:

- Header shows horizontal navigation.
- Product and offer pages use 2-column or asymmetric media/text compositions.
- Footer is multi-column, with visible grouped links.
- Large action links can become oversized typographic rows.

Mobile:

- Header collapses to hamburger navigation.
- Cards and product modules stack vertically.
- Footer groups collapse into accordion-like rows.
- Product story text often drops from `32px` to `24px`; common section headings remain around `30px`.
- Inputs become single-column full-width fields, commonly around `343px` wide on a `390px` viewport.
- Hero media crops aggressively; keep text readable over darkened or high-contrast image areas.

## 9. Agent Prompt Guide

Use this prompt when asking another coding agent to recreate a Polestar Korea-inspired interface without copying proprietary assets:

```text
Build a restrained premium EV interface inspired by the publicly observed Polestar Korea website. Use desktop rendering as the base system and express mobile as responsive overrides. Use a monochrome base: #000, #fff, #F0F0F0, #F3F4F4, with sparse #F06E00 accents only for active filters, arrow accents, and promo labels. Set typography to "Polestar Unica", "Helvetica Neue", Helvetica, Arial, sans-serif; body 16/18 regular with tight letter spacing, section headings 30/32 regular, product narrative 32/33.92 regular, and occasional large display type at 60-80px. Use 0px radius everywhere except utility circular map/help controls. Buttons are rectangular: black primary with white text, transparent secondary with 1px inset outline, 48px high with 16px left and 32px right padding. Layout should use full-width bands, sharp separators, large media wells, 1216px desktop content width around a 1440px viewport, and 24px mobile side padding. Render header/nav, product cards, offer modules, forms, selected filters, footer accordions, map utilities, and oversized action rows when building a catalog preview. Avoid gradients, rounded cards, drop shadows, decorative blobs, and overuse of orange. Do not copy Polestar images or imply brand affiliation.
```

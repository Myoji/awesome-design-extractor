# Mercedes-Benz Korea Design System Extraction

Source: https://www.mercedes-benz.co.kr/passengercars.html  
Language: Korean  
Scope: public, rendered visual analysis only. This document describes observable design patterns and does not imply affiliation with Mercedes-Benz.

## 1. Visual Theme & Atmosphere

Mercedes-Benz Korea uses a luxury retail system built from high-contrast black chrome, white editorial space, restrained grays, and a single confident blue action color. The visual tone is quiet, premium, and product-led. It does not rely on decorative gradients or playful color; hierarchy comes from large image stages, serif display type, dense but orderly retail grids, and controlled whitespace.

The dominant surfaces are:

- Black global header, hero overlays, and footer.
- White page body and editorial modules.
- Light gray product-card wells and filter panels.
- Blue primary actions for conversion moments.
- Thin gray borders and small radius controls.

Use imagery as evidence only. Reconstructed surfaces should use CSS-generated panels, tonal placeholders, and layout surrogates rather than copied photography or brand artwork.

## 2. Color Palette & Roles

| Token | Value | Role | Evidence |
| --- | --- | --- | --- |
| `mb-black` | `#000000` | Header, footer, dark hero overlays | Repeated foreground/background sample |
| `mb-ink` | `#333333` | Primary body text and dark gray surfaces | Dominant computed color |
| `mb-white` | `#FFFFFF` | Page canvas and card background | Home, model, service pages |
| `mb-soft` | `#F8F8F8` | Product card wells, quiet modules | Observed card backgrounds |
| `mb-line` | `#E8E8E8` | Dividers and structural lines | Frequent border sample |
| `mb-border` | `#BBBBBB` | Secondary button borders and controls | Observed button/filter borders |
| `mb-muted` | `#696969` | Supporting text and utility labels | Repeated computed foreground |
| `mb-faint` | `#9F9F9F` | Disabled text and low-emphasis UI | Repeated computed foreground |
| `mb-blue` | `#0078D6` | Primary CTA fill | Observed action background |
| `mb-blue-active` | `#006ABC` | Pressed/active blue approximation | Observed as rare action shade |

Do not invent a broad accent palette. Success, warning, error, and informational states were not directly exercised in the crawl and should be treated as unknown until observed.

## 3. Typography Rules

Primary observed stacks:

```css
font-family: "MBCorpo Text", DaimlerCS-Regular, DaimlerCSArab-Regular, Arial, sans-serif;
font-family: "MBCorpo Title", DaimlerCAC-Regular, DaimlerCACArab-Regular, serif;
```

Observed type rhythm:

| Role | Desktop Size / Line Height | Weight | Usage |
| --- | --- | --- | --- |
| Hero H1 | `64px / 72px` | `400` | Large campaign stages |
| Section H2 | `48px / 60px` | `400` | Major page sections |
| Category heading | `34px / 40px` | `400` | Model categories and editorial blocks |
| Card heading | `24px / 32px` | `700` | Product/card titles |
| Body copy | `16px / 24px` | `400` | Paragraphs, cards, filters |
| CTA / UI | `16px / 24px` | `700` | Buttons and high-emphasis controls |
| Caption / helper | `12px-14px / 16-20px` | `400` | Legal, labels, metadata |

Use the title serif stack for large brand and section statements. Use the text stack for controls, filters, cards, and dense commerce content. Avoid heavy all-caps display treatments unless a page section explicitly uses them.

## 4. Component Stylings

Navigation:

- Desktop header is black, compact, and around `76-84px` high.
- Header links are small white text on black with broad horizontal spacing.
- The primary brand mark is centered; account, favorite, and locale controls sit on the right.
- Menu/flyout states use black or dark surfaces with simple list rows and minimal decoration.

Hero and campaign stages:

- Desktop hero is a full-width image stage around `600px` tall.
- Copy is left-aligned, white, and layered over a dark gradient.
- Hero title uses the title serif stack at large scale.
- CTAs sit under body copy; primary is blue, secondary is dark/outlined.

Buttons and controls:

- Primary button: `#0078D6` fill, white text, about `56px` high, `2px` radius, bold `16px / 24px`.
- Secondary button: transparent or black/white fill depending context, `1px` gray border, `2px` radius.
- Controls are rectangular rather than pill-first. Rounded radii exist, but the conversion UI is sharper than Audi's pill system.
- Hover and focus states were not exhaustively sampled; use conservative blue darkening and a visible focus outline.

Cards and retail modules:

- Model cards use white or very light gray wells with subtle shadows or dividers.
- Desktop model grids commonly use three columns in catalog contexts.
- Store/product cards use image wells, compact metadata, tags, favorite controls, and blue text links.
- Recommendation cards mix black overlays and image crops, but copied images must remain evidence-only.

Filters and forms:

- Catalog and test-drive pages use a left filter/control column plus a card grid.
- Filters are dense, white, and line-based with checkbox controls.
- Field and checkbox styling is utilitarian and low radius.

Footer:

- Footer is black, dense, and column-based.
- Links use small white or muted gray text.
- Legal copy is long and compact; preserve alignment and readability rather than turning it into a decorative panel.

## 5. Layout Principles

Desktop pages use a centered rail around `1238px` at a `1440px` viewport, with roughly `100px` side margins. The system favors full-width section bands and internal rails over floating decorative cards.

Use these layout rules:

- Lead with a full-width hero or title stage.
- Use white body sections after black hero/header regions.
- Keep content rails stable around `1200-1240px`.
- Use three-column grids for model, store, and recommendation cards on desktop.
- Pair a `260-300px` filter column with a flexible grid for catalog/test-drive flows.
- Keep section headings large, serif, and left-aligned.
- Use black footer bands with dense column navigation.

## 6. Depth & Elevation

Depth is restrained:

- Hero depth comes from image crop and black gradient overlay.
- Product cards are mostly flat with light gray wells, subtle shadow, and thin dividers.
- Floating assistant/contact panels use stronger shadow than ordinary cards.
- Overlays and menus use dark panels more than dramatic blur or shadow.

Do not add heavy glassmorphism, colorful shadows, or high-radius SaaS card stacks.

## 7. Do's and Don'ts

Do:

- Use black, white, warm-neutral grays, and `#0078D6` as the core action color.
- Use title serif for hero and section headings.
- Keep retail modules dense, structured, and aligned.
- Use rectangular blue CTAs with small radius.
- Build catalog pages with filters plus card grids.
- Treat original photography and marks as protected evidence only.

Don't:

- Do not recreate the Mercedes-Benz mark with CSS or inline drawing.
- Do not use copied vehicle imagery as reusable design assets.
- Do not introduce playful gradients, colorful accent sets, rounded SaaS pills, or ornamental blobs.
- Do not overuse drop shadows.
- Do not force desktop multi-column catalog layouts onto mobile.

## 8. Responsive Behavior

Mobile captures show compact black header behavior, stacked hero/content sections, one-column card flow, and dense footer stacking. Use approximately `24-28px` side padding on a `390px` viewport. Reduce title scale materially while keeping the serif/text stack distinction.

Recommended responsive rules:

- Header becomes icon-led and compact.
- Hero crops vertically and copy stacks.
- Three-column cards become single-column stacks.
- Filter-heavy catalog pages should expose filters as a compact control before the list.
- Footer columns become stacked link groups.

## 9. Agent Prompt Guide

When generating Mercedes-Benz Korea-inspired interfaces:

> Build a high-contrast premium retail interface with a black global header, white editorial canvas, light gray product wells, a restrained `#0078D6` primary CTA, serif title typography for large statements, and dense but orderly catalog modules. Use protected images only as evidence references. Reconstruct layout, surfaces, and component proportions with CSS-generated placeholders. Do not recreate logos, vehicle imagery, or proprietary photography as reusable assets.

## Limitations

- The global Mercedes-Benz homepage returned HTTP 403 in this environment, so the extraction used the accessible official Mercedes-Benz Korea site.
- Authenticated account, purchase completion, dealer CRM, and payment flows were not inspected.
- Tablet breakpoints were not captured.
- Semantic success/warning/error states were not observed.
- Font names are documented from computed CSS; licensed font files were not copied.

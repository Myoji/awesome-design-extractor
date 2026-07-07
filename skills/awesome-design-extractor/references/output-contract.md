# Output Contract

This skill produces a small design-system package from a representative website URL. The package must be useful to both humans and coding agents.

## Folder Layout

Use this layout unless the user provides a different destination:

```text
output/<site-slug>/
  DESIGN.md
  EVIDENCE.md
  preview.html
  preview-dark.html
  screenshots/
```

`preview-dark.html` is optional. The `screenshots/` folder is recommended when the environment can capture files.

Derive `<site-slug>` from the canonical brand or host:

- Prefer the recognizable brand name in lowercase hyphen-case, such as `stripe`, `bmw-m`, or `linear`.
- If the brand is unclear, strip `www.`, remove the public suffix, and hyphenate the remaining host labels.
- Do not include locale path segments, such as `/en`, `/in`, or `/ko`, unless the user specifically asks for a locale-specific extraction.

## DESIGN.md

Write the final design-system document in the user's requested language. Structure it around these nine awesome-design-md sections:

1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Include concrete token values where evidence supports them:

- Colors with role names, hex values, and usage notes.
- Typography families, scale, weights, line heights, and usage rules.
- Spacing, radius, shadow, border, and motion patterns when visible.
- Component rules for buttons, cards, navigation, forms, hero sections, content blocks, and repeated UI surfaces.
- Agent instructions that are specific enough to guide UI generation without copying protected assets.

Use desktop rendering as the base system when desktop and mobile disagree. Document mobile values as responsive overrides or mobile variants unless `EVIDENCE.md` explicitly explains why desktop evidence was weaker or unrepresentative.

## EVIDENCE.md

Use `EVIDENCE.md` as the audit trail, not as a duplicate of `DESIGN.md`. Include:

- Source URL, crawl date, browser/tool used, viewport sizes, and crawl limits.
- Visited URLs, skipped URLs, failed URLs, and why they were skipped or failed.
- Evidence tables for colors, typography, components, layout, depth, and responsive behavior.
- For each major finding, mark evidence level as `observed`, `inferred`, or `uncertain`.
- A desktop/mobile conflict note when the two viewports disagree on a token, component rule, or layout principle. State which source was treated as canonical and why.
- A completeness evaluation for the nine sections with `coverage`, `confidence`, `evidence`, and `gaps`.
- Legal and scope notes: public visual analysis only, no affiliation implied, no proprietary assets copied.

## preview.html

Build `preview.html` as a static visual catalog. It should demonstrate the extracted rules, not market the brand.

Required sections:

- Color swatches with role labels and values.
- Type scale showing headings, body, captions, and UI text.
- Buttons and links with normal, hover/focus, disabled, and prominent states when evidence exists.
- Primary components that reflect observed rules: navigation/header, footer, hero, CTAs, text links, tabs, cards, forms/search, accordions/lists, media containers, and major content blocks.
- Supporting components when observed: badges, filters, pagination, carousel controls, modal/overlay shells, dropdown/menu panels, alerts, utility buttons, empty/loading states, and dense data/list rows.
- Component state samples when evidence exists: default, hover, focus-visible, active/selected, disabled, expanded/collapsed, open/closed, and sticky/scrolled.
- Layout samples showing grids, spacing, max widths, and responsive behavior notes.
- A short limitations block derived from `EVIDENCE.md`.

Use inline CSS or a single local stylesheet when needed. Avoid external network dependencies unless the user explicitly permits them.

Preview layout requirements:

- The body must not create unintended horizontal scrolling at common mobile widths.
- Use `min-width: 0` on grid/flex children that contain buttons, tabs, cards, or long labels.
- Use `max-width: 100%` and responsive constraints for fixed-format UI elements.
- If a component is intentionally horizontal, such as a carousel or segmented tab rail, constrain `overflow-x: auto` to that component and keep the surrounding page width stable.
- Long labels must wrap, truncate, or reduce layout density rather than escaping their containers.
- Capture preview QA screenshots for desktop and mobile when browser tooling is available.

Asset usage policy:

- Do not copy proprietary images, logos, videos, or brand artwork into reusable previews by default.
- Evidence screenshots may contain the original site because they document public rendering; keep them in `screenshots/` as audit evidence.
- For the visual catalog, prefer CSS-drawn approximations, generated placeholders, neutral silhouettes, extracted color/material patterns, or clearly labeled screenshot thumbnails.
- If the user explicitly asks for private/internal preview fidelity, actual public assets may be referenced or stored only as local evidence assets, with a note that they are not reusable design-system assets and no affiliation is implied.
- Do not include copied brand assets in templates, distributable examples, or agent prompts meant for reuse.

## preview-dark.html

Create this file only when at least one of these is true:

- The site exposes a dark mode toggle or dark theme.
- The site has enough dark-surface pages to infer dark tokens reliably.
- The user explicitly asks for a speculative dark preview and accepts that it is inferred.

If dark evidence is weak, do not create `preview-dark.html`; record the gap in `EVIDENCE.md`.

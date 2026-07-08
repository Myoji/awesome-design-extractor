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
  assets/
  screenshots/
```

`preview-dark.html` is optional. The `screenshots/` folder is recommended when the environment can capture files. The `assets/` folder is for small curated preview references, not raw evidence dumps.

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

Build `preview.html` as a static visual catalog. It should demonstrate the extracted rules, not market the brand. It should be useful as a browsable design-system reference for humans and as a visual QA artifact for coding agents.

Required sections:

- Catalog masthead with site/brand name, source URL, crawl date, evidence summary, and local links to `DESIGN.md` and `EVIDENCE.md`.
- Section navigation for `Overview`, `Reconstruction`, `Tokens`, `Components`, `States`, `Layout`, `Responsive`, and `Limitations`. Sticky navigation is recommended when it does not create layout issues.
- Overview summary of the visual language, density, mood, and best-fit use cases.
- Reconstruction samples showing how extracted tokens and components compose in realistic source-site contexts. Include examples such as hero, product/story section, commerce/listing block, support/form flow, footer, dashboard preview, or article/list view when evidence supports them.
- Color swatches with role labels and values.
- Type scale showing headings, body, captions, and UI text.
- Spacing, radius, border, and elevation tokens when evidence supports them.
- Buttons and links with normal, hover/focus, disabled, and prominent states when evidence exists.
- Primary components that reflect observed rules: navigation/header, footer, hero, CTAs, text links, tabs, cards, forms/search, accordions/lists, media containers, and major content blocks.
- Supporting components when observed: badges, filters, pagination, carousel controls, modal/overlay shells, dropdown/menu panels, alerts, utility buttons, empty/loading states, and dense data/list rows.
- Component state samples when evidence exists: default, hover, focus-visible, active/selected, disabled, expanded/collapsed, open/closed, and sticky/scrolled.
- Layout samples showing grids, spacing, max widths, and responsive behavior notes.
- A short limitations block derived from `EVIDENCE.md`.

Evidence and reconstruction requirements:

- Mark preview findings or samples with visible `observed`, `inferred`, or `uncertain` evidence labels.
- For each reconstruction sample, state which extracted component families it uses, such as `hero`, `button`, `product-card`, `tab`, `form`, or `footer`.
- Reconstruction samples should show component composition, not full-site cloning. Avoid long exact copy, proprietary artwork, and brand-owned imagery.
- If a sample is simplified for preview readability, label the simplification in the sample notes or limitations.
- Label synthetic surface replacements with an attribute or visible note such as `data-surface-surrogate` and `Synthetic CSS surface`, so readers understand the preview is using generated visual stand-ins.
- Surface surrogates should be designed, not generic placeholders. Use the extracted palette, crop logic, lighting direction, material texture, section rhythm, and density of the source site while avoiding recognizable copied assets.
- Use SVG only for non-brand utility graphics, abstract patterning, maps, interface icons, or neutral geometry. Do not recreate official logos, emblems, mascots, or recognizable product silhouettes as CSS or SVG.
- If an object silhouette would be weak or overly specific, omit the object and reproduce the observed surface grammar instead: solid color fields, section bands, split panels, gradients, material planes, crop framing, lighting direction, and accent lines.
- If logos or high-impact imagery materially define the site's visual system, `preview.html` may include small curated reference assets under `assets/`. These assets must be labeled as protected preview references, not reusable components.
- Prefer official public-site logo assets when they are directly exposed by the rendered page, such as an inline SVG or official image file. If no official standalone asset is available and a logo is cropped from rendered evidence, prefer a transparent-background PNG so the mark can sit cleanly in the catalog without carrying an accidental header or hero backdrop.
- Every protected reference image in `preview.html` must include `data-asset-role="brand-reference"` or `data-asset-role="evidence-only"`, `data-reuse="forbidden"`, `data-asset-purpose="preview-reference-only"`, `data-asset-origin`, `data-source-url`, `data-capture-date`, meaningful `alt`, `loading="lazy"`, and `decoding="async"`.
- The preview must include a visible disclaimer near protected reference images: `Not a reusable design asset`, ownership remains with the respective rights holders, and `No affiliation implied`.

Use inline CSS or a single local stylesheet when needed. Avoid external network dependencies unless the user explicitly permits them.

Preview layout requirements:

- The body must not create unintended horizontal scrolling at common mobile widths.
- Use `min-width: 0` on grid/flex children that contain buttons, tabs, cards, or long labels.
- Use `max-width: 100%` and responsive constraints for fixed-format UI elements.
- If a component is intentionally horizontal, such as a carousel or segmented tab rail, constrain `overflow-x: auto` to that component and keep the surrounding page width stable.
- Long labels must wrap, truncate, or reduce layout density rather than escaping their containers.
- Capture preview QA screenshots for desktop and mobile when browser tooling is available.
- Verify that the catalog shell itself works at desktop and mobile widths, not only the reconstructed samples.

Asset usage policy:

- Do not copy proprietary images, logos, videos, or brand artwork into reusable previews by default.
- Evidence screenshots may contain the original site because they document public rendering; keep full-size captures in `screenshots/` as audit evidence, not as the default distributable preview surface.
- For the visual catalog and reconstruction samples, prefer designed CSS/SVG surface systems, extracted color/material patterns, neutral UI geometry, and clearly labeled curated reference assets. Avoid fake logos, recognizable copied silhouettes, and generic gray boxes unless the source site itself uses blank media wells.
- When actual public images are necessary for preview fidelity, store only the smallest useful crop or thumbnail under `assets/`, label it with protected-reference metadata, and record the source in `EVIDENCE.md`.
- If the user explicitly asks for private/internal preview fidelity, larger actual public assets may be referenced or stored only as local evidence assets, with a note that they are not reusable design-system assets and no affiliation is implied.
- Do not include copied brand assets in templates, distributable examples, or agent prompts meant for reuse.

## preview-dark.html

Create this file only when at least one of these is true:

- The site exposes a dark mode toggle or dark theme.
- The site has enough dark-surface pages to infer dark tokens reliably.
- The user explicitly asks for a speculative dark preview and accepts that it is inferred.

If dark evidence is weak, do not create `preview-dark.html`; record the gap in `EVIDENCE.md`.

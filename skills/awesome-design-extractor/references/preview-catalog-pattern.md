# Preview Catalog Pattern

`preview.html` is both a design-system catalog and a reconstruction proof. It should help a reader inspect reusable tokens/components and then see how those pieces compose into source-site-like fragments.

## Required Shell

Use a single static HTML file with no required network dependencies. The outer page should include:

- A catalog wrapper, such as `data-catalog-shell`, to make QA inspection straightforward.
- A masthead with brand/site name, source URL, crawl date, viewport basis, and evidence summary.
- Links to local `DESIGN.md` and `EVIDENCE.md`.
- Section navigation for `Overview`, `Reconstruction`, `Tokens`, `Components`, `States`, `Layout`, `Responsive`, and `Limitations`.
- Evidence badges for `observed`, `inferred`, and `uncertain`.

## Section Guidance

### Overview

Summarize the extracted visual language in one compact section. Include mood, density, image/material style, content rhythm, and where the system is best applied.

### Reconstruction

Show source-site-style fragments built from extracted components. Good samples include:

- Hero or campaign intro.
- Product/story card band.
- Commerce/listing module.
- Support/search/form module.
- Navigation/footer composition.
- Dashboard, docs, article, or pricing fragment when present in evidence.

Each sample must list its component tags, for example `hero`, `button`, `product-card`, `tabs`, `form`, `footer`, or `media-container`. The goal is to show where extracted pieces are used, not to recreate the entire source site.

### Tokens

Show role-based colors, typography, spacing, radius, border, and elevation. Avoid dumping raw values without usage roles.

### Components

Show reusable components in isolation. Include main components first, supporting components only when observed.

### States

Show only states that were observed or can be mechanically verified. Use `uncertain` labels when the state is a conservative preview approximation.

### Layout and Responsive

Show grids, max widths, section rhythm, breakpoint changes, mobile navigation, stacking, and overflow rules.

### Limitations

List inaccessible flows, unobserved states, unsupported dark mode, asset substitutions, and preview-only simplifications.

## Asset Policy

Do not copy proprietary images, logos, videos, or brand artwork into reusable previews by default. Use designed CSS/SVG surface systems, neutral UI geometry, and extracted material/color patterns for reusable reconstruction. Evidence screenshots can be stored separately in `screenshots/` when available, but the preview should not imply brand affiliation or asset reuse rights.

When a logo or high-impact image materially defines the visual system, the preview may include a small curated reference asset under `assets/`. Treat it as protected evidence, not a component asset:

- Use `data-asset-role="brand-reference"` for logos or brand marks shown from public rendering.
- Use `data-asset-role="evidence-only"` for high-impact imagery such as hero screenshots, campaign crops, or product photography references.
- Prefer official public-site logo assets when the rendered page exposes them directly, such as inline SVG or official image files. If no official standalone asset is available, prefer transparent-background PNGs for cropped brand marks when the mark is shown outside its original screenshot context.
- Always add `data-reuse="forbidden"`, `data-asset-purpose="preview-reference-only"`, `data-asset-origin`, `data-source-url`, `data-capture-date`, meaningful `alt`, `loading="lazy"`, and `decoding="async"`.
- Place a visible disclaimer near the image: `Not a reusable design asset`, ownership remains with the respective rights holders, and `No affiliation implied`.
- Keep full-size screenshots in `screenshots/`; keep only small curated preview references in `assets/`.

Avoid low-effort gray boxes. A good surface surrogate should reflect:

- The source site's dominant crop and composition.
- The observed lighting direction and contrast level.
- The extracted palette and material texture.
- The section grammar, such as solid panels, split bands, gradients, map surfaces, article thumbnails, dashboard panels, material planes, and accent lines.
- A clear disclosure, such as `data-surface-surrogate` and a limitations note saying `Synthetic CSS surface`.

Use SVG only for non-brand utility graphics, abstract patterning, maps, interface icons, or neutral geometry. Do not recreate official logos, emblems, mascots, or recognizable product silhouettes as CSS or SVG. For logos, prefer a protected `brand-reference` crop when visual fidelity matters. If a silhouette would look generic or weak, omit it and lean into the source site's surface, crop, lighting, and color system.

Generated raster images are optional. Use them only when the user explicitly asks for more visual fidelity and accepts storing synthetic bitmap assets. Do not mix generated raster assets with protected evidence references without labeling the asset role.

## QA Checklist

- Catalog shell and all required sections are present.
- Local links to `DESIGN.md` and `EVIDENCE.md` work relative to the preview file.
- Reconstruction samples include component tags and evidence labels.
- Surface surrogates are labeled and intentionally designed, not generic blank placeholders.
- Token and component labels fit on mobile.
- Body has no unintended horizontal overflow at common desktop and mobile widths.
- Intentional horizontal elements constrain overflow inside themselves.
- Preview simplifications are noted in the limitations section or `EVIDENCE.md`.

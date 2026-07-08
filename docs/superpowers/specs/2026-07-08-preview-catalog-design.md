# Preview Catalog Upgrade Design

## Goal

Upgrade `preview.html` from a single reconstructed style sample into a reusable design-system catalog that still includes source-site reconstruction samples.

## Scope

The existing artifact contract remains: each extraction produces `DESIGN.md`, `EVIDENCE.md`, `preview.html`, and optional `preview-dark.html`. This change strengthens the required structure of `preview.html` and updates the Genesis and Polestar examples to demonstrate the new expectation.

## Preview Structure

Each `preview.html` should include:

- A catalog masthead with brand, source URL, crawl date, evidence level summary, and links to `DESIGN.md` and `EVIDENCE.md`.
- A sticky or prominent section nav for `Overview`, `Reconstruction`, `Tokens`, `Components`, `States`, `Layout`, `Responsive`, and `Limitations`.
- Reconstruction samples that show how extracted components are reassembled in realistic page contexts such as hero, product/story band, commerce/listing block, support/form block, and footer.
- Token tables for color, typography, spacing, radius, border, and elevation when evidence supports them.
- A component gallery for navigation, hero, buttons, links, cards, tabs, forms, lists, media containers, and footers.
- A state matrix for observed or mechanically reproducible states. Unobserved states must not be silently invented.
- Responsive and layout guidance with breakpoint behavior and overflow constraints.
- Evidence badges using `observed`, `inferred`, and `uncertain` labels.

## Reconstruction Policy

Reconstruction samples are verification aids, not brand clones. They should demonstrate layout, spacing, component composition, density, and visual rhythm using extracted rules. They must avoid copying proprietary logos, images, videos, or brand artwork into reusable previews. CSS-drawn placeholders, neutral silhouettes, and extracted material/color patterns are preferred.

## Example Updates

`examples/genesis/preview.html` and `examples/polestar/preview.html` should both expose the same catalog shell while preserving brand-specific design language. Genesis should keep its dark luxury and commerce/support surface examples. Polestar should keep its minimal product, offer, form, state, and action-row examples.

## Verification

Add a lightweight Node validation script that checks for the catalog shell, required sections, artifact links, reconstruction samples with component tags, evidence badges, and existing preview QA pass records.

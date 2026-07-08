# Extraction Workflow

Use adaptive crawling and rendered-page inspection to extract the design system.

## 1. Intake

Record:

- Starting URL.
- Final rendered URL after redirects.
- User-requested output language.
- Known access constraints, such as authentication, VPN, internal network, or bot protection.
- Target artifact folder.

Normalize the starting URL and derive a stable site slug from the hostname or brand name.
Do not force a different locale or region unless the user requests it. If the site redirects to a regional path or domain, use the rendered result as evidence and record the redirect in `EVIDENCE.md`.

## 2. Static Discovery

Use static discovery only to choose better pages to inspect in a browser:

- Read page title, metadata, Open Graph tags, favicons, and manifest.
- Check `robots.txt` and `sitemap.xml` when available.
- Collect same-origin links from the starting page.
- Prioritize navigation, product, pricing, docs, blog/article, contact, signup, login-adjacent public pages, and pages with distinctive UI surfaces.
- De-prioritize legal, privacy, terms, cookie, search, tag, archive, media-only, and locale-duplicate pages unless they are the only available sources.

## 3. Rendered Inspection

Use a real browser renderer whenever possible. Prefer desktop and mobile captures:

- Desktop baseline: around 1440px width.
- Mobile baseline: around 390px width.
- Capture full-page screenshots where possible.
- Wait for hydration and font loading, but avoid long waits that hide failures.
- Inspect computed styles, CSS variables, layout dimensions, accessibility tree, DOM roles, and visible text.
- Sample interaction states for buttons, links, navigation, forms, tabs, and menus when feasible.

Do not rely on raw HTML alone for modern JS-heavy sites unless no rendered browser capability is available.

### Component extraction depth

Extract component detail in three confidence tiers:

1. **Static tokens and layout values** - Capture values that are directly observable from computed styles or layout metrics: colors, font families, font sizes, line heights, weights, spacing, grid tracks, max widths, borders, radii, shadows, z-index, position, opacity, CSS variables, and responsive dimensions.
2. **Reusable component structure** - For repeated UI surfaces, capture anatomy and responsive behavior: header, footer, hero, buttons, text links, tabs, nav menus, cards, forms, search, accordions, lists, badges, media containers, carousel controls, modals, and overlays. Record dimensions, internal spacing, alignment, icon placement, text behavior, and desktop/mobile layout shifts.
3. **Interaction and state deltas** - Only promote states that can be observed by simple deterministic interactions: hover, focus, active, selected, disabled, expanded/collapsed, menu open/closed, tab selected, accordion open, sticky after scroll. Record the before/after class, attribute, computed-style, and screenshot deltas. If state requires login, complex app data, a multi-step configurator, canvas/WebGL internals, or non-deterministic server behavior, mark it `uncertain` or `not inspected`.

Prefer directly measured CSS and DOM state over inferred interaction intent. It is acceptable to document simple CSS-transformable states such as `:hover`, `:focus-visible`, `aria-expanded=true`, `aria-selected=true`, and `disabled`; do not claim deep JavaScript behavior unless the crawl actually exercised it.

### Desktop/mobile conflict handling

Treat the desktop rendering as the canonical design system when desktop and mobile evidence conflict. Use mobile evidence to document responsive overrides, not to redefine the base system.

When conflicts appear:

- Prefer desktop values for base tokens, component anatomy, grid logic, visual hierarchy, and default component rules.
- Record mobile-only differences as responsive overrides, such as collapsed navigation, stacked cards, reduced type scale, changed spacing, hidden content, or touch-target changes.
- If mobile shows a genuinely different component, document it as a mobile variant rather than replacing the desktop component rule.
- If desktop evidence is weak, broken, inaccessible, or clearly less representative than mobile for the site, state the exception in `EVIDENCE.md` before using mobile as the stronger source.
- In `DESIGN.md`, phrase rules as `base desktop rule` plus `mobile override` whenever both are observable.

## 4. Adaptive Crawl

Start with the home page and high-value navigation links. After each crawl pass, evaluate the nine awesome-design-md sections.

Default budget:

- Same-origin only unless the user allows related domains.
- Up to 20 pages.
- Depth 2 by default; use depth 3 only when the site has shallow navigation but weak coverage.
- Desktop and mobile for the most representative pages.

Use the rubric to decide what to inspect next:

- Weak `Color Palette & Roles`: inspect CTAs, pricing, product pages, active states, alerts, and dark surfaces.
- Weak `Typography Rules`: inspect article, docs, blog, marketing, and dense content pages.
- Weak `Component Stylings`: inspect pricing, contact, signup, dashboard previews, forms, nav menus, cards, and feature grids.
- Weak `Layout Principles`: inspect home, product, listing, detail, docs, and content-heavy pages.
- Weak `Responsive Behavior`: revisit representative pages on mobile and capture collapsed navigation and stacked layouts.
- Weak `Depth & Elevation`: inspect modals, menus, cards, sticky nav, overlays, dropdowns, and floating surfaces.

Stop when the strongest available evidence is collected or when the page/tool budget is exhausted. Never hide incomplete coverage.

Default stopping rule:

- Continue crawling while any observable section is `missing` and relevant pages remain in budget.
- Continue targeted crawling while two or more observable sections are `weak` and relevant pages remain in budget.
- Stop when every observable section is `complete` or `partial`, or when remaining weak/missing sections are blocked by access, tool limits, or absent site features.
- Record the exact stop reason in `EVIDENCE.md`.

## 5. Evidence Synthesis

Classify each finding:

- `observed`: directly measured from rendered styles, screenshots, DOM, CSS variables, or repeated visible usage.
- `inferred`: reasonable design intent derived from repeated patterns, naming, or layout behavior.
- `uncertain`: plausible but weakly supported, conflicting, inaccessible, or based on too few examples.

Prefer repeated cross-page evidence over one-off hero styles. Distinguish brand decoration from reusable UI tokens.

## 6. Preview Catalog Synthesis

Before writing `preview.html`, decide which extracted elements deserve catalog treatment and which deserve reconstruction treatment:

- Catalog treatment: reusable tokens, typography scales, buttons, links, nav, tabs, cards, forms, lists, media containers, state samples, spacing, radius, borders, elevation, and responsive rules.
- Reconstruction treatment: representative page fragments that show how those extracted elements compose in context, such as a hero, product/story module, listing grid, commerce flow, support/search form, article strip, dashboard panel, or footer.

For each reconstruction sample:

- Use extracted tokens and component rules from `DESIGN.md`.
- Add component tags that name the building blocks used by the sample.
- Add an evidence label: `observed` when directly based on inspected patterns, `inferred` when combining repeated patterns conservatively, or `uncertain` when evidence is sparse and the sample is illustrative.
- Avoid copying protected brand assets. Use text brand labels, CSS/SVG surface systems, material/color patterns, neutral UI geometry, or local evidence thumbnails only when their evidence-only status is clear.
- Do not recreate official logos or recognizable product silhouettes in CSS/SVG. If object fidelity would be weak, preserve the observed surface grammar instead: solid fields, section bands, gradients, crop framing, material planes, lighting direction, and accent lines.
- If the original logo or hero image is essential to understanding the visual system, create a small curated reference under `assets/` and mark it `data-asset-role="brand-reference"` or `data-asset-role="evidence-only"` with `data-reuse="forbidden"`, `data-asset-purpose="preview-reference-only"`, `data-asset-origin`, source URL, capture date, and a visible no-affiliation disclaimer.

The preview should make it easy to answer two questions:

1. What tokens and components were extracted?
2. Where can I see those components recomposed in a realistic site context?

## 7. Artifact Writing

Write artifacts in this order:

1. `EVIDENCE.md` - establish the audit trail first.
2. `DESIGN.md` - summarize the system using only supported findings.
3. `preview.html` - demonstrate the rules visually as a catalog with reconstruction samples.
4. `preview-dark.html` - only when dark-mode evidence supports it.

After writing, compare `DESIGN.md` and preview files against `EVIDENCE.md`. Remove or qualify unsupported claims.

Run a preview quality pass before finishing:

- Confirm required catalog sections exist: `Overview`, `Reconstruction`, `Tokens`, `Components`, `States`, `Layout`, `Responsive`, and `Limitations`.
- Render `preview.html` at mobile and desktop widths.
- Confirm the page itself has no unintended horizontal overflow.
- Confirm every intentionally horizontal component, such as a carousel or tab rail, contains its overflow inside that component rather than expanding the body.
- Confirm text labels, buttons, cards, tabs, forms, and swatches fit their parent containers on mobile.
- Record any preview-only simplifications in `EVIDENCE.md`.

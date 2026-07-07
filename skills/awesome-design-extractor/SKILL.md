---
name: awesome-design-extractor
description: Extract an awesome-design-md style DESIGN.md from a public or reachable website URL. Use when Codex needs to analyze rendered websites, discover design tokens and visual patterns, create DESIGN.md/EVIDENCE.md/preview.html artifacts, evaluate design-system completeness against the nine awesome-design-md sections, or build a static design-system catalog from a brand or product site.
---

# Awesome Design Extractor

Use this skill to turn a representative website URL into an evidence-backed design-system package that another coding agent can use to reproduce the site's visual style.

## Required Output

Create an output folder, preferably `output/<site-slug>/`, containing:

- `DESIGN.md` - the final awesome-design-md style design-system document.
- `EVIDENCE.md` - the audit trail explaining what was observed, inferred, and left uncertain.
- `preview.html` - a static light-mode visual catalog of the extracted system.
- `preview-dark.html` - optional; create only when dark-mode evidence is strong enough.

Use the user's requested language for final artifacts. Keep brand names, token names, CSS values, UI labels, and source quotes in their original language when that preserves accuracy.

## Workflow

1. Read `references/output-contract.md`.
2. Read `references/extraction-workflow.md`.
3. Read `references/tooling-fallbacks.md`.
4. Capture rendered-page evidence with the best available browser capability.
5. Use adaptive crawling until the nine-section completeness rubric is sufficiently covered or the page budget is exhausted.
6. Read `references/completeness-rubric.md`.
7. Write `DESIGN.md`, `EVIDENCE.md`, and `preview.html`; write `preview-dark.html` only when justified.
8. Re-check the outputs against the nine-section rubric and record limitations in `EVIDENCE.md`.

## Non-Negotiables

- Prefer browser-rendered evidence over static HTML.
- Treat static fetch, sitemap parsing, and raw CSS inspection as discovery aids, not as the primary extraction engine.
- Separate observed facts from inferred design intent.
- Do not claim a token, component rule, breakpoint, or dark theme without evidence.
- If authentication, bot protection, missing browser tools, or partial rendering blocks inspection, state that limitation in `EVIDENCE.md`.
- Do not copy proprietary image assets or imply brand affiliation. Document publicly observable visual patterns and cite where they were observed.


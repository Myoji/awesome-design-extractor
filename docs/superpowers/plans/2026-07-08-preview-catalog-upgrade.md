# Preview Catalog Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `preview.html` a complete design-system catalog with reconstruction samples, then update the public Genesis and Polestar examples.

**Architecture:** Keep the repository document-driven. Add one validation script that inspects static artifacts without external dependencies, strengthen the skill references, then update the two example HTML files in place.

**Tech Stack:** Markdown skill docs, static HTML/CSS, Node.js built-in `fs` and `path`.

---

### Task 1: Add Catalog Validation

**Files:**
- Create: `scripts/validate-preview-catalog.mjs`

- [ ] Create a Node script that reads `examples/genesis/preview.html`, `examples/polestar/preview.html`, and each `preview-qa.json`.
- [ ] Validate required section IDs: `overview`, `reconstruction`, `tokens`, `components`, `states`, `layout`, `responsive`, and `limitations`.
- [ ] Validate artifact links to `DESIGN.md` and `EVIDENCE.md`.
- [ ] Validate at least one reconstruction sample with `data-component-tags`.
- [ ] Validate evidence badges for `observed`, `inferred`, and `uncertain`.
- [ ] Run `node scripts/validate-preview-catalog.mjs` and confirm it fails before changing the previews.

### Task 2: Strengthen Skill References

**Files:**
- Modify: `skills/awesome-design-extractor/references/output-contract.md`
- Modify: `skills/awesome-design-extractor/references/extraction-workflow.md`
- Modify: `skills/awesome-design-extractor/references/completeness-rubric.md`
- Create: `skills/awesome-design-extractor/references/preview-catalog-pattern.md`
- Modify: `skills/awesome-design-extractor/SKILL.md`
- Modify: `README.md`
- Modify: `skills/awesome-design-extractor/docs/ko/overview.md`

- [ ] Define `preview.html` as a catalog shell plus reconstruction samples.
- [ ] Document the required section structure and evidence badges.
- [ ] Add the reconstruction policy: show composition without copying proprietary assets.
- [ ] Add preview QA expectations for catalog structure and mobile overflow.

### Task 3: Update Genesis Preview

**Files:**
- Modify: `examples/genesis/preview.html`

- [ ] Add the catalog masthead, artifact links, and section nav.
- [ ] Add an `Overview` section with evidence badges.
- [ ] Rename and reframe the existing hero, commerce, support, and layout examples as reconstruction samples with component tags.
- [ ] Add a token section for colors, typography, spacing, radius, and elevation.
- [ ] Keep existing Genesis-specific visual language and responsive constraints.

### Task 4: Update Polestar Preview

**Files:**
- Modify: `examples/polestar/preview.html`

- [ ] Add the catalog masthead, artifact links, and section nav.
- [ ] Add an `Overview` section with evidence badges.
- [ ] Reframe hero, product cards, forms, offers, dark product section, and action rows as reconstruction samples with component tags.
- [ ] Add a token section for colors, typography, spacing, radius, and elevation.
- [ ] Keep existing Polestar-specific minimalism and responsive constraints.

### Task 5: Verify

**Files:**
- Read: `examples/genesis/preview-qa.json`
- Read: `examples/polestar/preview-qa.json`

- [ ] Run `node scripts/validate-preview-catalog.mjs`.
- [ ] Run a targeted text scan for required doc references.
- [ ] Re-check `git diff --check`.
- [ ] If browser tooling is available, re-render preview HTML at desktop and mobile widths and update `preview-qa.json`.

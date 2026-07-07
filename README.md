# Awesome Design Extractor

Evidence-backed agent skill for extracting awesome-design-md `DESIGN.md` with a recreated style preview and readable evidence.

Awesome Design Extractor trades speed for auditability. It asks an agent to inspect rendered websites, separate observed facts from inferred design intent, record uncertainty, and produce a reusable design-system package rather than a one-shot style summary.

## What It Produces

- `DESIGN.md` - an awesome-design-md style design-system document.
- `EVIDENCE.md` - a readable audit trail covering observed, inferred, and uncertain findings.
- `preview.html` - a static recreated style preview that demonstrates the extracted system.
- `preview-dark.html` - optional, only when dark-mode evidence is strong enough.

## Why This Exists

Fast website-to-`DESIGN.md` tools are useful for drafts, but they can blur measured evidence, inference, and speculation. This skill is designed for slower, higher-confidence extraction where another coding agent needs to reuse the resulting design system without inheriting unsupported visual rules.

## Core Principles

- Prefer browser-rendered evidence over raw HTML.
- Use adaptive crawling until the nine awesome-design-md sections are sufficiently covered.
- Mark findings as `observed`, `inferred`, or `uncertain`.
- Do not invent unobserved states such as dark mode, validation colors, or hover behavior.
- Generate a preview catalog and record limitations.
- Do not copy proprietary image assets or imply brand affiliation.

## Repository Layout

```text
.codex-plugin/                 Codex plugin metadata
skills/awesome-design-extractor/
  SKILL.md                     Skill entrypoint
  references/                  Extraction workflow, output contract, and rubric
  docs/ko/overview.md          Korean overview
examples/
  genesis/                     Example extracted artifacts
  polestar/                    Example extracted artifacts
```

The public examples include readable artifacts and summaries. Large raw evidence files and public-site screenshots are intentionally excluded from the repository.

## Usage

Install or copy `skills/awesome-design-extractor/` into an agent environment that supports skills, then ask:

```text
Use $awesome-design-extractor to extract an awesome-design-md style DESIGN.md package from https://example.com.
```

For Codex plugin packaging, use the repository root with `.codex-plugin/plugin.json`.

## Status

Experimental early public release. The skill works as a documented extraction workflow, but the public package, examples, and installation flow are still being refined.

The skill is document-driven and capability-based: it describes the browser, inspection, evidence, and preview workflow an agent should follow, while allowing different agent runtimes to provide different browser tooling.

## License

MIT. This license applies to this repository's skill instructions, documentation, and example artifacts. It does not grant rights to third-party brands, trademarks, or proprietary website assets referenced by examples.

# Completeness Rubric

Evaluate every extraction against the nine awesome-design-md sections. Use this rubric before finalizing outputs.

## Coverage Labels

- `complete`: Enough cross-page evidence exists to give concrete, reusable guidance.
- `partial`: Useful guidance exists, but some roles, states, or contexts are missing.
- `weak`: Only shallow or one-off evidence exists; guidance must be cautious.
- `missing`: No reliable evidence was collected.

## Confidence Labels

- `high`: Direct rendered evidence appears repeatedly across important pages.
- `medium`: Evidence is direct but limited, or repeated but partly inferred.
- `low`: Evidence is sparse, contradictory, inaccessible, or mostly inferred.

## Section Checks

### 1. Visual Theme & Atmosphere

Check whether the document captures the site's overall mood, density, brand posture, imagery style, UI personality, and content rhythm. Evidence should come from screenshots across multiple page types.

### 2. Color Palette & Roles

Check whether colors are assigned to roles, not only listed. Required roles when observable: primary action, secondary action, background, surface, text, muted text, border, accent, success/warning/error, focus, and dark-surface tokens.

### 3. Typography Rules

Check whether font families, fallback behavior, size scale, weights, line heights, casing, and hierarchy are captured. Include differences between marketing display text, body content, captions, UI labels, and navigation.

### 4. Component Stylings

Check whether repeated UI components are described with enough detail to recreate them: buttons, links, cards, forms, navigation, tabs, badges, pricing blocks, content modules, lists, and media containers.

Also check whether `preview.html` renders the main and supporting components, not only token swatches. At minimum, include representative primary components. Add supporting components when observed. State samples should be included only when directly observed or mechanically verified.

### 5. Layout Principles

Check whether grids, max widths, spacing rhythm, section padding, alignment, density, content hierarchy, and page composition are described. Include mobile stacking and desktop constraints.

### 6. Depth & Elevation

Check whether shadows, borders, overlays, layering, sticky elements, modals, dropdowns, translucency, blur, and z-axis rules are captured. If the site is intentionally flat, state that with evidence.

### 7. Do's and Don'ts

Check whether implementation guardrails are concrete. They should prevent common mistakes when another agent recreates the style, including wrong color usage, over-rounded components, mismatched density, unsupported motion, or off-brand imagery.

### 8. Responsive Behavior

Check whether the document captures breakpoint behavior, mobile navigation, column stacking, type changes, spacing changes, hidden/reordered content, and touch-target adjustments.

Check whether desktop/mobile conflicts are resolved consistently: desktop is the canonical base system, and mobile differences are responsive overrides or named mobile variants. If mobile evidence overrides desktop, the exception must be explicitly justified in `EVIDENCE.md`.

For preview quality, verify that mobile renderings do not create unintended page-level horizontal scroll. Intentional carousels, tab rails, or overflow lists must constrain horizontal overflow inside their own container.

### 9. Agent Prompt Guide

Check whether the guide gives a coding agent direct, actionable instructions for applying the style. It should be specific enough to build a new UI without copying protected assets or inventing unsupported tokens.

## Required Evaluation Block

Add a block like this to `EVIDENCE.md`:

```md
## Completeness Evaluation

| Section | Coverage | Confidence | Strongest Evidence | Gaps |
| --- | --- | --- | --- | --- |
| Visual Theme & Atmosphere | partial | medium | Desktop/mobile screenshots from home and product pages | No authenticated product UI inspected |
| Color Palette & Roles | complete | high | Computed styles from CTAs, nav, cards, forms | Alert colors not observed |
```

If any section is `weak` or `missing`, `DESIGN.md` must either omit that unsupported detail or label it as a limitation.

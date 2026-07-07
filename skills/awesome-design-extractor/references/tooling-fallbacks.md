# Tooling Fallbacks

This skill is capability-based. Use the best browser and visual inspection tools available in the current coding-agent environment.

## Required Capabilities

Try to obtain these capabilities:

- Render a URL in a browser engine.
- Capture screenshots.
- Inspect visible DOM, accessibility tree, or rendered text.
- Inspect computed styles or CSS variables.
- Discover same-origin links.
- Revisit pages at desktop and mobile viewports.

## Preferred Tools

Use the first available option that provides reliable rendered-page evidence:

1. Playwright script or CLI.
2. Playwright MCP.
3. Browser automation MCP with screenshot and DOM/style inspection.
4. Agent-native browser tool.
5. In-app browser with screenshot and page inspection support.

Static HTTP fetch, raw HTML parsing, CSS download, sitemap parsing, and metadata extraction are useful for discovery, but they do not replace rendered inspection.

## Escape Hatches

Use an escape hatch only when normal rendered crawling fails or cannot access representative pages:

- Headed browser session for manual login or consent dialogs.
- Saved browser state or storage profile.
- Chrome or user-session browser control.
- Computer-use style desktop control.
- User-provided screenshots when browser access is impossible.

Record every escape hatch in `EVIDENCE.md`, including what it enabled and what remained inaccessible.

## Failure Handling

If a page fails to render, classify the failure:

- `auth_required`
- `bot_protection`
- `network_blocked`
- `render_timeout`
- `blank_or_loading_state`
- `tool_unavailable`
- `unsupported_interaction`

For each failed page, record:

- URL.
- Tool used.
- Failure class.
- Screenshot or observed state when possible.
- Whether a fallback was attempted.
- Impact on the nine-section completeness evaluation.

## Minimum Viable Static-Only Mode

Use static-only mode only when no rendered inspection is available. In that mode:

- State clearly in `EVIDENCE.md` that the extraction is static-only.
- Avoid confident claims about responsive behavior, component states, loaded fonts, or JS-rendered UI.
- Do not create `preview-dark.html` unless dark tokens are explicit in public CSS and the user accepts the limitation.
- Mark affected rubric sections as `partial`, `weak`, or `missing`.


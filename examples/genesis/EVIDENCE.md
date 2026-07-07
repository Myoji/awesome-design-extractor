# Genesis Korea Design Extraction Evidence

## Audit Metadata

| Field | Value |
| --- | --- |
| Source URL | https://www.genesis.com/kr/ko |
| Final rendered URL | https://www.genesis.com/kr/ko |
| Crawl date | 2026-07-07 |
| Tool | Headless Chrome via Chrome DevTools Protocol with local Chrome executable |
| Desktop viewport | `1440 x 1000` |
| Mobile viewport | `390 x 844` |
| Output folder | `examples/genesis` |
| Raw data | `evidence-raw.json`, `evidence-summary.json`, `aggregate-insights.json` |
| Preview QA | `preview-qa.json` |
| Screenshots | `screenshots/` |

The site rendered without authentication. Some permission and popup surfaces appeared on showroom and event-style pages; they were recorded as access-context evidence, not promoted into reusable design tokens unless the pattern also appeared in normal site UI.

## Crawl Scope

Desktop pages visited:

| URL | Status | Screenshot |
| --- | --- | --- |
| `https://www.genesis.com/kr/ko` | 200 | `screenshots/desktop-01-home.png` |
| `https://www.genesis.com/kr/ko/models/g90` | 200 | `screenshots/desktop-02-models-g90.png` |
| `https://www.genesis.com/kr/ko/models/gv80` | 200 | `screenshots/desktop-03-models-gv80.png` |
| `https://www.genesis.com/kr/ko/models/gv70` | 200 | `screenshots/desktop-04-models-gv70.png` |
| `https://www.genesis.com/kr/ko/models/gv60` | 200 | `screenshots/desktop-05-models-gv60.png` |
| `https://www.genesis.com/kr/ko/models/gv80/lineup` | 200 | `screenshots/desktop-06-lineup-gv80.png` |
| `https://www.genesis.com/kr/ko/shopping/quote.html` | 200 | `screenshots/desktop-07-shopping-quote.png` |
| `https://www.genesis.com/kr/ko/shopping/genesis-purchase.html` | 200 | `screenshots/desktop-08-purchase.png` |
| `https://www.genesis.com/kr/ko/experience/genesis-drive.html` | 200 | `screenshots/desktop-09-test-drive.png` |
| `https://www.genesis.com/kr/ko/experience/find-a-showroom.html` | 200 | `screenshots/desktop-10-showroom.png` |
| `https://www.genesis.com/kr/ko/members/genesis-membership/membership-overview/membership-information.html` | 200 | `screenshots/desktop-11-membership.png` |
| `https://www.genesis.com/kr/ko/members/vehicle-management-service/genesis-service-network.html` | 200 | `screenshots/desktop-12-service-network.png` |
| `https://www.genesis.com/kr/ko/support/customer-support.html` | 200 | `screenshots/desktop-13-customer-support.png` |
| `https://www.genesis.com/kr/ko/support/faq.html` | 200 | `screenshots/desktop-14-faq.png` |
| `https://www.genesis.com/kr/ko/support/notice.html` | 200 | `screenshots/desktop-15-notice.png` |
| `https://www.genesis.com/kr/ko/genesis/brand/brand-overview.html` | 200 | `screenshots/desktop-16-brand-overview.png` |
| `https://www.genesis.com/kr/ko/experience/space/genesis-suji.html` | 200 | `screenshots/desktop-17-space-suji.png` |
| `https://www.genesis.com/kr/ko/magma/program/genesis-magma.html` | 200 | `screenshots/desktop-18-magma.png` |

Mobile pages visited:

| URL | Status | Screenshot |
| --- | --- | --- |
| `https://www.genesis.com/kr/ko` | 200 | `screenshots/mobile-01-home.png` |
| `https://www.genesis.com/kr/ko/models/gv70` | 200 | `screenshots/mobile-02-models-gv70.png` |
| `https://www.genesis.com/kr/ko/shopping/quote.html` | 200 | `screenshots/mobile-03-shopping-quote.png` |
| `https://www.genesis.com/kr/ko/experience/genesis-drive.html` | 200 | `screenshots/mobile-04-test-drive.png` |
| `https://www.genesis.com/kr/ko/support/customer-support.html` | 200 | `screenshots/mobile-05-customer-support.png` |

Static discovery and rendered link inspection found 155 same-origin Korean links. Legal, terms, locale-switching, external newsroom, boutique commerce, social, and deeply duplicated model-detail links were not crawled because the representative home, model, purchase, test-drive, showroom, membership, support, brand, space, and Magma pages already covered the observable design-system surfaces within the page budget.

The crawl stopped after all observable sections reached `partial` or better coverage. Remaining gaps are tablet breakpoints, authenticated account flows, deep build-to-order configurator states, and interaction states that require user choices beyond simple page rendering.

## Evidence Tables

### Color Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Black and near-black form the main brand frame | observed | Aggregated foreground values: `#000000` 4971 samples, `#111111` 2173 samples; backgrounds include `#111111`, `#000000`, `#1A1A1A`, `#151515` | Header overlays, dark shopping pages, footer, product hero overlays |
| White is the main contrast color | observed | `#FFFFFF` appeared 1098 times in sampled foreground values and 139 times as a background | White copy over dark media, white utility pages, form fields |
| Light surfaces use restrained gray | observed | Repeated backgrounds: `#F5F5F5`, `#F8F8F8`, `#F0F0F0`; borders: `#E5E5E5`, `#EAEAEB`, `#CECED0` | Home modules, cards, search and FAQ surfaces, subtle separators |
| Muted text uses gray families | observed | `#69696E`, `#535356`, `#757575`, `#808080`, `#929296` appeared repeatedly | Tabs, inactive categories, form placeholders, secondary copy |
| Copper-brown is a sparse brand/program accent | observed | `#AF6249` appeared 164 times and `#C36F51` 5 times in sampled foreground values | FAQ/category labels and warm Genesis/Magma-related emphasis; not a default CTA fill |
| Browser-blue link values are not a visible brand token | uncertain | `#0000EE` appeared in computed values, but screenshots do not show blue as a deliberate system color | Excluded from the design palette |
| Full dark mode | uncertain | Many dark sections exist, but no user-facing dark-mode toggle or alternate site-wide theme was found | No `preview-dark.html` generated |
| Success, warning, error colors | missing | No reliable alert or validation states were captured | Do not invent alert tokens |

### Typography Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Text stack | observed | Top family: `GenesisSansTextKr, "Noto Sans", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", Roboto, sans-serif` | Dominant body and UI family |
| Legacy/generated stack also appears | observed | `genesis-text, sans-serif` and `genesis-head-light, sans-serif` appear frequently | Use as observed aliases, but prefer the explicit Korean fallback stack in new work |
| Heading stack | observed | `GenesisSansHeadKr, "Noto Sans", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", Roboto, sans-serif` | Product hero and section headings |
| Weight rhythm | observed | `400` appeared 9683 times, `300` 146 times, `500` 188 times, `700` 17 times | Regular is default; light weights are for large premium display type |
| Desktop page hero scale | observed | Support and FAQ hero H1: `80px / 94px`; brand H1: `60px / 66px`; shopping H1: `42px / 50px` | Utility pages use large white type over dark photographic banners |
| Product and section headings | observed | Product hero: `48px / 62px`; editorial product section: `52px / 66px`; home section headings: `40px / 48px` to `48px / 62px` | Large but restrained, usually regular or light |
| Body and UI copy | observed | Common sizes include `16px / 24px`, `14px / 18.2px`, `18px / 20px` | Navigation, tabs, CTA labels, cards, footer links |
| Mobile type scale | observed | Mobile page H1 around `40px / 45px`, product hero `32px / 44px`, section headings `28px / 40px`, quote H1 `26px / 32px` | Strong downshift on narrow screens |
| Letter spacing | observed | Mostly `normal`; display samples include `-1.36px`, `-1.2px`, `-0.52px`, and `-0.32px` | Tight tracking is used on large headings, but should be applied cautiously |

### Component Evidence

| Component | Level | Evidence | Extracted Rule |
| --- | --- | --- | --- |
| Global header | observed | Desktop header height `66px`; mobile header height `56px`; z-index `9999`; transparent over dark hero imagery and white on utility pages | Keep a thin, high-z header with left wing logo, center nav, right utility links/icons |
| Mega navigation | observed | Desktop GNB buttons are `16px / 24px`, regular weight, no background or radius | Navigation is text-first and sharp; avoid pill tabs |
| Text CTAs | observed | Repeated `자세히 보기`, `견적 내기`, `더 알아보기` links at `16px / 24px` or `14px / 18.2px`, no fill, no radius | Use simple text links with small directional affordances |
| Filled CTA | observed | Home boutique CTA: `260 x 48`, `#111111` background, `#FFFFFF` text, `2px` radius, `15px / 24px` | Filled buttons are black and rectangular; radius stays very low |
| Outline CTA | observed | Test-drive hero buttons: `200 x 52`, transparent fill, `1px solid #FFFFFF`, `4px` radius, `14px / 52px` | On dark media, prefer precise outline CTAs |
| Category tabs | observed | Quote and purchase tabs: `52px` high, equal-width columns, active white text with bottom rule, inactive `#808080` | Tabs are underline-based, not pill controls |
| Model cards | observed | Home model cards are `296 x 316` in a four-column wide rail; no shadow, no radius | Product cards are image-led, flat, and aligned to a strict grid |
| Dark vehicle cards | observed | Quote page cards use dark surfaces around `#1A1A1A` with subtle borders and vehicle imagery | Dark commerce cards should feel like display plinths, not raised cards |
| FAQ/list rows | observed | FAQ page uses dense rows, 1px separators, right-aligned plus controls, copper category labels | Use accordion rows with line separators and minimal icons |
| Search fields | observed | FAQ and notice search fields are `43px` high, white fill, `0px` radius, placeholder `#757575`, horizontal padding `10-18px` | Forms are flat, rectangular, and line-driven |
| Carousel arrows | observed | Home carousel controls are `52 x 52` circles with `#F5F5F5 @ 0.8`; dark overlay utility button uses `#3A3A3C @ 0.7` | Circular controls are utility exceptions, not a general component style |
| Footer | observed | Footer background `#111111`, desktop padding `48px 0 60px`, mobile padding `40px 0`, links `14px / 22px` | Footer is dark, compact, and utilitarian |

### Component State Evidence

| State | Level | Evidence | Preview Treatment |
| --- | --- | --- | --- |
| CTA variants | observed | Filled black CTA, dark-media outline CTA, and text CTA variants were repeatedly captured | Rendered as primary, outline, and text-link variants |
| Active tabs/categories | observed | Quote/purchase tabs and category labels use underline or muted/active contrast | Rendered as selected tabs and category rows |
| Accordion/list affordance | observed | FAQ rows use separators and right-aligned plus controls | Rendered as collapsed list rows |
| Hover/focus/validation/error | missing or uncertain | These states were limited or absent in public rendering | Not promoted as Genesis tokens; preview only uses observed static variants |

### Layout Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Wide product rail | observed | Home and product modules commonly use `50px` side offsets on a `1440px` viewport, giving about `1340px` of working width | Best for models, carousels, and product storytelling |
| Utility page column | observed | FAQ/support/notice hero title starts around `x=243`; shopping/quote content uses `x=250` and `1090px` content width | Utility pages feel more editorial and centered than product rails |
| Full-bleed media | observed | Home, product, brand, space, and Magma pages rely on full-bleed or near full-bleed imagery with text overlays | Imagery carries brand emotion; UI remains quiet |
| Horizontal carousel rhythm | observed | Home model, news, space, event, and boutique sections use horizontal cards with arrows and overflow | Preserve horizontal rhythm on desktop; mobile can remain horizontally scrollable |
| Dense service lists | observed | FAQ and notice pages use long list layouts with narrow row heights and separators | Keep service surfaces scan-friendly, not card-heavy |
| Mobile padding | observed | Mobile home/product uses roughly `20px` side padding; mobile support/quote uses around `30px` on some hero/utility surfaces | Use 20-30px rails depending page type |

### Depth & Elevation Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| System is mostly flat | observed | `borderRadius: 0px` appeared 9518 times; only 6 repeated box shadows were sampled | Avoid decorative elevation |
| Low radii are exceptions | observed | `2px`, `4px`, and some `8px` values appear, mostly for buttons, controls, or exceptional overlays | Keep ordinary cards and panels at 0px |
| Separators replace shadows | observed | Common borders include `1px solid #E5E5E5`, `1px solid #111111`, `1px solid #EAEAEB` | Use line work and contrast instead of depth |
| Overlay depth comes from photography and dark scrims | observed | Hero and brand pages use white text over darkened image/video regions | Do not simulate glassmorphism or floating panels |

### Responsive Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Mobile header compresses | observed | Desktop header `66px`, mobile header `56px`; mobile shows compact logo and menu icon | Horizontal nav disappears |
| CTA stacks on mobile | observed | Home `Start your journey` actions stack as full-width black buttons | Use vertical rhythm and stable 44-52px targets |
| Type scale reduces strongly | observed | Desktop `80px` page H1 becomes `40px`; product `48px` becomes `32px`; section `52px` becomes `28px` | Do not keep desktop display sizes on mobile |
| Cards and content stack or scroll | observed | Product details stack; home carousels remain horizontally scrollable in places | Combine one-column stacking with intentional carousels |
| Footer wraps | observed | Mobile footer nav wraps into multiple rows over `#111111` background | Keep footer compact and dark |

### Desktop/Mobile Conflict Handling

Desktop rendering is treated as the canonical base system because it exposes the full navigation model, wide product rails, multi-column cards, desktop commerce tabs, and large editorial media hierarchy. Mobile captures are used as responsive overrides.

| Area | Base Rule | Mobile Override |
| --- | --- | --- |
| Header/navigation | 66px desktop header with horizontal navigation and utility links | 56px compact header with mobile menu controls |
| Type scale | 80px utility H1, 48px product hero, 52px editorial section title where observed | 40px utility H1, 32px product hero, roughly 28px section title |
| Journey CTAs | Desktop actions can sit in grouped horizontal or grid arrangements | Full-width stacked black buttons |
| Product cards/carousels | Wide rails and multi-column card rows | One-column stacks with selected horizontal carousels |
| Footer | Desktop dark footer with compact link rows | Wrapped compact rows over the same dark surface |

## Completeness Evaluation

| Section | Coverage | Confidence | Strongest Evidence | Gaps |
| --- | --- | --- | --- | --- |
| Visual Theme & Atmosphere | complete | high | Desktop/mobile screenshots from home, product, support, brand, space, and Magma pages | Authenticated owner/account surfaces not inspected |
| Color Palette & Roles | partial | high | Aggregated computed colors across 23 rendered captures | Alert, success, warning, and focus colors not observed |
| Typography Rules | complete | high | Computed font families, sizes, weights, line heights, and letter spacing | Exact licensed font files were not copied or inspected |
| Component Stylings | partial | high | Header, navigation, CTAs, tabs, cards, FAQ rows, search fields, footer, and expanded preview catalog | Hover/focus/validation/error states were limited or absent; deep configurator and selected form states were not exhaustively inspected |
| Layout Principles | complete | high | Screenshots and rect measurements across product, utility, and brand pages | Some long pages were screenshot-capped after representative content |
| Depth & Elevation | complete | high | Radius, shadow, border, overlay, and footer samples | Modal internals only lightly sampled |
| Do's and Don'ts | complete | medium | Derived from repeated observed patterns and absent anti-patterns | Some guardrails are inferred from consistency |
| Responsive Behavior | partial | medium | 390px captures for home, product, quote, test-drive, support | Tablet breakpoints were not captured |
| Agent Prompt Guide | complete | medium | Based on supported tokens, components, layout, and responsive rules | Should be adapted per target product and legal constraints |

## Legal and Scope Notes

This extraction is based only on publicly visible website rendering. It documents visual patterns, token values, component behavior, and layout rules for design-system study. It does not copy proprietary image assets into the preview and does not imply Genesis, Hyundai Motor Company, or related brand affiliation. Screenshots are retained as audit evidence only.

### Preview Asset Handling

| Asset Type | Handling | Notes |
| --- | --- | --- |
| Evidence screenshots | Retained in `screenshots/` | Audit evidence of public rendering only |
| Preview vehicle/media imagery | CSS-drawn neutral placeholders and silhouettes | No Genesis product photography copied |
| Logo/wordmark | Text/simplified CSS mark only | Not an official logo asset |
| Fonts | CSS stack names documented; font files not copied | Browser/system fallback may render Korean glyphs |

### Preview QA

The expanded `preview.html` was rendered with Headless Chrome via Chrome DevTools Protocol on 2026-07-07. The page passed overflow checks at desktop `1440px`, mobile `390px`, and narrow mobile `360px`. QA details are stored in `preview-qa.json`; updated screenshots are `screenshots/preview-check.png` and `screenshots/preview-check-mobile.png`.

## Limitations

- Login, account, and authenticated owner flows were not inspected.
- Deep build-to-order configurator interactions were not exhaustively crawled.
- Tablet breakpoints were not captured.
- Hover, focus, validation, and error states were limited or absent in rendered evidence.
- Some pages displayed permission or popup surfaces; those were treated as contextual limitations rather than core design tokens.
- A site-wide dark mode was not observed, so `preview-dark.html` was not generated.

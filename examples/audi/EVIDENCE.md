# Audi Global Design Extraction Evidence

## Audit Metadata

| Field | Value |
| --- | --- |
| Source URL | https://www.audi.com/en.html |
| Final rendered URL | https://www.audi.com/en.html |
| Crawl date | 2026-07-09 |
| Tool | Playwright Chromium, installed in a temporary folder outside the repository |
| Desktop viewport | `1440 x 1000` |
| Mobile viewport | `390 x 844` |
| Output folder | `examples/audi` |
| Raw data | `evidence-raw.json`, `evidence-summary.json`, `aggregate-insights.json` |
| Screenshots | `screenshots/` |

Starting URL was selected by inference because the user asked for Audi's design system without providing a URL. The extraction uses Audi's global English public site as the canonical source. No authentication was used.

## Crawl Scope

Desktop pages visited:

| URL | Status | Screenshot |
| --- | --- | --- |
| `https://www.audi.com/en.html` | 200 | `screenshots/desktop-01-home.png` |
| `https://www.audi.com/en/models-4` | 200 | `screenshots/desktop-02-models.png` |
| `https://www.audi.com/en/company-17125` | 200 | `screenshots/desktop-03-company.png` |
| `https://www.audi.com/en/technology-235` | 200 | `screenshots/desktop-04-technology.png` |
| `https://www.audi.com/en/design-299` | 200 | `screenshots/desktop-05-design.png` |
| `https://www.audi.com/en/sustainability-17137` | 200 | `screenshots/desktop-06-sustainability.png` |
| `https://www.audi.com/en/motorsport-17143` | 200 | `screenshots/desktop-07-motorsport.png` |
| `https://www.audi.com/en/careers-at-audidriven-by-tech-driven-by-people-17124` | 200 | `screenshots/desktop-08-careers.png` |
| `https://www.audi.com/en/service-2305` | 200 | `screenshots/desktop-09-media-center.png` |
| `https://www.audi.com/en/press-releases` | 200 | `screenshots/desktop-10-press-releases.png` |
| `https://www.audi.com/en/register` | 200 | `screenshots/desktop-11-register.png` |
| `https://www.audi.com/en/search` | 200 | `screenshots/desktop-12-search.png` |

Mobile pages visited:

| URL | Status | Screenshot |
| --- | --- | --- |
| `https://www.audi.com/en.html` | 200 | `screenshots/mobile-01-home.png` |
| `https://www.audi.com/en/models-4` | 200 | `screenshots/mobile-02-models.png` |
| `https://www.audi.com/en/design-299` | 200 | `screenshots/mobile-03-design.png` |
| `https://www.audi.com/en/register` | 200 | `screenshots/mobile-04-register.png` |
| `https://www.audi.com/en/search` | 200 | `screenshots/mobile-05-search.png` |

Interaction-state captures:

| State | Screenshot |
| --- | --- |
| Desktop menu open | `screenshots/desktop-state-menu-open.png` |
| Mobile menu open | `screenshots/mobile-state-menu-open.png` |

Skipped pages: sign-in and cart were discovered but excluded as account/transaction flows; legal, privacy, cookie, locale-switch, image/video archives, and social/external pages were lower-value for visual-system extraction. The crawl stopped after representative landing, model grid, article/category, form, search, media, footer, and menu surfaces covered the nine-section rubric.

## Evidence Tables

### Color Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Dark-first interface shell | observed | Header background `rgb(2, 2, 3)`, breadcrumb band `rgb(16, 19, 25)`, repeated page surfaces `rgb(24, 29, 37)` | Audi global public pages are primarily dark rather than white editorial pages |
| Primary text is near-white | observed | Most sampled foreground values were `rgb(252, 252, 253)` and `rgba(252, 252, 253, 0.698)` | Use solid near-white for headings and 70% alpha for supporting text |
| Muted structural gray-blue surfaces | observed | Repeated backgrounds: `rgb(44, 52, 63)`, `rgb(64, 74, 89)`, `rgb(101, 112, 129)`, `rgba(154, 163, 177, 0.1/0.2/0.3)` | Used for cards, chips, selected locale, disabled/secondary controls |
| Primary action fill is slate-gray, not red | observed | CTA buttons such as `Information on the models`, `Save profile`, and `Register now` used `rgb(101, 112, 129)` | No red accent CTA was observed on crawled global pages |
| Borders use soft blue-gray alpha | observed | Search fields and inputs used `rgba(219, 223, 230, 0.6)` borders; card borders used `rgb(44, 52, 63)` | Borders separate surfaces instead of strong outlines |
| Alert/success/error palette | uncertain | No explicit success/warning/error state was exercised in the crawl | Do not invent semantic colors without new evidence |

### Typography Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Primary font stack | observed | Computed stack: `"Audi Type Variable", Verdana, Geneva, sans-serif` on all sampled text | Font files were not copied |
| Body/UI size | observed | `16px / 24px` and `14px / 24px` dominated sampled UI text | 14px is common in buttons, footer, and labels |
| Desktop page heading | observed | H1 values: `40px / 60px`, weight `400` | Home, Models, Company, Technology, Register |
| Desktop section heading | observed | H2 values: `32px / 44px`; smaller module headings `24px / 36px` | Models and Register pages |
| Mobile heading scale | observed | Home/model H1 drops to `28px / 40px`; section headings become `24px / 36px`; module headings `20px / 32px` | Mobile uses smaller but still relaxed line height |
| Font weight | observed | Extracted headings and buttons were weight `400`; bold appears in limited body emphasis | Keep weight restrained |

### Component Evidence

| Component | Level | Evidence | Extracted Rule |
| --- | --- | --- | --- |
| Global header | observed | Desktop header `1440 x 72`, black background `#020203`, content padded `96px` left and `84px` right | Fixed-height black shell with compact logo, menu pill, and search |
| Breadcrumb/language bar | observed | `40px` high band, `#101319`, `8px 96px` padding | Use as a secondary system strip |
| Menu drawer | observed | Desktop state screenshot shows left panel around one-third width, background `#2C343F`-like, simple list rows | Overlay menu is utilitarian, dark, and list-based |
| Primary pill buttons | observed | CTA buttons measured `50px` high, `12px 24px` padding, `999px` radius, background `#657081` | Primary action is pill-shaped slate fill |
| Secondary buttons | observed | `Request accreditation`, locale buttons, and dark CTAs use `#181D25` fill, `#2C343F` border, `999px` radius | Secondary action stays dark with a subtle border |
| Topic chips | observed | Home topic teaser tiles are `198 x 50` desktop and `161 x 74` mobile, `20px` radius, border `#2C343F` | Use pill/rounded chip tiles for shortcuts |
| Model cards | observed | Desktop model tiles are about `237 x 179`; mobile tiles are `334 x 216`; inner visual shell has `20px` radius | Cards are rounded dark media tiles with no drop shadow |
| Forms | observed | Register inputs are `379 x 46`, background `rgba(24,29,37,.6)`, border `rgba(219,223,230,.6)`, radius `10px` | Forms use rounded rectangular dark fields |
| Carousel controls | observed | Arrow controls are `56 x 56`, `999px` radius; pagination dots are `8 x 8` | Use circular controls only for carousel/navigation utilities |
| Footer | observed | Footer sits on black with small 14px links, separator line, locale pills, and legal text | Footer is dense but still aligned to the same margins |

### Component State Evidence

| State | Level | Evidence | Preview Treatment |
| --- | --- | --- | --- |
| Selected locale | observed | `EN` locale button used `rgb(64, 74, 89)` fill and subtle border | Rendered as selected pill |
| Disabled/de-emphasized carousel arrow | observed | Previous arrow used `rgba(154, 163, 177, 0.3)` color and transparent fill | Rendered as disabled utility control |
| Menu open | observed | Desktop/mobile open-menu screenshots captured dark overlay panel and list rows | Rendered as drawer shell |
| Focus-visible | uncertain | Keyboard focus was not exhaustively exercised | Preview includes a conservative outline sample and marks it uncertain |
| Hover | uncertain | Hover deltas were not exhaustively sampled | Preview treats hover as a conservative brightness/border change |

### Layout Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Desktop content width | observed | Header inner width `1260px` at 1440; topic teaser and search header around `1216-1248px`; side margins about `96px` | Use `max-width: 1248px` with `96px` desktop margins |
| Section rhythm | observed | Pages alternate top title blocks, broad dark sections, card grids, and dense footer/legal blocks | Avoid crowded marketing hero stacks |
| Model grid | observed | Five-column model grid at desktop, single-column card stack at 390px mobile | Cards grow from `237px` desktop column width to `334px` mobile width |
| Form layout | observed | Register form uses two columns for paired fields on desktop, stacked fields on mobile | Keep field width stable and labels close to controls |
| Mobile padding | observed | Mobile text/cards commonly use `334px` content width on `390px` viewport | About `28px` side padding |

### Depth & Elevation Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Mostly flat depth | observed | No repeated card drop shadows; model cards and chips use border/radius | Depth comes from tonal layers and rounded panels |
| Limited shadows | observed | Rare shadows: `rgba(0,0,0,.25) 0 2px 8px` and `rgba(0,0,0,.15) 0 1px 4px` on limited overlay surfaces | Do not use heavy card shadows as a default |
| Inset outline | observed | `rgba(252,252,253,.1) 0 0 0 1px inset` appeared in control states | Use low-alpha inset borders for selected/utility states |

### Responsive Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Header collapse | observed | Mobile header shows compact icon menu, small centered brand mark, and search icon | Desktop search field becomes icon-only |
| Topic chips wrap | observed | Home mobile topic teaser becomes a two-column grid of taller chips | Avoid horizontal page overflow |
| Model cards stack | observed | Mobile model page stacks cards one per row at `334px` width | Desktop five-column grid is not retained |
| Type scale reduces | observed | H1 `40px / 60px` desktop becomes `28px / 40px` mobile | Preserve hierarchy through line height and spacing |
| Footer compacts | observed | Mobile footer keeps link rows and legal text stacked with locale buttons | Do not force desktop footer columns on mobile |

### Desktop/Mobile Conflict Handling

Desktop rendering is treated as the canonical base system because it exposes the complete content grid, search field, model grid, header proportions, and footer layout. Mobile captures are used as responsive overrides.

| Area | Base Rule | Mobile Override |
| --- | --- | --- |
| Header/search | 72px black header with logo, menu pill, full search input | Compact black header with menu icon, small brand mark, search icon |
| Content width | `1216-1248px` content rails with about `96px` margins | `334px` content rail on 390px viewport |
| Typography | H1 `40/60`, H2 `32/44`, module `24/36` | H1 `28/40`, H2 `24/36`, module `20/32` |
| Model grid | Five-column dark rounded model cards | One-column `334px` card stack |
| Topic chips | Horizontal chip row, `198 x 50` | Two-column chip grid, `161 x 74` |

## Completeness Evaluation

| Section | Coverage | Confidence | Strongest Evidence | Gaps |
| --- | --- | --- | --- | --- |
| Visual Theme & Atmosphere | complete | high | Desktop/mobile screenshots across home, model, company, technology, design, sustainability, careers, media | Regional Audi market sites may differ |
| Color Palette & Roles | partial | high | Aggregated computed colors and screenshots across 17 rendered captures | Alert/success/error colors not observed |
| Typography Rules | complete | high | Computed font family, sizes, line heights, and weights across pages | Exact licensed font files not copied |
| Component Stylings | complete | high | Header, menu, search, buttons, chips, model cards, forms, carousel controls, footer | Authenticated account and cart components not inspected |
| Layout Principles | complete | high | Desktop/mobile screenshots and measured widths for grids, forms, header, footer | Tablet breakpoint not captured |
| Depth & Elevation | partial | medium | Repeated radius/border data and rare shadow samples | Modals beyond menu/search were not deeply inspected |
| Do's and Don'ts | complete | medium | Derived from repeated observed patterns and absent anti-patterns | Some guardrails are inferred |
| Responsive Behavior | partial | high | Mobile captures for home, models, design, register, search | Tablet and landscape mobile not captured |
| Agent Prompt Guide | complete | medium | Based on supported tokens/components/layout rules | Should be adapted for non-global Audi locales |

## Legal and Scope Notes

This extraction is based only on publicly visible website rendering. It documents visual patterns, token values, and component behavior for design-system study. It does not imply affiliation with Audi. Screenshots are retained as audit evidence only.

### Preview Asset Handling

| Asset Type | Handling | Notes |
| --- | --- | --- |
| Evidence screenshots | Retained in `screenshots/` | Audit evidence of public rendering only |
| Brand mark crop | `assets/brand-reference.png` | Protected reference only, not a reusable design asset |
| Hero/media crop | `assets/hero-reference.png` | Protected evidence-only crop from `https://www.audi.com/en/design-299`, not a reusable design asset |
| Preview reconstruction surfaces | CSS-generated dark panels, cards, grids, and material planes | Marked as `Synthetic CSS surface` |
| Fonts | CSS stack names documented; font files not copied | Browser fallback may vary |

## Limitations

- The starting URL was inferred as Audi global English because no specific Audi regional URL was provided.
- Sign-in, cart, authenticated account, and transaction flows were not inspected.
- Alert/success/error states were not observed.
- Tablet breakpoints were not captured.
- Hover and keyboard focus states were only lightly sampled and are not promoted as official interaction behavior.
- `preview-dark.html` was not created because the crawled global site is already dark-first; there was no separate user-facing dark-mode toggle to document as an alternate theme.

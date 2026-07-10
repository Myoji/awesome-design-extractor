# Mercedes-Benz Korea Design Extraction Evidence

## Audit Metadata

| Field | Value |
| --- | --- |
| Requested brand | Mercedes-Benz |
| Primary URL attempted | https://www.mercedes-benz.com/en/ |
| Primary URL result | HTTP 403 Access Denied |
| Extraction source URL | https://www.mercedes-benz.co.kr/passengercars.html |
| Final rendered URL | https://www.mercedes-benz.co.kr/passengercars.html |
| Crawl date | 2026-07-09 |
| Tool | Playwright Chromium, installed in a temporary folder outside the repository |
| Desktop viewport | `1440 x 1000` |
| Mobile viewport | `390 x 844` |
| Output folder | `examples/mercedes-benz` |
| Raw data | `evidence-raw.json`, `evidence-summary.json`, `aggregate-insights.json` |
| Screenshots | `screenshots/` |

The global Mercedes-Benz public site was attempted first because the user asked for the brand without a regional URL. That page returned HTTP 403 from the current environment, so the extraction switched to the accessible official Mercedes-Benz Korea public site. No authentication was used.

## Crawl Scope

Desktop pages visited:

| Label | URL | Status | Screenshot |
| --- | --- | --- | --- |
| Home | `https://www.mercedes-benz.co.kr/passengercars.html` | 200 | `screenshots/desktop-01-home.png` |
| Models all | `https://www.mercedes-benz.co.kr/passengercars/models.html` | 200 | `screenshots/desktop-02-models-all.png` |
| Electric models | `https://www.mercedes-benz.co.kr/passengercars/models/electric.html` | 200 | `screenshots/desktop-03-models-electric.png` |
| E-Class | `https://www.mercedes-benz.co.kr/passengercars/models/saloon/e-class/overview.html` | 200 | `screenshots/desktop-04-e-class.png` |
| S-Class | `https://www.mercedes-benz.co.kr/passengercars/models/saloon/s-class/overview.html` | 200 | `screenshots/desktop-05-s-class.png` |
| EQE SUV | `https://www.mercedes-benz.co.kr/passengercars/models/suv/eqe/overview.html` | 200 | `screenshots/desktop-06-eqe-suv.png` |
| Store | `https://www.mercedes-benz.co.kr/passengercars/buy/new-car.html` | 200 | `screenshots/desktop-07-store.png` |
| Test drive | `https://www.mercedes-benz.co.kr/passengercars/test-drive.html` | 200 | `screenshots/desktop-08-test-drive.png` |
| Services | `https://www.mercedes-benz.co.kr/passengercars/services.html` | 200 | `screenshots/desktop-09-services.png` |
| Brand | `https://www.mercedes-benz.co.kr/passengercars/brand.html` | 200 | `screenshots/desktop-10-brand.png` |
| AMG | `https://www.mercedes-benz.co.kr/passengercars/brand/amg.html` | 200 | `screenshots/desktop-11-amg.png` |
| Maybach | `https://www.mercedes-benz.co.kr/passengercars/brand/maybach.html` | 200 | `screenshots/desktop-12-maybach.png` |
| MANUFAKTUR | `https://www.mercedes-benz.co.kr/passengercars/brand/manufaktur.html` | 200 | `screenshots/desktop-13-manufaktur.png` |
| MBUX | `https://www.mercedes-benz.co.kr/passengercars/technology/mbux.html` | 200 | `screenshots/desktop-14-mbux.png` |
| Design and concept | `https://www.mercedes-benz.co.kr/passengercars/technology/design-and-concept-cars.html` | 200 | `screenshots/desktop-15-design-concept.png` |

Mobile pages visited:

| Label | URL | Status | Screenshot |
| --- | --- | --- | --- |
| Home | `https://www.mercedes-benz.co.kr/passengercars.html` | 200 | `screenshots/mobile-01-home.png` |
| Models all | `https://www.mercedes-benz.co.kr/passengercars/models.html` | 200 | `screenshots/mobile-02-models-all.png` |
| E-Class | `https://www.mercedes-benz.co.kr/passengercars/models/saloon/e-class/overview.html` | 200 | `screenshots/mobile-03-e-class.png` |
| Test drive | `https://www.mercedes-benz.co.kr/passengercars/test-drive.html` | 200 | `screenshots/mobile-04-test-drive.png` |
| Brand | `https://www.mercedes-benz.co.kr/passengercars/brand.html` | 200 | `screenshots/mobile-05-brand.png` |

Interaction-state captures were attempted for menu and search states. The most reliable evidence came from rendered desktop/mobile pages and observed flyout DOM structure.

Skipped pages: authenticated login, online purchase completion, dealer transaction flows, legal/cookie pages, social links, and external pages. The crawl stopped after representative homepage, model catalog, test-drive, service, brand, AMG/Maybach, MBUX, design, footer, and responsive surfaces covered the nine-section rubric.

## Evidence Tables

### Color Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Black chrome anchors the system | observed | Repeated `rgb(0, 0, 0)` and `rgb(51, 51, 51)` across header, hero overlays, footer | Use black for global structure |
| White editorial canvas dominates body sections | observed | `rgb(255, 255, 255)` and `rgb(248, 248, 248)` appeared across home and catalog sections | Body pages are not dark-first |
| Gray is structural, not decorative | observed | `rgb(232,232,232)`, `rgb(187,187,187)`, `rgb(105,105,105)`, `rgb(159,159,159)` | Use for lines, disabled controls, metadata |
| Primary CTA is blue | observed | `rgb(0,120,214)` and `rgb(0,106,188)` in action backgrounds/borders | Use as the main conversion color |
| Semantic status colors | uncertain | No success/warning/error state was exercised | Do not infer semantic palette |

### Typography Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Primary text stack | observed | `"MBCorpo Text", DaimlerCS-Regular, DaimlerCSArab-Regular, Arial, sans-serif` | Used for body, UI, cards |
| Title stack | observed | `"MBCorpo Title", DaimlerCAC-Regular, DaimlerCACArab-Regular, serif` | Used for hero and section headings |
| Large hero scale | observed | `64px / 72px` title sample | Campaign hero copy |
| Section scale | observed | `48px / 60px` and `34px / 40px` | Section and category headings |
| UI/body scale | observed | `16px / 24px`, `14px`, `12px` | Dense navigation, buttons, legal copy |
| Weight contrast | observed | `400` dominant; `700` for buttons/card emphasis | Use bold selectively |

### Component Evidence

| Component | Level | Evidence | Extracted Rule |
| --- | --- | --- | --- |
| Header | observed | Black header, small white links, centered brand area, right account/favorite utilities | Compact black chrome |
| Hero | observed | Full-width image stage with left copy and dark gradient overlay | Large campaign surface with serif title |
| Primary button | observed | Blue `#0078D6`, white text, small radius | Rectangular conversion CTA |
| Secondary button | observed | Dark/transparent fill with gray border | Use for alternate hero actions |
| Brand switch tabs | observed | Centered tab group below home hero | White/black segmented switching |
| Model/category cards | observed | Light gray wells and compact image/metadata blocks | Retail grid pattern |
| Filter column | observed | Model and test-drive pages show dense left controls | Pair filters with grid list |
| Floating assistant panel | observed | White panel with stronger shadow over page content | Reserve stronger elevation for assistance/contact |
| Footer | observed | Black, multi-column, legal-heavy footer | Dense structured footer |

### Component State Evidence

| State | Level | Evidence | Preview Treatment |
| --- | --- | --- | --- |
| Active brand tab | observed | Home hero tab group highlights the selected brand | Rendered as selected segmented tab |
| Primary/secondary CTA contrast | observed | Blue action beside dark/outlined action | Rendered in hero sample |
| Floating assistant open | observed | Home screenshot shows expanded contact panel | Rendered as elevated panel sample |
| Focus-visible | uncertain | Keyboard state was not exhaustively sampled | Conservative outline only |
| Hover | uncertain | Hover deltas were not exhaustively sampled | Conservative blue darkening only |

### Layout Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Desktop rail | observed | Around `1238px` centered within `1440px` viewport | Use `max-width: 1238px` |
| Hero height | observed | Home hero around `600px` desktop | Full-width stage |
| Catalog split | observed | Left filter column around `280px`, right card grid around `900px` | Filter + grid architecture |
| Card grid | observed | Product/model areas use three-column desktop rhythm | Collapse on mobile |
| Mobile padding | observed | Mobile screenshots stack content with compact side padding | Use `24-28px` side padding |

### Depth & Elevation Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Mostly flat cards | observed | Product wells use light gray fills and thin separators | Avoid heavy card shadows |
| Assistant is elevated | observed | Floating contact panel uses visible shadow | Reserve shadow for overlays |
| Hero depth is photographic | observed | Image stage plus black gradient | CSS preview uses protected reference only |

### Responsive Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Header compacts | observed | Mobile home shows compact black header | Icon-led header |
| Cards stack | observed | Mobile model/test-drive pages stack list content | Single-column cards |
| Hero crops | observed | Mobile hero prioritizes vertical crop and text stack | Avoid desktop aspect lock |
| Footer stacks | observed | Footer columns collapse into vertical groups | Preserve small legal text |

### Desktop/Mobile Conflict Handling

Desktop rendering is the base because it exposes complete navigation, filter grids, and footer structure. Mobile captures are used for override rules.

| Area | Base Rule | Mobile Override |
| --- | --- | --- |
| Header | Black horizontal nav with centered brand area | Compact icon-led header |
| Hero | Wide `~600px` stage, left copy | Taller crop, stacked copy |
| Catalog | Filter column plus 3-column grid | Filter trigger plus single-column list |
| Typography | H1 `64/72`, H2 `48/60` | Reduce scale, preserve serif hierarchy |
| Footer | Dense multi-column footer | Stacked link groups |

## Completeness Evaluation

| Section | Coverage | Confidence | Strongest Evidence | Gaps |
| --- | --- | --- | --- | --- |
| Visual Theme & Atmosphere | complete | high | Home, brand, AMG, Maybach, catalog pages | Global site blocked by 403 |
| Color Palette & Roles | partial | high | Aggregated computed colors and screenshots | Semantic status colors not observed |
| Typography Rules | complete | high | Computed font families, sizes, weights | Font files not copied |
| Component Stylings | complete | high | Header, hero, tabs, buttons, cards, filters, footer | Checkout completion/auth components absent |
| Layout Principles | complete | high | Desktop/mobile screenshots and measured rails | Tablet not captured |
| Depth & Elevation | partial | medium | Card/floating assistant observations | Modal variants limited |
| Do's and Don'ts | complete | medium | Derived from repeated patterns and legal asset rules | Some guardrails inferred |
| Responsive Behavior | partial | high | Mobile home, models, E-Class, test-drive, brand | Landscape/tablet not captured |
| Agent Prompt Guide | complete | medium | Based on observed tokens/components/layout | Should be adapted for other regions |

## Legal and Scope Notes

This extraction is based only on publicly visible website rendering. It documents visual patterns, token values, and component behavior for design-system study. It does not imply affiliation with Mercedes-Benz.

### Preview Asset Handling

| Asset Type | Handling | Notes |
| --- | --- | --- |
| Evidence screenshots | Retained in `screenshots/` | Audit evidence of public rendering only |
| Brand wordmark reference | `assets/brand-reference.svg` | Protected reference from official public asset URL, not a reusable design asset |
| Hero/media crop | `assets/hero-reference.png` | Protected evidence-only crop from the rendered home hero |
| Preview reconstruction surfaces | CSS-generated panels, card wells, grids, and overlay planes | Marked as `Synthetic CSS surface` |
| Fonts | CSS stack names documented; font files not copied | Browser fallback may vary |

## Limitations

- The global Mercedes-Benz page returned HTTP 403; Mercedes-Benz Korea was used as an official accessible fallback.
- Authenticated account, payment, order completion, dealer backend, and CRM flows were not inspected.
- Semantic success/warning/error states were not observed.
- Tablet and landscape mobile breakpoints were not captured.
- Hover and keyboard focus states were lightly sampled and are not promoted as official behavior.

# Polestar Korea Design Extraction Evidence

## Audit Metadata

| Field | Value |
| --- | --- |
| Source URL | https://www.polestar.com/kr/ |
| Final rendered URL | https://www.polestar.com/kr/ |
| Crawl date | 2026-07-06 |
| Tool | Playwright with local Chrome executable |
| Desktop viewport | `1440 x 1000` |
| Mobile viewport | `390 x 844` |
| Output folder | `examples/polestar` |
| Raw data | `evidence-raw.json`, `evidence-summary.json`, `aggregate-insights.json` |
| Preview QA | `preview-qa.json` |
| Screenshots | `screenshots/` |

Cookie consent was observed and then dismissed through the visible "모든 쿠키 허용" control before the final evidence screenshots were captured.

## Crawl Scope

Desktop pages visited:

| URL | Status | Screenshot |
| --- | --- | --- |
| `https://www.polestar.com/kr/` | 200 | `screenshots/desktop-01-home.png` |
| `https://www.polestar.com/kr/polestar-2/` | 200 | `screenshots/desktop-02-polestar-2.png` |
| `https://www.polestar.com/kr/polestar-3/` | 200 | `screenshots/desktop-03-polestar-3.png` |
| `https://www.polestar.com/kr/polestar-4-models/polestar-4-coupe/` | 200 | `screenshots/desktop-04-polestar-4-models-polestar-4-coupe.png` |
| `https://www.polestar.com/kr/polestar-5/` | 200 | `screenshots/desktop-05-polestar-5.png` |
| `https://www.polestar.com/kr/offers/new/` | 200 | `screenshots/desktop-06-offers-new.png` |
| `https://www.polestar.com/kr/test-drive/booking/` | 200 | `screenshots/desktop-07-test-drive-booking.png` |
| `https://www.polestar.com/kr/configure/` | 200 | `screenshots/desktop-08-configure.png` |
| `https://www.polestar.com/kr/charging/` | 200 | `screenshots/desktop-09-charging.png` |
| `https://www.polestar.com/kr/owning-a-polestar/` | 200 | `screenshots/desktop-10-owning-a-polestar.png` |
| `https://www.polestar.com/kr/support/` | 200 | `screenshots/desktop-11-support.png` |
| `https://www.polestar.com/kr/sustainability/` | 200 | `screenshots/desktop-12-sustainability.png` |
| `https://www.polestar.com/kr/news/` | 200 | `screenshots/desktop-13-news.png` |
| `https://www.polestar.com/kr/sign-up-newsletter/` | 200 | `screenshots/desktop-14-sign-up-newsletter.png` |
| `https://www.polestar.com/kr/locations/` | 200 | `screenshots/desktop-15-locations.png` |

Mobile pages visited:

| URL | Status | Screenshot |
| --- | --- | --- |
| `https://www.polestar.com/kr/` | 200 | `screenshots/mobile-01-home.png` |
| `https://www.polestar.com/kr/polestar-3/` | 200 | `screenshots/mobile-02-polestar-3.png` |
| `https://www.polestar.com/kr/test-drive/booking/` | 200 | `screenshots/mobile-03-test-drive-booking.png` |
| `https://www.polestar.com/kr/sign-up-newsletter/` | 200 | `screenshots/mobile-04-sign-up-newsletter.png` |

Discovery found 145 same-locale links. Legal, privacy, cookie, login/profile, manual, external social/media/investor, and locale-duplicate links were not crawled because they were lower value for visual-system extraction. The crawl stopped after the representative product, offer, form, map/location, support, news, and sustainability surfaces covered the nine-section rubric.

## Evidence Tables

### Color Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Black/white is the dominant system | observed | `#000000` appeared 7596 times in sampled foreground values; `#FFFFFF` appeared 352 times | Used for text, buttons, dark sections, white surfaces |
| Muted text uses black alpha | observed | `#000000 @ 0.6` appeared 553 times | Secondary headings, footer labels, disabled-looking steps |
| Light surfaces rely on gray family | observed | Repeated backgrounds: `#F0F0F0`, `#F3F4F4`, `#D9D9D6`, `#ECECE7` | Product wells, forms, footer, promo strip |
| Orange is a sparse functional accent | observed | `#F06E00` on offer year labels and active location filter; `#FF7500` on limited accent surfaces | Do not use as primary brand fill everywhere |
| Full dark mode | uncertain | Product pages contain black/dark sections, but no user-facing dark-mode toggle was found | No `preview-dark.html` generated |
| Browser-blue links | uncertain | `#0000EE` appeared in computed values, but screenshots do not establish it as a deliberate brand token | Excluded from token palette |

### Typography Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Primary font stack | observed | Computed stack: `"Polestar Unica", "Helvetica Neue", Helvetica, Arial, sans-serif` | Korean glyph rendering may use system fallback |
| Body/UI size | observed | `16px / 18px`, weight `400`, letter spacing `-0.3px` appeared most often | Nav, buttons, labels, body copy |
| Section heading size | observed | `30px / 32px`, weight `400`, letter spacing around `-1.2px` | Home modules, booking, configure, newsletter |
| Product narrative size | observed | `32px / 33.92px`, weight `400` | Product pages |
| Display scale | observed | `60px`, `72px`, `80px`, and `110px` values sampled | Used sparingly for product/display moments |
| Bold text | observed | Weight `700` appeared far less often than `400` | Use only for emphasis |

### Component Evidence

| Component | Level | Evidence | Extracted Rule |
| --- | --- | --- | --- |
| Primary buttons | observed | `주문하기`, `상담 신청하기`, `보내기` sampled with black fill, white text, `0px` radius, 36-48px height | Rectangular black CTA, no radius |
| Outline buttons | observed | Home hero and content buttons use transparent fill with 1px inset outline in black or white | Secondary action is outlined, not gray-filled |
| Filters | observed | Locations filter: active `전체` uses `#F06E00`, inactive filters use transparent fill with `1px solid rgba(0,0,0,.6)` | Orange indicates selected state |
| Forms | observed | Newsletter and locations inputs are 48px high, `0px` radius, gray/transparent field areas | Bottom-line or flat rectangular fields |
| Product cards | observed | Home/offers/configure product choices are flat image wells with sharp separators | No cards with rounded corners or shadows |
| Floating utility buttons | observed | Help/chat and map controls are circular exceptions | Keep circular forms to utilities only |

### Component State Evidence

| State | Level | Evidence | Preview Treatment |
| --- | --- | --- | --- |
| Primary and outline CTA variants | observed | Repeated black filled buttons and transparent outline buttons across product, home, form, and offer pages | Rendered as default button variants |
| Selected filter | observed | Locations filter `전체` uses orange fill while inactive filters remain transparent outline | Rendered as selected state |
| Focus-visible and hover deltas | uncertain | Sampling was limited and many interactions showed no obvious computed-style change | Rendered only as conservative CSS state samples, not promoted as source tokens |
| Disabled/de-emphasized controls | inferred | Faint black-alpha values appeared in forms/map-like controls, but disabled behavior was not exhaustively exercised | Rendered as de-emphasized examples and kept out of core token claims |

### Layout Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Desktop content grid | observed | At 1440px, common content width around 1216px with about 112px side margin | Header, home content, footer |
| Full-width media bands | observed | Product pages use large full-bleed dark/media sections | Product image carries emotional weight |
| Two-column product/offer cards | observed | Home and offers pages use side-by-side product modules | Collapse on mobile |
| Form layout | observed | Newsletter desktop form uses two columns; mobile stacks fields | Keep fields aligned and rectangular |
| Map layout | observed | Locations page uses fixed left search/filter panel over map | Map fills remaining space |

### Depth & Elevation Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Flat surface system | observed | Most sampled `borderRadius` values are `0px`; no repeated card shadows | Use borders/separators instead of elevation |
| Inset outlines | observed | Repeated `box-shadow: rgb(...) 0px 0px 0px 1px inset` | Outline buttons and tiles |
| Dark-section depth | observed | Product pages use black/dark-gray story sections | Depth by contrast, not shadow |

### Responsive Evidence

| Finding | Level | Evidence | Notes |
| --- | --- | --- | --- |
| Mobile nav collapse | observed | `mobile-01-home.png` shows wordmark plus hamburger | Desktop horizontal links disappear |
| Mobile cards stack | observed | Home product/offer modules stack vertically at 390px | One-column layout |
| Footer accordion behavior | observed | Mobile footer shows grouped rows with plus controls | Desktop footer is multi-column |
| Mobile form stack | observed | Newsletter fields become single-column, about 343px wide | Keep 24px side padding |
| Product text changes | observed | Polestar 3 mobile narrative sampled at `24px` where desktop uses `32px` | Not all headings shrink |

### Desktop/Mobile Conflict Handling

Desktop rendering is treated as the canonical base system because it exposes the complete navigation, multi-column product modules, full-width media cadence, footer columns, and fixed map/search composition. Mobile captures are used as responsive overrides.

| Area | Base Rule | Mobile Override |
| --- | --- | --- |
| Header/navigation | 72px desktop header with horizontal navigation links | Compact wordmark plus hamburger |
| Product and offer modules | Two-column or asymmetric media/text grids | Single-column stacks |
| Footer | Multi-column grouped links | Accordion-like grouped rows |
| Forms | Two-column field alignment | Single-column full-width fields |
| Product narrative type | 32px product narrative scale where observed | 24px mobile narrative on product story content |

## Completeness Evaluation

| Section | Coverage | Confidence | Strongest Evidence | Gaps |
| --- | --- | --- | --- | --- |
| Visual Theme & Atmosphere | complete | high | Desktop/mobile screenshots from home, product, offers, news, locations | Authenticated account surfaces not inspected |
| Color Palette & Roles | partial | high | Aggregated computed colors across 19 rendered captures | Alert/success/error colors not observed |
| Typography Rules | complete | high | Computed font family, sizes, weights, line heights, letter spacing | Exact licensed font files not copied or inspected |
| Component Stylings | partial | high | Buttons, filters, forms, cards, nav, map controls, and expanded preview catalog | Hover/focus/disabled states are conservative samples; deep configurator states not inspected |
| Layout Principles | complete | high | Screenshots and dimensions across product, form, map, news pages | Some same-origin detail pages skipped |
| Depth & Elevation | complete | high | Repeated `0px` radius and inset outline evidence | Modal/help internal states only lightly sampled |
| Do's and Don'ts | complete | medium | Derived from repeated patterns and anti-patterns absent from screenshots | Some items are inferred guardrails |
| Responsive Behavior | partial | medium | 390px captures for home, product, booking, newsletter | Tablet breakpoints not captured |
| Agent Prompt Guide | complete | medium | Based on supported tokens/components/layout rules | Should be adapted per target product and legal constraints |

## Legal and Scope Notes

This extraction is based only on publicly visible website rendering. It documents visual patterns, token values, and component behavior for design-system study. It does not copy proprietary image assets into the preview and does not imply Polestar affiliation. Screenshots are retained as audit evidence only.

### Preview Asset Handling

| Asset Type | Handling | Notes |
| --- | --- | --- |
| Evidence screenshots | Retained in `screenshots/` | Audit evidence of public rendering only |
| Preview vehicle/media imagery | CSS-drawn neutral silhouettes and pattern placeholders | No Polestar product images copied |
| Logo/wordmark | Text label only | Not an official logo asset |
| Fonts | CSS stack names documented; font files not copied | Browser/system fallback may render Korean glyphs |

### Preview QA

The expanded `preview.html` was rendered with Headless Chrome via Chrome DevTools Protocol on 2026-07-07. The page passed overflow checks at desktop `1440px`, mobile `390px`, and narrow mobile `360px`. QA details are stored in `preview-qa.json`; updated screenshots are `screenshots/preview-check.png` and `screenshots/preview-check-mobile.png`.

## Limitations

- Login/profile and authenticated flows were not inspected.
- Product configurator deep states were not exhaustively crawled.
- Tablet breakpoints were not captured.
- Hover/focus state sampling was limited and many interactions showed no obvious computed style change.
- A full dark-mode system was not observed, so only dark-section rules are documented.

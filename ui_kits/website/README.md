# Акметрон — Marketing website UI kit

Interactive click-through recreation of the Акметрон corporate marketing site, built entirely from the design-system primitives (`Button`, `Card`, `Tag`, `Badge`, `Callout`, `Stat`, `Input`, `Icon`).

## Screens / flow
`index.html` boots an interactive app with three views (nav via the header):
- **home** — `Hero` → `Directions` (the 7 business directions) → `Metrics` band.
- **direction** — `DirectionPage`: a single direction detail (Телеком) with product list, stats, and an alert/pain card.
- **contact** — `Contact`: request form with a success state.

## Files
| File | Role |
|------|------|
| `App.jsx` | View orchestrator + page-enter animation |
| `SiteHeader.jsx` | Sticky blurred top nav |
| `Hero.jsx` | Hero with puzzle texture + glow |
| `Directions.jsx` | 7-direction card grid (`AKM_DIRECTIONS` data) |
| `Metrics.jsx` | Numeric stat band + capability callouts |
| `DirectionPage.jsx` | Direction detail page |
| `Contact.jsx` | Request form |
| `SiteFooter.jsx` | Footer |

## Notes
- Components are shared across `<script type="text/babel">` files via `Object.assign(window, {...})`.
- DS primitives come from `window.DesignSystem_176d4c` (the compiled bundle).
- The puzzle texture is rendered as an `<img>` (not a CSS pseudo-element) so it survives DOM-capture export.
- Decorative-only; forms don't submit anywhere.

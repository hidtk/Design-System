# Акметрон — Design System

A light, instrument-grade visual system for **Акметрон**, an engineering company in test-&-measurement equipment and radio electronics. The brand mark is a deep-blue (`#004180`) circle of four interlocking puzzle pieces. Airy white surfaces, functional blue accents, Montserrat headlines over Inter body, and a signature puzzle texture at the edges. Color is functional, not decorative — **blue = "look here", rose = "warning", greys = secondary**.

This is a self-contained design system: consumers link the single root `styles.css`, and the compiler bundles the React components into a runtime library (`window.DesignSystem_176d4c`).

---

## Company / product context

Акметрон is an инженерно-техническая компания working in контрольно- измерительное оборудование (test & measurement) and радиоэлектроника. Offerings: measurement instruments for the radio-electronics industry, custom electronics development, manufacture of technological tooling (технологическая оснастка), and microwave (СВЧ) devices built to customer requirements.

**Seven business directions** organize the catalog:

1. **Телеком** — telecom measurement
2. **High Speed Digital** — signal integrity, oscilloscopy
3. **Испытательное оборудование** — test equipment
4. **СПОАИ** — verification & measurement automation systems
5. **Метрологическое оборудование** — metrology: standards, calibration, поверка
6. **Фотоника (Оптика)** — photonics / optics
7. **ГНСС оборудование** — GNSS / satellite navigation

### Sources provided

- `uploads/akmetron-claude-style.md` — the brand style guide (color, type, space, form, motifs, composition, verbal style). This system is a faithful build of that guide.
- **No codebase, Figma, or logo/font binaries were provided.** The logo and the signature puzzle texture are **stand-ins** built to spec — see Caveats at the bottom.

---

## CONTENT FUNDAMENTALS

How Акметрон writes — applies to Russian and English copy.

- **Tone:** confident, not assertive. Statements, not pitches. Business register with room to breathe ("в один клик", "без посредника") — but no slang, no hype.
- **Person:** addresses the reader directly ("Опишите задачу", "Получите расчёт"), speaks for the company as "мы" implicitly. Russian is деловой but not сухой.
- **Headlines declare.** No trailing period on headlines, no trailing questions. Example: *"Измеряем точно. Разрабатываем под задачу"*.
- **Numbers are concrete.** `<1 ч` not "быстро"; `5 000 ₽` not "дешевле"; `67 ГГц` not "широкий диапазон". Timelines are ranges ("до 6 месяцев").
- **Every term is understood or explained** at first use (e.g. СВЧ, ГНСС, СПОАИ).
- **Punctuation:** middle dot `·` separates short items in a line; em-dash `—` for parenthetical breaks; avoid semicolons.
- **Emphasis through weight and structure**, never ALL CAPS, italics, or exclamation marks. Uppercase is reserved for short eyebrow labels and badges.
- **No emoji.** None anywhere — this is an instrumentation brand.
- **Cards and pills replace bullets.** Lists become visual blocks; bulleted lists are a last resort. One idea per scene; strict order label → title → subtitle → body.

---

## VISUAL FOUNDATIONS

**Color.** Soft cool-grey field (`#E7EEF7`) under a `135°` background gradient (`#F5F8FC → #EAF1FA`). Panels are white with a faint `160°` vertical gradient (`#FFFFFF → #F6FAFD`) — lighter top, softer bottom. One functional accent family: blue (`#1C6BB0` primary, `#3E8FD0` light/hover, `#004180` brand depth). Text steps down `#16233F → #4A5874 → #8693AD`. Rose (`#C0566F` stripe, `#7E2B40` text) is reserved **strictly** for risks, problems, and pains. Never colorize for variety.

**Type.** Montserrat for headings (700/800/900) with tight negative tracking on big headlines (`-0.03em`); Inter for body (400/500/600) at line-height 1.5, lines ≤ \~70 chars. Eyebrow labels are Montserrat 700, UPPERCASE, `~3.5px` (0.27em) tracking. Metric numerals are oversized Montserrat 800 in blue, dominant over their label.

**Spacing & rhythm.** Whitespace is the priority — aim \~60% breathing room. Scale is `4 / 8 / 16 / 24 / 32 / 48 / 64` — no arbitrary values. Outer padding always larger than inner. Group related items closer; separate sections with larger gaps.

**Form & corners.** Soft rounded corners everywhere: 8px (inputs/small), 12px (default cards), 18px (large panels), full pill (999px) for tags and chips. No sharp corners. Borders are hairline and nearly transparent (`rgba(30,60,110,0.12)`); colored (blue) borders appear **only** on active/selected state.

**Shadows & glows.** Shadows are soft, low-contrast, large-blur — they *lift*, not divide (`0 10px 30px rgba(20,40,80,0.10)`). Selection/highlight uses a soft blue outer glow (`0 0 50px rgba(75,159,213,0.18)`) plus a blue border. No hard shadows.

**Backgrounds & motifs.** Full-bleed light gradients, never flat white. The signature **puzzle texture** (thin blue jigsaw lattice) sits at low opacity (\~20%), anchored to one edge and masked so it fades toward the center. Soft **radial blue glows** bloom in corners or behind large numbers — barely there, for depth. Decor lives at the edges; the center of every composition stays clean. Imagery skews cool/technical, never warm.

**Transparency & blur.** Sticky headers use a translucent white fill with `backdrop-filter: blur(12px)`. Chips use a faint `rgba(30,60,110,0.04)` fill; callouts a translucent blue `rgba(75,159,213,0.12)` fill with a blue border.

**Motion.** Content fades in gently — opacity + small upward translate (\~600ms), eased (`cubic-bezier(0.16,1,0.3,1)`). Decorative glows get a slow ambient breathing cycle. Smooth ease curves only — no bouncing. Never animate critical readable text. Respects `prefers-reduced-motion`.

**Hover / press.** Primary buttons lighten blue on hover (`#1C6BB0 → #3E8FD0`); secondary buttons gain a blue border + blue text; ghost buttons brighten text. Inputs gain a blue border + a soft 3px focus ring. Cards lift `-4px` on hover. No shrink-on-press.

**Cards.** Default = panel gradient + hairline border + soft md shadow. Active = lighter panel gradient + blue border + glow. Alert = rose gradient + left edge stripe.

---

## ICONOGRAPHY

- **System:** thin **line glyphs** — no fills, simple geometry, blue stroke (`#62B4EC`), stroke-width \~1.6. This matches the brand spec exactly.
- **Source:** [Lucide](https://lucide.dev) via CDN (`https://unpkg.com/lucide@latest`), used as the closest open-source match to the brand's thin-line spec. **Flagged substitution** — no brand icon set was provided. Swap for the house set if one exists.
- The `Icon` component wraps Lucide; pass any Lucide `name` (e.g. `radio`, `satellite`, `activity`, `zap`, `ruler`, `scan-eye`, `shield-check`, `flask-conical`).
- **No emoji, no unicode-glyph icons.** Decorative numerals and the puzzle texture carry visual interest instead.
- Brand marks live in `assets/`: `logo-mark.png` (the **official** puzzle-circle mark), `logo-lockup.svg` (mark + wordmark, self-contained), `puzzle-pattern.svg` (texture). Compose the lockup in HTML/JSX via `<span class="akm-logo"><img src=".../logo-mark.png"><span>АКМЕТРОН</span></span>` for crisp Montserrat type.

---

## Index / manifest

**Root**

- `styles.css` — global entry (import manifest only)
- `readme.md` — this file
- `SKILL.md` — Agent-Skill front-matter for downloadable use

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css` (each `@import`ed by `styles.css`)

**`components/core/`** — React primitives (namespace `window.DesignSystem_176d4c`): `Button` · `Card` · `Tag` · `Badge` · `Callout` · `Stat` · `Input` · `Icon` (each as `.jsx` + `.d.ts` + `.prompt.md`; demo in `core.card.html`)

**`guidelines/cards/`** — foundation specimen cards (Colors, Type, Spacing, Brand)

**`ui_kits/website/`** — Акметрон marketing site recreation (interactive click-through; `index.html` + factored JSX). See its `README.md`.

**`slides/`** — sample deck slide types: `title` · `section` · `metrics` · `comparison` · `pain` (1280×720).

**`templates/`** — starting folders consuming projects copy:

- `deck/` — **Акметрон Deck**: 16:9 navy slide deck (title, section, metrics, comparison, pain) built on `deck-stage.js`.
- `landing/` — **Акметрон Landing**: marketing landing page (hero, 7-direction grid, metrics) built on DS components.

Each template loads the system via its sibling `ds-base.js` (links `styles.css` + `_ds_bundle.js`). Consuming projects: point the `base` line in `ds-base.js` at the bound `_ds/<folder>` tree relative to the page.

**`assets/`** — `logo-mark.png` (**official** mark) · `logo-lockup.svg` · `puzzle-pattern.svg`.

---

## Caveats / to replace

- **Logo** is now the **official Акметрон mark** (`logo-mark.png`) — a deep-blue (`#004180`) circle split into four interlocking puzzle pieces by white jigsaw lines. The `.akm-logo` helper pairs it with a Montserrat wordmark. A vector (SVG) version of the mark would be ideal for large-scale print — please send one if available.
- **Puzzle texture** (`puzzle-pattern.svg`) is a faithful stand-in for Акметрон's signature jigsaw motif. Replace with the brand SVG when available.
- **Fonts** load from Google Fonts (Montserrat + Inter), per the style guide. If the brand self-hosts licensed binaries, drop them in `assets/fonts/` and update `tokens/fonts.css` with local `@font-face` rules.
- **Icons** use Lucide as a substitution for the (unprovided) brand icon set.

# Akmetron Style

Apply this style to every output — prose, documents, HTML/CSS/SVG, presentations, code, diagrams.

---

## VISUAL IDENTITY

Use this section whenever generating HTML, CSS, SVG, React components, diagrams, charts, or any visual artifact.

### Color palette (use exact hex codes)

**Surfaces (dark)**
- Deepest field: `#0A1226`
- Main background: `#15233F` (or diagonal gradient `#15233F → #101B36`, ~135°)
- Panel / card: vertical gradient `#1B2A52 → #16233F` (~160°)
- Hairlines / borders: `rgba(122, 150, 200, 0.18)`

**Accents (blue)**
- Primary blue: `#4B9FD5` — actions, links, highlights
- Light blue: `#62B4EC` — hover, active, numbers, headlines on dark
- Deep blue: `#2E6FA8` — bottom of gradients, depth
- Glow: `rgba(75, 159, 213, 0.45)`

**Text on dark**
- Primary: `#EAF0FA`
- Secondary: `#9DAAC9` — captions, labels
- Tertiary: `#6E7CA0` — footnotes
- White spotlight: `#FFFFFF` (sparingly)

**Alert / pain / warning palette (only for risks, problems, negatives)**
- Surface: `#22203a → #171f37`
- Left edge stripe: `#c97a8e`
- Heading text: `#f0d4dc`

**Rule:** color is functional, not decorative. Blue = "look here". Rose = "warning". Greys = secondary information. Never colorize for variety.

### Typography

- **Headings:** Montserrat, weights 700 / 800 / 900. Tight negative letter-spacing for big headlines.
- **Body:** Inter, weights 400 / 500 / 600, line-height ~1.5.
- **Uppercase labels (eyebrow):** Montserrat 700, letter-spacing ~3.5px.
- **Load via:** Google Fonts (`Montserrat`, `Inter`).

Hierarchy by role (size scales with medium):
- `hero` — Montserrat 900, dominant
- `title` — Montserrat 800
- `subtitle` — Inter 400, generous line-height
- `body` — Inter 400
- `label` — Montserrat 700 UPPERCASE with letter-spacing
- `micro` — Inter 400, tertiary color
- `numeric` — Montserrat 800, oversized, light blue

Rules: headlines have no trailing period and are declarative. Body lines ≤ ~70 characters. Uppercase only for short labels (eyebrows, badges, indexes). No italics or underlines for emphasis — use weight.

### Space & rhythm

- Whitespace is the priority — aim for ~60% breathing room.
- Outer padding always larger than inner padding.
- Spacing scale: 4 / 8 / 16 / 24 / 32 / 48 / 64. No arbitrary values.
- Group related items closer; separate sections with larger gaps.

### Form

- Soft rounded corners on every surface: ~8–18px for large surfaces, full pill (`border-radius: 999px`) for tags and chips.
- No sharp corners, no hard shadows.
- Borders are hairline and nearly transparent. Colored borders only for active/selected state.
- Shadows: soft, low contrast, large blur — they lift, not divide.
- All large panels carry a subtle vertical gradient (lighter top, darker bottom) for matte-metal depth.

### Decorative motifs (atmosphere, never content)

- **Puzzle pattern:** Akmetron's signature SVG puzzle texture, low opacity (~40–50%), masked with a gradient so it fades toward the center, anchored to one edge.
- **Radial glows:** soft blue light blooms placed in corners or behind large numbers — barely there, but they give depth and "breathing".
- Both live at the periphery. The center of any composition stays clean.

### Surface states

- **Default card:** panel gradient + hairline border.
- **Active / highlighted:** blue border, soft outer blue glow, slightly lighter panel.
- **Alert / pain card:** rose palette, colored left edge stripe.
- **Callout strip:** translucent blue fill + blue border + icon + single line of text.
- **Pill / chip:** full pill shape, faint fill `rgba(255,255,255,0.03)`, hairline border.

### Icons, charts, data

- Icons: thin line glyphs, blue stroke, no fills, simple geometry.
- Numbers in metrics: oversized, light blue, dominant over their label.
- Bars and lines in charts: vertical gradients from the blue palette, no outlines.
- Tables: no full grid — only thin horizontal dividers; header row tinted.

### Motion (for interactive outputs)

- Content fades in gently (opacity + small upward translate, ~600ms, eased curve).
- Decorative elements get slow ambient cycles — breathing, slow rotation, gentle bob — barely perceptible.
- Smooth ease curves only, no bouncing.
- Never animate critical readable text.

---

## COMPOSITION PRINCIPLES

Apply to any document, page, slide, or screen.

- **One idea per scene.** A page, slide, or section closes exactly one thought.
- **Strict order:** label → title → subtitle → body → supporting content.
- **Cards and pills replace bullets.** Lists become visual blocks; bulleted lists are a last resort.
- **Decor lives at the edges.** The center of every composition stays uncluttered.
- **Concrete beats abstract.** `<1 hr` instead of "faster". `5,000 ₽` instead of "cheaper". Named person instead of "someone".

---

## VERBAL STYLE

Apply to all prose, both Russian and English.

- Confident, not assertive. Statements, not pitches.
- Business tone with room for life — short conversational turns are welcome ("one click", "no middleman"), but no slang.
- Every term either is universally understood or gets a one-line explanation at first use.
- No trailing questions in headlines. Headlines declare.
- Numbers are always concrete. Timelines are ranges. Claims cite a source or measurement when possible.
- Punctuation: middle dot `·` separates short items in a line; em-dash `—` for parenthetical breaks; avoid semicolons.
- Use weight and structure for emphasis — not ALL CAPS, not italics, not exclamation marks.
- Russian: деловой, but not сухой. English: plain, precise, no marketing fluff.

---

## DEFAULT RENDERING (when format isn't specified)

When asked for "a document", "a deck", "a page", "a one-pager" without further detail:
- Dark navy background, light blue accents.
- Montserrat for any heading-level text, Inter for body.
- Start with an uppercase **label** (eyebrow) above the main title.
- Use cards / pills / callouts instead of bulleted lists.
- Leave generous whitespace.
- Add a faint puzzle-pattern accent at one edge and a soft radial glow somewhere off-center.
- Reserve the rose palette strictly for problems, risks, and pains.

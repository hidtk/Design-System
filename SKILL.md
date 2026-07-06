---
name: akmetron-design
description: Use this skill to generate well-branded interfaces and assets for Акметрон — a test-&-measurement and radio-electronics engineering company — for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, you can
copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Quick orientation
- **Global CSS:** link `styles.css` (imports all tokens + fonts).
- **Components:** load `_ds_bundle.js`, then read `window.DesignSystem_176d4c`
  (`Button`, `Card`, `Tag`, `Badge`, `Callout`, `Stat`, `Input`, `Icon`). Each has a
  `.prompt.md` next to it under `components/core/`.
- **Icons:** Lucide via `<script src="https://unpkg.com/lucide@latest"></script>`.
- **Assets:** `assets/logo-mark.png` (official puzzle mark), `assets/logo-lockup.svg`, `assets/puzzle-pattern.svg`. Lockup = `<span class="akm-logo"><img src=".../logo-mark.png"><span>АКМЕТРОН</span></span>`.
- **Examples:** `ui_kits/website/` (marketing site) and `slides/` (deck slide types).

## Non-negotiables
- Light, airy surfaces; functional blue accents; rose **only** for risks/problems.
- Montserrat headings (declarative, no trailing period), Inter body.
- Start sections with an UPPERCASE eyebrow label. Cards & pills, not bullets.
- Concrete numbers. No emoji. Generous whitespace. Decor at the edges, center clean.

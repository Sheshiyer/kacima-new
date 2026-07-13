# Before / After Comparisons

## Hero Header
- Before (`index.html:19`): Title `Lennox Montgomery`
- After: Title `Kācima`

## Intro Section
- Before (`index.html:35-37`): Portfolio intro for a photographer
- After: Hero copy from `docs/copy-rebrand.md` — sanctuary entry, breath-led tone

## Section Titles
- Before (`index.html:64`, `index.html:88`, `index.html:109`, `index.html:193`, `index.html:225`, `index.html:246`, `index.html:302`): `About`, `Life`, `Work Ethics`, `Inspiration`, `Process`, `Collaborations`, `Style`
- After: Seven narrative sections per `docs/copy-rebrand.md`: `The Threshold`, `The Tree · The Name`, `The Land & The Sanctuary`, `Practices & Offerings`, `A Day at Kācima`, `Community & Future Gatherings`, `Visit & Connect`

## Offerings
- Before: No offerings; generic portfolio text
- After: `Sound Healing`, `Yoga / Meditation`, `Energy Work`, `Earthing`, `Workshops / Residencies` — concise descriptions

## Visit & Connect
- Before: None
- After: `Visit Kācima` with location and CTA `Write to Us`

## Meta Tags
- Before (`index.html:7-11`): `Layout Formation on Scroll | Codrops`, author `Codrops`
- After: Title `Kācima — Sanctuary on Kanakapura Road`, description aligned with hero subheadline, keywords from SEO notes

## Color Scheme
- **Before** (`css/base.css:7-18`): 
  - Single dark theme: Near-black backgrounds (`#111`) and white links.
  - High contrast but monochromatic.

- **After** (`docs/style-guide.md`):
  - **Multi-theme System:** Logo-aligned palette with 5 distinct section themes.
  - **Master Palette:** Olive Earth (`#5A5A32`), Clay Peach (`#D4B08C`), Soft Cream (`#F5F2EB`), Soil Brown (`#3A2F25`), Deep Emerald (`#1F3F36`), Sage (`#7B8D6A`).
  - **Semantic Tokens:** Abstracted usage (e.g., `--color-bg`, `--color-text`) allowing contextual overrides.
  - **Themes Implemented:**
    - `.theme-olive`: The grounding default (Header, Footer, Community).
    - `.theme-brown`: Deep, rich context for "Rawness" and "Unspoken" grids.
    - `.theme-emerald`: Cool, shadowed forest tones for "Vision".
    - `.theme-sage`: Soft, muted green for "Visit" and "Near Kanakapura Road".
    - `.theme-cream`: Light, airy contrast for "Practices" and "Explorations".

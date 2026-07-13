# Repository Index and Summary

## Overview
This repository is a single-page, scroll-driven web experience built with `GSAP` and `ScrollTrigger`. It showcases animated grid layouts and text sections, with assets in `img/`, core styles in `css/base.css`, and animation logic in `js/index.js`.

## Structure
- `index.html` — Page markup, meta tags, text sections, and image grids
- `css/base.css` — Global CSS variables, layout, and responsive rules
- `js/index.js` — GSAP timelines per section; initializes animations
- `js/utils.js` — Image preloader using `imagesLoaded`
- `js/gsap.min.js`, `js/ScrollTrigger.min.js` — Animation libraries
- `js/lenis.min.js`, `js/smoothscroll.js` — Optional smooth scroll helpers
- `js/imagesloaded.pkgd.min.js` — Background image preloader
- `img/*.webp` — Image assets used by the grids
- `kacima-overview.md` — Design, copy, and overview source content for rebranding
- `README.md`, `LICENSE`, `.gitattributes`, `.gitignore`

## Key Modules
- Header reveal and title drift in `js/index.js:4` via `animateFrame()`
- First grid entrance and title reveal in `js/index.js:30`
- Mid-grid rotational entrance and text stagger in `js/index.js:60`
- Third grid brightness cascade and copy entrance in `js/index.js:101`
- Fourth grid 3D perspective and transform in `js/index.js:188`
- Fourth v2 deeper perspective variant in `js/index.js:232`
- Fifth grid vertical stack and 3D slide in `js/index.js:275`
- Sixth grid scale/skew reveal in `js/index.js:307`
- Seventh grid vertical slide with inner parallax in `js/index.js:339`
- Eighth grid Y-rotation and depth reveal in `js/index.js:376`
- Ninth grid skew/rotation entrance in `js/index.js:414`
- Image preloading in `js/utils.js:7`

## Styling
- Brand color tokens defined in `:root` in `css/base.css:7`
- Layout primitives: `.frame`, `.content`, `.grid*` classes in `css/base.css:130`
- Typography scales: `.type-tiny`, `.content__title-main`, `.content__text` in `css/base.css:122`, `css/base.css:357`, `css/base.css:210`
- Responsive rules at `css/base.css:409`

## Observations
- Current copy and meta content reference a demo persona, not Kācima
- Color variables now updated to an olive/clay palette for rebranding
- Animations pin sections; ensure content updates preserve structure
- Accessibility: high-contrast text token `--color-text` on `--color-bg`

## Next Actions
- Replace `index.html` headings and paragraphs with Kācima copy
- Update meta tags for SEO and brand
- Ensure new copy lengths respect character limits defined in `docs/copy-rebrand.md`

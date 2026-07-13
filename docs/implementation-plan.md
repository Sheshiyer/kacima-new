# Implementation Plan

## Goals
- Replace demo copy with Kācima content
- Apply new palette and ensure accessibility
- Maintain responsiveness and performance of GSAP animations
- Improve SEO (titles, meta, headings hierarchy)

## Steps
- Update meta tags in `index.html` (`title`, `description`, `keywords`) per `docs/copy-rebrand.md`
- Replace section headings and paragraphs with the seven-section narrative
- Keep existing `.grid` structure; attach copy to matching sections for smooth pinning
- Verify link styling and focus states against new colors
- Test across breakpoints defined in `css/base.css:409`

## SEO
- Title: `Kācima — Sanctuary on Kanakapura Road`
- Description: Hero subheadline (≤ 160 chars)
- Headings: Use semantic `h1` for hero, `h2` for sections
- Keywords: `Kācima`, `sanctuary`, `sound healing`, `Kanakapura Road`, `earthing`, `residencies`

## Accessibility & Performance
- Contrast checks for text and links on `Olive Earth`
- Respect reduced-motion preferences; GSAP timelines should handle `prefers-reduced-motion`
- Lazy-load and preload images using `js/utils.js`

## Verification
- Open the page and manually validate animations and readability
- Lighthouse audit for SEO and accessibility
- Validate no console errors and smooth scroll behavior

## Rollout
- Stage changes in a feature branch; review
- Deploy to staging; collect feedback
- Publish to production and monitor

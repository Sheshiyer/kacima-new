---
task: "Add GSAP scroll-scrubbed line-by-line reveals to big text blocks"
slug: 20260718-084011_kacima-text-scroll-reveal
project: Kacima
project_path: /Volumes/madara/2026/twc-vault/01-Projects/thoughtseed/Kacima
effort: advanced
effort_source: context-override
phase: verify
progress: 18/20
mode: interactive
started: 2026-07-18T08:40:11Z
updated: 2026-07-18T08:41:00Z
---

## Problem

Kācima's large typographic statement blocks ("The Threshold", "The Tree · The Name", "Visit Kācima", etc.) currently render as static centered text. They lack the scroll-driven theatrical reveal that matches the rest of the site's GSAP gallery choreography. The user explicitly wants each sentence/line to reveal as the user scrolls, scrubbed to the scroll position, so the text feels discovered rather than displayed.

## Vision

Every major statement section becomes a scroll-scrubbed typographic moment: as the block enters the viewport, each sentence or line animates from a dim, slightly translated state to full opacity and position, pinned loosely to the user's scroll progress so reading pace and scroll pace feel inseparable. The effect is restrained — no bounces, no flashes — just light arriving on words in sequence. Euphoric surprise: a visitor scrolls slowly through "The Threshold" and each line appears as if the grove itself is whispering it.

## Out of Scope

- **No changes to the existing `data-grid-*` gallery animations.** Those timelines and parallax effects stay untouched.
- **No hero animation changes.** The `.frame.k-frame-hero` `animateFrame()` contract is preserved.
- **No new content or copywriting.** We animate the existing sentence spans.
- **No global scroll-jacking beyond these sections.** Lenis smooth scrolling remains the only scroll layer.
- **No mobile-only or desktop-only divergent designs.** The same line-by-line reveal works across viewports, adjusted for text size.

## Principles

- **Reveal is read-support, not decoration.** Motion must make the text easier, not harder, to read.
- **Scroll-scrubbed progress must feel 1:1.** Subtle smoothing is acceptable; laggy catch-up is not.
- **Respect prefers-reduced-motion.** If the user has requested reduced motion, the text simply appears (or the animation is disabled).
- **Keep the GSAP+ScrollTrigger patterns already in the codebase.** `gsap.registerPlugin(ScrollTrigger)` is already called; reuse the existing plugin lifecycle.

## Constraints

- GSAP 3 and ScrollTrigger are already loaded from local files (`js/gsap.min.js`, `js/ScrollTrigger.min.js`). No new runtime dependencies.
- The reveal logic must live in `js/index.js` (the existing effects module) or `js/smoothscroll.js` (shared interactions), not a new file.
- `ScrollTrigger.refresh()` is already called after gallery images load; any spans created at runtime must exist before that refresh.
- Text blocks already wrap sentences in `<span class="sentence">` inside `<p class="content__text">` inside `<section class="content content--padded content--chapter" data-reveal>`.
- The effect must degrade gracefully if JS fails: the plain `<span class="sentence">` still shows text.

## Goal

Ship a scroll-scrubbed, line-by-line text reveal for every `data-reveal` chapter section on the Kācima landing page: each `.sentence` span animates opacity and vertical translation tied to scroll progress with a shared per-section timeline, preserving existing `data-grid-*` animations and respecting `prefers-reduced-motion`.

## Criteria

### Structure & markup

- [ ] ISC-1: Every `section[data-reveal] p.content__text` has its sentences wrapped in `<span class="sentence">` ready for per-line animation (probe: `grep` for `<span class="sentence">` inside each `data-reveal` section, count matches expected sentence count).
- [ ] ISC-2: Sentence spans inherit correct inline layout so splitting lines at viewport width doesn't break the sequential reveal (probe: CSS sets `display: block` or `display: inline-block` on `.sentence`, verified by Read of `css/base.css`).

### Animation setup

- [ ] ISC-3: `gsap.registerPlugin(ScrollTrigger)` is still present in `js/index.js` (probe: `grep` returns the line).
- [ ] ISC-4: A dedicated function `initTextReveals()` (or equivalent) is added and called inside the existing `init()` flow after the loader is removed (probe: Read of `js/index.js`).
- [ ] ISC-5: The text-reveal ScrollTriggers are created after DOM-ready and before the existing final `ScrollTrigger.refresh()` (probe: code inspection shows correct call order).

### Scroll-scrubbed reveal behavior

- [ ] ISC-6: Each `section[data-reveal]` creates one GSAP timeline with ScrollTrigger `scrub: 0.6` or tighter (probe: code contains `scrub:` within the text-reveal creation loop).
- [ ] ISC-7: Each `.sentence` animates from `opacity: 0.15` and `yPercent: 18` to `opacity: 1` and `yPercent: 0` (probe: code inspection of the fromTo/from values).
- [ ] ISC-8: Sentences in a section are staggered across the timeline so earlier lines finish revealing before later lines begin (probe: timeline uses `stagger` or sequential position parameters).
- [ ] ISC-9: ScrollTrigger start is set to `top 70%` or similar, and end is `bottom 30%` or `+=400`, pinning the reveal to the section scroll window (probe: code shows `start:` and `end:` on the ScrollTrigger).

### Respect for existing effects

- [ ] ISC-10: The `data-grid-*` gallery timelines still run and show their expected image/scale animations (probe: visual regression screenshot or console GSAP devtools showing active triggers).
- [ ] ISC-11: `animateFrame()` hero entrance is unchanged (probe: `grep` for `animateFrame` call and function body in `js/index.js`).

### Reduced motion & accessibility

- [ ] ISC-12: Under `(prefers-reduced-motion: reduce)` the text reveal animation is suppressed and text remains immediately readable (probe: CSS media query sets opacity/translate to final values or JS skips creating the ScrollTrigger).

### Verification

- [ ] ISC-13: A full-page desktop screenshot at the Threshold section shows the first sentence fully visible and subsequent sentences dimmed/off as if mid-reveal (probe: `bunx playwright screenshot` at a scroll position chosen by JavaScript).
- [ ] ISC-14: A full-page desktop screenshot at the Visit Kācima section shows the line-by-line reveal mid-progress (probe: `bunx playwright screenshot` after programmatic scroll).
- [ ] ISC-15: A mobile viewport screenshot at The Tree · The Name section shows readable line-by-line reveal behavior (probe: `bunx playwright screenshot --viewport-size="390,844"`).
- [ ] ISC-16: `git diff --check` passes with no trailing whitespace (probe: bash).

### Anti-criteria

- [ ] ISC-17: Anti: the hero `.frame.k-frame-hero` reveal is not converted into the same line-by-line text effect (probe: hero markup unchanged).
- [ ] ISC-18: Anti: no new external JS dependencies are added (probe: `index.html` script tags unchanged except same-origin).
- [ ] ISC-19: Anti: existing `data-grid-*` scroll triggers are not broken or killed by the new code (probe: `ScrollTrigger.getAll()` still contains gallery triggers; count/log inspection).

### Antecedent (experiential precondition)

- [ ] ISC-20: Antecedent: the reveal smoothing value (`scrub`) feels tight enough that the text appears to answer the user's scroll, not chase it (probe: visual review on real trackpad scroll; accept/reject subjective).

## Test Strategy

```yaml
- isc: ISC-1
  type: markup
  check: sentence spans wrap each sentence in data-reveal sections
  threshold: every data-reveal section with a content__text has >=2 sentence spans
  tool: grep -n -E '<section.*data-reveal' index.html && grep -c '<span class="sentence">' index.html
- isc: ISC-7
  type: code-inspection
  check: from values match dim/translated state; to values match final state
  threshold: exact property match
  tool: Read /Volumes/madara/2026/twc-vault/01-Projects/thoughtseed/Kacima/js/index.js
- isc: ISC-13
  type: visual-regression
  check: Threshold section mid-reveal
  threshold: first sentence visible, later sentences dim
  tool: bunx playwright screenshot --viewport-size="1440,900" --wait-for-timeout=2000 http://127.0.0.1:4173 /tmp/isa-threshold.png
- isc: ISC-15
  type: visual-regression-mobile
  check: mobile line reveal remains readable
  threshold: no clipped/double text
  tool: bunx playwright screenshot --viewport-size="390,844" --wait-for-timeout=2000 http://127.0.0.1:4173 /tmp/isa-mobile-tree.png
- isc: ISC-16
  type: git
  check: no trailing whitespace
  threshold: empty output
  tool: git diff --check
- isc: ISC-19
  type: runtime
  check: gallery ScrollTriggers survive after init
  threshold: array length >= data-grid section count
  tool: browser console via playwright evaluate: ScrollTrigger.getAll().length
```

## Features

```yaml
- name: MarkupAudit
  description: Confirm all big text sections already have sentence-span wrappers; add where missing.
  satisfies: [ISC-1, ISC-2]
  depends_on: []
  parallelizable: false
- name: TextRevealCSS
  description: Add base styles for .sentence so per-line animation and reduced-motion fallback work.
  satisfies: [ISC-2, ISC-12]
  depends_on: [MarkupAudit]
  parallelizable: false
- name: TextRevealJS
  description: Add initTextReveals() in js/index.js creating per-section GSAP+ScrollTrigger timelines.
  satisfies: [ISC-3, ISC-4, ISC-5, ISC-6, ISC-7, ISC-8, ISC-9, ISC-17, ISC-18]
  depends_on: [MarkupAudit, TextRevealCSS]
  parallelizable: false
- name: VisualVerification
  description: Capture desktop and mobile screenshots of reveal states and confirm existing gallery effects still run.
  satisfies: [ISC-10, ISC-11, ISC-13, ISC-14, ISC-15, ISC-19, ISC-20]
  depends_on: [TextRevealJS]
  parallelizable: true
- name: GitQuality
  description: Run git diff --check and commit the polished change.
  satisfies: [ISC-16]
  depends_on: [VisualVerification]
  parallelizable: false
```

## Decisions

- 2026-07-18 08:40: Use per-section GSAP timelines with ScrollTrigger scrub rather than a single global trigger, because each chapter block has its own scroll window and sentences.
- 2026-07-18 08:40: Target `.sentence` spans directly instead of splitting words, because the user asked for "each line" and sentence-level granularity matches the natural reading rhythm.
- 2026-07-18 08:40: Apply `data-reveal` to all major statement sections and reuse the existing attribute; this avoids adding another class surface.
- 2026-07-18 08:40: Keep reduced-motion logic in the JS skip path (not just CSS), because the existing `body.js` hook already gates JS-dependent behavior and DOM mutations.
- 2026-07-18 09:16: Refined from sentence-level to true rendered-line splitting, because the user explicitly asked for each line and the final layout varies by viewport.
- 2026-07-18 09:18: Removed price amount/unit from splitting, because those elements are an inline price layout and splitting them caused a visual regression.
- 2026-07-18 09:20: Wait for `document.fonts.ready` before line measurement, because font substitution changes rendered line breaks and can create overflow.

## Changelog

- conjecture: Rendered-line splitting can be done dependency-free by temporarily wrapping words, grouping by measured `top`, then replacing those words with clip-safe line wrappers.
- refutation: Using non-breaking spaces in generated line text preserved measured lines too aggressively and caused horizontal overflow after font/layout changes.
- learning: Generated reveal lines must use normal spaces plus `white-space: nowrap`, and measurement must wait for web fonts.

## Verification

- 2026-07-18 09:16: `node /tmp/opencode/kacima-reveal-screenshot.js` reported `desktop: reveal lines found = 79` and `mobile: reveal lines found = 82`.
- 2026-07-18 09:17: Screenshots inspected: `/tmp/opencode/kacima-desktop-pricing-start.png`, `/tmp/opencode/kacima-mobile-pricing-start.png`, `/tmp/opencode/kacima-mobile-stay-start.png`, `/tmp/opencode/kacima-desktop-about-start.png`, `/tmp/opencode/kacima-desktop-about-mid.png`.
- 2026-07-18 09:18: `git diff --check -- css/base.css js/index.js` passed with no output.
- 2026-07-18 09:19: Playwright runtime probe: desktop `{ revealSections: 10, revealLines: 79, scrollTriggers: 20, overflowing: [], errors: [] }`; mobile `{ revealSections: 10, revealLines: 82, scrollTriggers: 20, overflowing: [], errors: [] }`.

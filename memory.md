# PROJECT MEMORY

## Overview
Redesign of the Kācima website to be immersive, mobile-first, and accessible. The design focuses on "Sanctuary", "Stillness", and "Connection" using a soft earth-tone palette, fluid typography, and GSAP-powered scroll animations.

## Completed Tasks
### 2025-12-01 Task Completed: Project Redesign & Refactoring
- **Outcome**: Complete visual overhaul with mobile-first grid system, fluid typography, and accessible colors.
- **Breakthrough**: Used `clamp()` for fluid typography and a CSS variable-based grid system to handle complex layouts across devices.
- **Errors Fixed**: 
  - Fixed `TypeError: Cannot read properties of null (reading 'querySelectorAll')` in `animateEighthGrid` and proactively in other grid animations by adding guard clauses.
  - Fixed hardcoded `px` values in `base.css` (replaced with `rem`, `vw`, and `var(--grid-gap)`).
- **Code Changes**:
  - `index.html`: Semantic heading hierarchy (h1-h3), new sections with data-attributes.
  - `css/base.css`: Mobile-first styles, CSS variables for colors/spacing, removal of hardcoded px widths.
  - `js/index.js`: Added guard clauses to all `animate*Grid` functions to prevent null reference errors if elements are missing.
- **Next Dependencies**: None. Project is in a stable, refactored state.

### 2025-12-01 Task Completed: Grid System Calibration & Full-Width Scaling
- **Outcome**: Adjusted the grid system to ensure specific grid variants (8-column and 5-column layouts) scale to fill the full viewport width on desktop, rather than being compressed into the generic 12-column structure.
- **Breakthrough**: Identified that the generic `repeat(12, 1fr)` desktop rule was overriding specific grid structures. Implemented targeted overrides for `[data-grid-first]` (8 cols) and `.grid--columns` (5 cols) to ensure they utilize 100% of the available width while preserving their relative layouts.
- **Errors Fixed**: 
  - Fixed "cards are smaller to the size area available" issue by correcting grid column counts on desktop.
  - Removed remaining hardcoded `px` values (loader dimensions, margins) and replaced them with `rem`.
- **Code Changes**:
  - `css/base.css`: Added specific grid template column rules in the 1024px media query; refactored loader and `grid--zoomed` values.

### 2025-12-01 Task Completed: Documentation Overhaul (README.md)
- **Outcome**: Completely rewrote `README.md` to remove outdated "Codrops" branding and reflect the new "Kācima" project identity.
- **Breakthrough**: Restructured documentation to be user-centric, adding a navigation bar and focusing on project-specific features like accessibility and mobile-first design.
- **Errors Fixed**: 
  - Removed broken/irrelevant links to old demos and articles.
  - Fixed branding inconsistencies.
- **Code Changes**:
  - `README.md`: Updated title, description, navigation, features, and credits.

### 2025-12-01 Task Completed: Contact Form Integration
- **Outcome**: Added a classy, traditional contact form connected to Formspree for enquiries.
- **Breakthrough**: Styled form inputs with a minimalist bottom-border-only design to match the "Sanctuary" aesthetic, avoiding blocky default inputs.
- **Errors Fixed**: N/A (New Feature).
- **Code Changes**:
  - `index.html`: Added `<form>` with Formspree action in the "Visit & Connect" section.
  - `css/form.css`: Created new stylesheet for form-specific styles (minimalist inputs, transparent backgrounds, focus states).
  - `css/base.css`: (Referenced new css file in html).

## Key Breakthroughs
- **Mobile-First Grid**: Defined a base 4-column grid for mobile that expands to 8 (tablet) and 12 (desktop) columns using media queries and CSS variables.
- **Defensive Animation Loading**: Wrapping all GSAP animation initializations in functions with guard clauses allows the page to render gracefully even if specific DOM elements are temporarily missing or commented out.
- **Context-Aware Grid Scaling**: Recognizing that not all grids should scale to 12 columns on desktop. Some content is designed for 5 or 8 columns and should simply expand those columns to fill the screen rather than adding empty columns.
- **Modular CSS**: Separated form styles into `css/form.css` to keep `base.css` focused on layout and typography.

## Error Patterns & Solutions
- **GSAP Null Targets**: `querySelector` returning null caused JS execution to stop. 
  - *Solution*: Added `if (!element) return;` guard clauses to all animation functions.
- **Hardcoded Units**: `px` values caused layout rigidity on different screen sizes.
  - *Solution*: Systematically replaced with `rem` for text/spacing, `vw` for fluid widths, and `%` for grid columns.
- **Grid Inheritance Issues**: Specific grid classes inheriting generic grid definitions (e.g., 12 cols) on larger breakpoints, breaking the layout.
  - *Solution*: Explicitly re-declare or override grid templates for specific variants (e.g., `.grid--columns`) inside the desktop media query.

## Architecture Decisions
- **CSS Variables**: Used for all colors, spacing, and font sizes to enable easy theming (e.g., `.theme-olive`, `.theme-sage`).
- **ScrollTrigger**: Used for all scroll-based interactions, with `scrub: true` for smooth playback tied to scroll position.
- **Formspree Integration**: Chosen for serverless form handling to maintain the static nature of the site while enabling dynamic functionality.

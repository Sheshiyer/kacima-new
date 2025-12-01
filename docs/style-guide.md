# Visual Design & Layout System

This document defines the updated visual design system for the Kācima website, incorporating comprehensive updates for typography, layout, and mobile responsiveness.

## 1. Typography System

### Hierarchy & Sizing
| Element | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing |
|---------|-------------|-------------|--------|-------------|----------------|
| **H1** (Hero/Title) | `clamp(3rem, 8vw, 6rem)` | `2.5rem` | 500 | 1.1 | -0.02em |
| **H2** (Section) | `clamp(2rem, 5vw, 4rem)` | `1.75rem` | 500 | 1.2 | -0.01em |
| **H3** (Subsection) | `1.5rem` | `1.25rem` | 500 | 1.3 | 0 |
| **Body (Base)** | `1.125rem` (18px) | `1rem` (16px) | 400 | 1.5 | 0 |
| **Caption/Tags** | `0.875rem` (14px) | `0.875rem` (14px) | 400 | 1.4 | 0.05em |

### Rules
- **Body Text**: Minimum `16px` on all devices.
- **Line Length**: Max 60-75 characters for readability (approx `625px`).
- **Font Family**: `area-variable`, sans-serif.

## 2. Logo Treatment
- **Scale**: Increased by 300% (3x) relative to original 300px base.
- **Desktop Max Width**: `900px` (or responsive equivalent).
- **Mobile Max Width**: `80vw` (ensure it doesn't overflow).
- **Positioning**: Centered in the viewport fold, acting as the primary visual anchor.

## 3. Layout & Spacing

### Grid System
- **Desktop**: 12-column grid, `2rem` gap.
- **Tablet**: 8-column grid, `1.5rem` gap.
- **Mobile**: 4-column grid, `1rem` gap.

### Spacing Scale (CSS Variables)
- `--space-xs`: `0.5rem` (8px)
- `--space-sm`: `1rem` (16px)
- `--space-md`: `2rem` (32px)
- `--space-lg`: `4rem` (64px)
- `--space-xl`: `8rem` (128px)
- `--page-padding`: `max(2rem, 5vw)` (Desktop) / `1rem` (Mobile)

## 4. Mobile Responsiveness
**Breakpoints**:
- `320px`: Small Mobile (Base)
- `480px`: Mobile Large
- `768px`: Tablet
- `1024px`: Desktop

**Mobile First Rules**:
- Stack grids vertically by default.
- Touch targets: Min `48px` height/width for interactive elements.
- Font size: Min `16px`.

## 5. Implementation Checklist
- [ ] Update `base.css` with new root variables.
- [ ] Implement fluid typography using `clamp()`.
- [ ] Update `.frame__title img` size.
- [ ] Add media queries for 320, 480, 768, 1024.
- [ ] Ensure `type-tiny` is at least 12-14px.

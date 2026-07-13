# Kācima Color Palette

## Overview
This palette draws from earth, stone, and vegetation, aligning with Kācima’s identity as a sanctuary. The colors are chosen to evoke grounding, stillness, and natural rhythm.

## Master Palette

### Primary Tones
| Name | HEX | Usage | Contrast vs Text |
| :--- | :--- | :--- | :--- |
| **Olive Earth** | `#5A5A32` | Primary Background | AA Large, AA Normal |
| **Soft Cream** | `#F5F2EB` | Primary Text | N/A (Background) |
| **Clay Peach** | `#D4B08C` | Links / Accents | Check vs Backgrounds |

### Secondary Tones
| Name | HEX | Usage |
| :--- | :--- | :--- |
| **Soil Brown** | `#3A2F25` | Section Background / Frames |
| **Deep Emerald** | `#1F3F36` | Section Background / Footers |
| **Charcoal** | `#111213` | High Contrast Elements |

### Accents & Supports
| Name | HEX | Usage |
| :--- | :--- | :--- |
| **Gold Accent** | `#B28B5A` | Hover States / Icons |
| **Sage** | `#7B8D6A` | Subtler Backgrounds |
| **Muted Teal** | `#2B6B6F` | Secondary Accents |
| **Terracotta** | `#935F43` | Call to Action / Highlights |
| **Antique Gold** | `#C0A47A` | Borders / Dividers |
| **Walnut** | `#4A3A2A` | Dark Borders |

## Color Combinations & Accessibility

### 1. The Grove (Default)
- **Background**: Olive Earth `#5A5A32`
- **Text**: Soft Cream `#F5F2EB`
- **Link**: Clay Peach `#D4B08C`
- **Status**: **Passes AA** for regular text.

### 2. The Earth (Depth)
- **Background**: Soil Brown `#3A2F25`
- **Text**: Soft Cream `#F5F2EB`
- **Link**: Gold Accent `#B28B5A`
- **Status**: **Passes AAA** for text.

### 3. The Water (Calm)
- **Background**: Deep Emerald `#1F3F36`
- **Text**: Soft Cream `#F5F2EB`
- **Link**: Sage `#7B8D6A` (Ensure contrast) or Clay Peach.
- **Status**: **Passes AAA** for text.

### 4. The Stone (Light/Alternative)
- **Background**: Sage `#7B8D6A`
- **Text**: Charcoal `#111213`
- **Link**: Deep Emerald `#1F3F36`
- **Status**: **Passes AA** for text.

## Implementation Guidelines
- **Global**: Use CSS variables in `:root` derived from the Master Palette.
- **Typography**: All body text uses `Soft Cream` on dark backgrounds. Headings may use `Clay Peach` or `Gold Accent` for hierarchy.
- **Interactivity**: Links transition from `Clay Peach` to `Gold Accent` or `Soft Cream` on hover.
- **Sections**: Alternating backgrounds (`Olive Earth` → `Soil Brown` → `Deep Emerald`) create narrative depth while scrolling.

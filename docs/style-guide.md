# Kācima Style Guide (Rebrand)

## Color Palette
- Olive Earth — `#5A5F2E`
- Clay Peach — `#D9A88C`
- Soft Cream — `#F5F3EE`
- Deep Soil Brown — `#3A2D23`

## CSS Tokens
```
:root {
  --color-text: #F5F3EE;        /* Soft Cream */
  --color-bg: #5A5F2E;          /* Olive Earth */
  --color-link: #D9A88C;        /* Clay Peach */
  --color-link-hover: #E6B7A0;  /* Lightened Clay Peach */
  --color-bg-content: #5A5F2E;  /* Olive Earth */
  --color-bg-frame: #6A6A3A;    /* Muted Olive */
  --color-border: #3A2D23;      /* Soil Brown */
}
```

## Usage
- Backgrounds: `--color-bg`, `--color-bg-content`
- Frames and dividers: `--color-bg-frame`, `--color-border`
- Text: `--color-text` for body; use `--color-border` for subtle headings where contrast allows
- Links and accents: `--color-link` / `--color-link-hover`

## Accessibility
- Body text on `Olive Earth` meets WCAG AA with `Soft Cream`
- Link color tested for sufficient contrast on dark olive backgrounds
- Motion remains subtle; animations avoid rapid flashing and respect reduced motion

## Typography
- Headlines: Serif display with Art Deco influence
- Body: Humanist sans-serif; maintain generous letter spacing and balanced line height

## Motifs & Ornaments
- Art Deco line frames, Art Nouveau curves, grain textures
- Use SVG for crisp ornamental lines and separators

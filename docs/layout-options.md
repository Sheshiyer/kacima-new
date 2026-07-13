# Header Layout Alternatives

## Option 1: The Centered Stack (Implemented)
**Concept:** A symmetrical, pillar-like structure that anchors the brand in the center of the view, establishing a strong visual hierarchy before the content flow begins.

### Wireframe
```
+---------------------------------------+
|                                       |
|             [  LOGO  ]                |
|                                       |
|    [ Subline: A Pause Between... ]    |
|                                       |
|       [ Link 1 ] [ Link 2 ]           |
|                                       |
|             [ #Tags ]                 |
|                                       |
+---------------------------------------+
```

### CSS Implementation
```css
.frame {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    justify-items: center;
    text-align: center;
    grid-template-areas: 
        'title'
        'subline'
        'tags';
}
```

### Responsive Behavior
- **Mobile:** Stacks vertically, logo scales down but remains dominant.
- **Desktop:** Maintains the stack but adds breathing room (padding/gap). content flows naturally below.

### Pros & Cons
- **Pros:** Strong branding, clear hierarchy, balanced negative space.
- **Cons:** Pushes "above the fold" content down; can feel static if not animated.

---

## Option 2: The Classic Split
**Concept:** A traditional header layout that maximizes vertical space for content by placing branding and navigation on the same horizontal axis.

### Wireframe
```
+---------------------------------------+
| [ LOGO ]          [ Subline / Links ] |
|                                       |
|                                       |
|              (Content)                |
|                                       |
+---------------------------------------+
```

### CSS Implementation
```css
.frame {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem;
}
.frame__title { flex: 0 0 auto; }
.frame__subline { text-align: right; }
```

### Responsive Behavior
- **Mobile:** Often collapses into a stack (Logo top, Links bottom) or hides links behind a menu.
- **Desktop:** Spreads wide, framing the top edge of the screen.

### Pros & Cons
- **Pros:** Efficient, familiar to users, leaves maximum space for hero content.
- **Cons:** Can feel generic; less "editorial" than the centered stack.

---

## Option 3: The Perimeter Frame (Four Corners)
**Concept:** Anchors elements to the corners of the viewport, creating a "frame" through which the content is viewed. This was close to the original design.

### Wireframe
```
+---------------------------------------+
| [ LOGO ]                      [Links] |
|                                       |
|              (Content)                |
|                                       |
| [#Tags]                     [Subline] |
+---------------------------------------+
```

### CSS Implementation
```css
.frame {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        'logo links'
        '... ...'
        'tags subline';
}
```

### Responsive Behavior
- **Mobile:** Usually simplifies to top/bottom bars or a single column stack to avoid cluttering the small view.
- **Desktop:** Creates a sophisticated, magazine-like feel.

### Pros & Cons
- **Pros:** distinctive, high-end editorial look, keeps center clear.
- **Cons:** Eyes must scan separate corners; complexity in implementation across aspect ratios.

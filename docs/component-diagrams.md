# Component Interaction Diagrams

## Initialization Flow
```mermaid
sequenceDiagram
  participant HTML as index.html
  participant Utils as js/utils.js
  participant Main as js/index.js
  participant GSAP as GSAP/ScrollTrigger
  participant Lenis as js/smoothscroll.js

  HTML->>Utils: preloadImages('.grid__img')
  Utils-->>HTML: images loaded
  HTML->>Main: init()
  Main->>GSAP: register timelines per section
  Lenis->>GSAP: ticker sync & ScrollTrigger.update
  GSAP->>HTML: pin sections, scrub animations
```

## Runtime Interaction
```mermaid
flowchart LR
  A[Scroll Input\n(native or Lenis)] --> B[ScrollTrigger]
  B --> C[GSAP Timelines]
  C --> D[DOM Updates\n(.grid__img, .grid__item)]
  D --> E[Visual Output]
```

## Module Relationships
```mermaid
graph TD
  subgraph JS
    index[js/index.js] --> utils[js/utils.js]
    smooth[js/smoothscroll.js] -->|updates| scrollTrigger[ScrollTrigger]
  end

  gsap[js/gsap.min.js] --> index
  scrollTrigger[js/ScrollTrigger.min.js] --> index
  lenis[js/lenis.min.js] --> smooth
  imagesLoaded[js/imagesloaded.pkgd.min.js] --> utils

  index --> html[index.html]
  css[css/base.css] --> html
```


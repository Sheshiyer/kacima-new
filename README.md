[Overview](#overview) | [Installation](#installation) | [Features](#features) | [Credits](#credits) | [License](#license)

# Kācima

A digital sanctuary exploring stillness, connection, and immersive scroll-based storytelling. This project features a mobile-first design with fluid typography and GSAP-powered scroll animations to create a serene user experience.

## Overview

Kācima is designed to be an immersive web experience that prioritizes:

- **Sanctuary & Stillness**: A soft, earth-tone palette and noise textures to create a calming atmosphere.
- **Mobile-First Architecture**: A robust grid system that scales from 4 columns on mobile to 12 columns on desktop.
- **Accessibility**: WCAG 2.1 AA compliance with fluid typography (`clamp()`), proper heading hierarchy, and clear focus states.
- **Performance**: Optimized animations using GSAP ScrollTrigger with defensive loading strategies.

## Installation

To run this project locally:

1.  Clone the repository.
2.  Open the project directory.
3.  Run the project on a [local server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) (e.g., using VS Code Live Server, Python `http.server`, or Node.js `http-server`).

```bash
# Python example
python3 -m http.server
```

## Features

- **Responsive Grid System**: Custom CSS Grid implementation that adapts to viewport width.
- **Smooth Scrolling**: Integrated Lenis for smooth scroll behavior.
- **Scroll-Triggered Animations**: Dynamic layout formations driven by scroll position.
- **Fluid Typography**: Text scales organically with the viewport.

## Credits

- **Images**: Generated with [Midjourney](https://midjourney.com).
- **Animations**: Powered by [GSAP](https://greensock.com/gsap/).
- **Smooth Scroll**: [Lenis](https://github.com/studio-freight/lenis).

## License

[MIT](LICENSE)

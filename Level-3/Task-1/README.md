# Level 3 - Task 1: Image Manipulation

## Project Overview

This project satisfies all requirements for **Level 3 - Task 1** of the Cognifyz Technologies Web Development Internship:

1. **Interactive Image Gallery (Click-to-Enlarge)**:
   - A modern responsive grid of thumbnail images with hover zoom and badge overlays.
   - Clicking any thumbnail dynamically enlarges the image into a high-resolution lightbox modal spotlight with captions, image counter, category tags, and zoom effects.
2. **Automated Image Slideshow**:
   - An automated image carousel transitioning smoothly between frames using CSS animations.
   - Features a real-time progress bar indicator, status pill, **pause-on-hover** interaction, manual navigation arrows, and pagination dots.

---

## Technical Stack & Standards

- **Semantic HTML5**: `<section>`, `<article>`, `<figure>`, `<header>`, `<footer>`, and accessible dialog attributes (`role="dialog"`, `aria-modal="true"`, `aria-haspopup`).
- **CSS3 (Pure Vanilla)**: CSS custom properties (variables), `@keyframes` animations, `animation-play-state: paused` on `:hover`, CSS Grid, Flexbox, and backdrop filters (`backdrop-filter: blur(12px)`).
- **Lightweight JavaScript**: Slideshow interval controller, lightbox modal manager, keyboard listeners (`ArrowLeft`, `ArrowRight`, `Escape`), and category filtering.
- **Font Awesome 6 & Google Fonts (Plus Jakarta Sans)**: Modern iconography and typography.

---

## File Structure

```text
Level-3/
└── Task-1/
    ├── index.html     # Interactive gallery & automated slideshow markup
    ├── styles.css      # CSS keyframe animations, modal transitions & grid styles
    ├── script.js       # Slideshow timer, hover pause & lightbox controller
    └── README.md       # Technical documentation & usage instructions
```

---

## Key Features & Implementations

### 1. Automated CSS Slideshow (`#slideshow-section`)
- **Automated Cycles**: Automatically advances to the next slide every 5 seconds.
- **CSS Progress Timer Bar**: A visual bar animates from `width: 0%` to `width: 100%` indicating remaining time before the next slide.
- **Hover to Pause**: Hovering anywhere over the slideshow viewport freezes both the slide transition and the timer bar (`animation-play-state: paused`).
- **Manual Controls**: Chevron arrow buttons and pagination dots allow instant manual jumping between slides, resetting the auto-play timer seamlessly.

### 2. Click-to-Enlarge Gallery (`#gallery-section`)
- **Responsive Thumbnail Grid**: Multi-column fluid grid adapting across mobile, tablet, and desktop viewports.
- **Hover Micro-Interactions**: Hovering over thumbnails triggers an image scale (`transform: scale(1.08)`) and fades in an overlay with an expand icon and *"Click to Enlarge"* badge.
- **Lightbox Modal Spotlight**:
  - Displays high-resolution image with smooth scale-in animation (`transform: scale(0.92)` to `1`).
  - Darkened backdrop with blur (`rgba(15, 23, 42, 0.88)` and `backdrop-filter: blur(12px)`).
  - Highlighting metadata: Category pill, image title, detailed description caption, and counter indicator (`e.g., 3 / 8`).
  - Smooth spinner loader displayed during high-res image fetching.
- **Accessibility & Keyboard Navigation**:
  - `Escape` key closes the enlarged modal.
  - `←` Left Arrow navigates to the previous image.
  - `→` Right Arrow navigates to the next image.
  - Clicking the backdrop or `✕` close button dismisses the modal.

### 3. Dynamic Category Filtering
- Interactive filter buttons (`All`, `Nature & Peaks`, `Architecture & Urban`, `Abstract & Cosmos`) filter the gallery in real time.

---

## How to Run & Verify

1. Open `index.html` in any web browser.
2. **Verify Automated Slideshow**:
   - Watch the slides transition automatically every 5 seconds as the progress bar fills.
   - Hover your cursor over the slideshow to see the timer and playback freeze.
   - Click the left/right arrows or pagination dots to manually switch slides.
3. **Verify Click-to-Enlarge Gallery**:
   - Scroll down to the gallery section and click on any thumbnail image.
   - Observe the smooth lightbox modal enlargement.
   - Use the arrow keys (`←` / `→`) to browse through images in enlarged view, or press `Escape` / click the close button `✕` to dismiss.

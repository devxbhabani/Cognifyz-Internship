# Level 2 - Task 2: Responsive Design & Mobile Navigation Menu

## Project Overview

This task fulfills all requirements specified for **Level 2 - Task 2** of the Cognifyz Technologies Web Development Internship:

1. **Responsive Design**: Converting a basic webpage into a fully responsive design that smoothly adapts to different screen sizes using tailored **CSS media queries**.
2. **Mobile Navigation (Hamburger Menu)**: Creating a mobile-friendly navigation menu that collapses into an animated hamburger menu on smaller screens (`< 768px`) built with modern HTML and CSS.

---

## Technical Stack & Standards

- **HTML5**: Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`) with ARIA accessibility roles (`aria-expanded`, `aria-controls`, `aria-label`).
- **CSS3 (Pure Vanilla)**: Custom properties (CSS variables), CSS Flexbox, CSS Grid (`minmax`, auto-fit), fluid typography (`clamp()`), and media queries.
- **Micro-Animations & Transforms**: 3-bar hamburger icon smoothly morphing into an 'X' using CSS `transform` and `transition`.
- **Vanilla JavaScript**: Lightweight controller for drawer toggle, keyboard navigation (`Escape` key), window resize auto-closing, and real-time viewport dimension tracking.
- **Font Awesome 6 & Google Fonts (Plus Jakarta Sans)**: Modern typography and clean UI icons.

---

## File Structure

```text
Level-2/
└── Task-2/
    ├── index.html     # Responsive webpage with hamburger navigation drawer
    ├── styles.css      # Vanilla CSS design system & media queries
    ├── script.js       # Hamburger toggle, accessibility & viewport tracker
    └── README.md       # Task documentation & technical breakdown
```

---

## Responsive Breakpoints & Media Queries

| Breakpoint Tier | Target Screen Range | Media Query | Key Layout & Navigation Adjustments |
| :--- | :---: | :--- | :--- |
| **Mobile XS** | `< 480px` | `@media (max-width: 479px)` | Ultra-compact typography, single-column elements, simplified headers. |
| **Mobile** | `< 768px` | `@media (max-width: 767px)` | **Desktop navigation links hide**, **Hamburger button activates**, cards & forms stack into single columns. |
| **Tablet** | `768px – 991px` | `@media (min-width: 768px) and (max-width: 991px)` | 2-Column responsive grids, centered hero banner, adjusted font scale. |
| **Desktop** | `992px – 1199px` | `@media (min-width: 992px) and (max-width: 1199px)` | Full horizontal navigation bar, 3-column feature grids, asymmetric split cards. |
| **Ultra-Wide** | `≥ 1200px` | `@media (min-width: 1200px)` | 1240px centered container, 4-column cards, full layout breathing room. |

---

## Hamburger Menu Mechanics

### 1. HTML Structure
The hamburger toggle button contains 3 `<span>` bars inside the navigation bar:
```html
<button class="hamburger-btn" id="hamburgerBtn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobileNavDrawer">
    <span class="hamburger-bar bar-1"></span>
    <span class="hamburger-bar bar-2"></span>
    <span class="hamburger-bar bar-3"></span>
</button>
```

### 2. CSS Morphing Transformation
When `.is-active` is applied to the button, CSS transforms turn the 3 bars into an "X":
```css
/* Bar 1 rotates 45 degrees downward */
.hamburger-btn.is-active .bar-1 {
    transform: translateY(7px) rotate(45deg);
}

/* Bar 2 fades out */
.hamburger-btn.is-active .bar-2 {
    opacity: 0;
    transform: scale(0);
}

/* Bar 3 rotates -45 degrees upward */
.hamburger-btn.is-active .bar-3 {
    transform: translateY(-7px) rotate(-45deg);
}
```

### 3. Drawer Overlay & Sliding Animation
- On viewports `< 768px`, the mobile drawer is positioned offscreen using `transform: translateX(100%)`.
- When opened, `transform: translateX(0)` slides the drawer into view, and `mobile-drawer-overlay` fades in with backdrop blur (`backdrop-filter: blur(4px)`).
- Background body scrolling is locked via `.menu-open { overflow: hidden; }`.

---

## How to Run & Verify

1. Open `index.html` directly in any web browser (Google Chrome, Microsoft Edge, Firefox, etc.).
2. **Test Responsive Media Queries**:
   - Resize your browser window or press `F12` and click the **Device Toggle** button in DevTools.
   - Observe the real-time **Screen Viewport Indicator** in the bottom-right corner updating active resolution and breakpoint category (`Mobile`, `Tablet`, `Desktop`, `Ultra-Wide`).
3. **Test Hamburger Menu**:
   - Reduce the browser width to `< 768px`.
   - Click the hamburger button to trigger the smooth sliding drawer.
   - Test closing via:
     - The "X" close button
     - Clicking anywhere on the darkened backdrop overlay
     - Clicking any link in the menu
     - Pressing the `Escape` key on your keyboard

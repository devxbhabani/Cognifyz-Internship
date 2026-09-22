# Level 2 - Task 1: Front-end Frameworks

## 📌 Project Overview
This task demonstrates the effective implementation and comparison of modern front-end CSS frameworks, meeting both specified criteria:
1. **Bulma Framework**: Creation of responsive card components with images and text (`bulma.html`).
2. **Bootstrap Framework**: Implementation of a responsive grid layout across varied device breakpoints (`index.html`).

---

## 🛠️ Frameworks & Technologies Used
- **Bootstrap 5.3.3**: Used for responsive 12-column grid architecture (`container`, `row`, `col-*`), breakpoints (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`), and interactive navbar components.
- **Bulma 1.0.2**: Used for semantic, flexbox-driven card components (`card`, `card-image`, `card-content`, `media`, `content`, `tags`, and `card-footer`).
- **Bootstrap Icons & Font Awesome 6**: Used for UI icons and visual cues.
- **Custom CSS (`styles.css`)**: Micro-animations, subtle card hover elevations, typography, and theme styling.

---

## 📂 File Structure
```
Level-2/
└── Task-1/
    ├── index.html     # Bootstrap 5 Responsive Grid Layout Showcase
    ├── bulma.html      # Bulma Responsive Card Component Showcase
    ├── styles.css      # Custom styling & micro-interactions
    └── README.md       # Documentation & technical details
```

---

## 📱 Responsive Grid Breakdown

### 1. Bootstrap Grid Layout (`index.html`)
- **Mobile (< 576px)**: `col-12` (1 column stacked layout)
- **Tablet (≥ 576px)**: `col-sm-6` (2 columns grid layout)
- **Desktop (≥ 992px)**: `col-lg-4` (3 columns grid layout)
- **Wide Screens (≥ 1200px)**: `col-xl-3` (4 columns grid layout)
- **Asymmetric Grid Spans**: Includes an 8-column featured card (`col-lg-8`) paired with a 4-column callout card (`col-lg-4`).
- **Live Breakpoint Indicator**: Includes a dynamic indicator badge in the navigation bar identifying the active breakpoint in real-time.

### 2. Bulma Card Component (`bulma.html`)
- **Card Structure**:
  - `card-image`: Responsive 4:3 image wrapper (`image is-4by3`).
  - `media`: Author profile picture, name, and handle (`media-left`, `media-content`).
  - `content`: Title, description, tags (`tag is-primary is-light`), and publish date.
  - `card-footer`: Interactive footer items (`card-footer-item` for View, Save, and Like counts).
- **Columns Structure**: Uses Bulma's `columns is-multiline` with responsive modifiers:
  - Mobile: `is-12-mobile`
  - Tablet: `is-6-tablet`
  - Desktop: `is-4-desktop`

---

## 🚀 How to Run & View
1. Simply double-click or open `index.html` in any web browser (Chrome, Edge, Firefox, etc.).
2. Use the navigation links or buttons to toggle between the **Bootstrap Grid Layout** and the **Bulma Cards Showcase**.
3. Resize the browser window or use DevTools (F12) Device Mode to verify responsive behavior at mobile, tablet, and desktop viewports.

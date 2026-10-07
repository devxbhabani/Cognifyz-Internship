# Cognifyz Technologies - Web Development Internship

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Bulma](https://img.shields.io/badge/Bulma-00D1B2?style=for-the-badge&logo=bulma&logoColor=white)](https://bulma.io/)
[![Status](https://img.shields.io/badge/Status-Active_Internship-success?style=for-the-badge)](#)

Welcome to the central repository for the **Web Development Internship** at **Cognifyz Technologies**. This repository houses all project milestones, task implementations, responsive web designs, and interactive exercises completed across multiple levels of the internship program.

---

## Repository Overview

This repository is structured into distinct progressive levels designed to master modern front-end web engineering, UI/UX principles, and responsive web frameworks:

| Level       | Focus Area                               |     Status     | Key Highlights                                                                         |
| :---------- | :--------------------------------------- | :------------: | :------------------------------------------------------------------------------------- |
| **Level 1** | **Web Fundamentals**                       | ✅ Completed | Semantic HTML5, CSS layout & styling, DOM manipulation, JS events & calculations         |
| **Level 2** | **Front-End Frameworks & Responsive UI**   | ✅ Completed | Bootstrap 5 grid, Bulma cards, CSS media queries & mobile-friendly hamburger menu         |
| **Level 3** | **Image Manipulation & Advanced Features** | 🔄 In Progress | CSS click-to-enlarge gallery modal, automated CSS keyframe slideshow                      |

---

## Project Directory Structure

```text
Cognifyz-Internship/
├── Level-1/
│   ├── Task-1/                           # Basic Webpage & Form Layout
│   │   ├── index.html                    # Semantic HTML landing page & subscription form
│   │   └── styles.css                    # Custom CSS typography, flexbox navigation & hero layout
│   └── Task-2/                           # Interactive JavaScript Lab
│       ├── index.html                    # Multi-card interactive exercises UI
│       ├── script.js                     # DOM event listeners, time logic, & arithmetic calculator
│       └── styles.css                    # Card grid layout & modern action button styling
│
├── Level-2/
│   ├── Task-1/                           # Front-End CSS Frameworks
│   │   ├── index.html                    # Bootstrap 5 12-column responsive grid showcase
│   │   ├── bulma.html                    # Bulma CSS responsive card component showcase
│   │   ├── styles.css                    # Micro-interactions, hover effects & theme enhancements
│   └── Task-2/                           # Responsive Web Design & Mobile Menu
│       ├── index.html                    # Responsive webpage with collapsible hamburger menu
│       ├── styles.css                    # CSS Media queries (Mobile, Tablet, Desktop, Wide)
│       ├── script.js                     # Hamburger drawer controller & live viewport tracker
│       └── README.md                     # Detailed Task-2 media queries documentation
│
├── Level-3/
│   ├── Task-1/                           # Image Manipulation & Slideshow
│   │   ├── index.html                    # Click-to-enlarge gallery & automated CSS slideshow
│   │   ├── styles.css                    # Keyframe animations, lightbox modal & grid layout
│   │   ├── script.js                     # Slideshow timer controller & lightbox modal manager
│   │   └── README.md                     # Detailed Task-1 image manipulation documentation
│   └── Task-2/                           # (Upcoming)
│
└── README.md                             # Repository Master Documentation
```

---

## Detailed Task Breakdown

### Level 1: Web Development Fundamentals

#### **Task 1: Basic Webpage & Subscription Form Layout**

- **Objective**: Construct a clean, accessible, semantic web layout featuring navigation, content hierarchy, and user input elements.
- **Key Features**:
   - **Header & Navigation**: Fixed container width with branded header (`Cognifyz`) and accessible navigation links.
   - **Hero Section**: Two-column responsive hero banner combining visual imagery with structured typography.
   - **Call to Action Form**: Email subscription form with styled input focus states and dynamic button hover interactions.
- **Technologies**: Semantic HTML5, Vanilla CSS3 (Flexbox, Box Model, Media Queries).

#### **Task 2: Interactive JavaScript Lab**

- **Objective**: Develop practical client-side interactivity using event handlers, conditional logic, and form processing.
- **Key Features**:
   1. **Color Switcher**: Interactive button dynamically toggles through an array of curated color palettes (`#f06b4f`, `#e6a23c`, `#4c9f70`, `#4f79c7`) upon user clicks.
   2. **Time-Based Greeting**: Uses JavaScript `Date().getHours()` to dynamically generate contextual greetings (_"Good morning!"_, _"Good afternoon!"_, or _"Good evening!"_) displayed via alert notifications.
   3. **Addition Calculator**: Client-side arithmetic utility that validates numeric input, suppresses standard page reload using `event.preventDefault()`, and computes results displayed dynamically in real time.
- **Technologies**: Vanilla JavaScript (ES6+), DOM Manipulation, Event Listeners, CSS Grid.

---

### Level 2: Front-End Frameworks & Responsive UI

#### **Task 1: Bootstrap 5 & Bulma Showcases**

- **Objective**: Master industry-standard front-end CSS frameworks to construct cross-device responsive layouts and modular UI components.
- **Implementations**:
   1. **Bootstrap 5 Responsive Grid (`index.html`)**:
      - **12-Column Responsive Grid Architecture**: Smooth breakpoint transitions across Mobile (`col-12`), Tablet (`col-sm-6`), Desktop (`col-lg-4`), and Wide Screens (`col-xl-3`).
      - **Asymmetric Grid Spans**: Demonstrates complex layout hierarchy with an 8-column featured card paired with a 4-column sidebar callout.
      - **Live Breakpoint Indicator**: Real-time visual badge in the navigation bar indicating the active viewport tier (`XS`, `SM`, `MD`, `LG`, `XL`, `XXL`).
      - **Component Integration**: Bootstrap navigation bars, badges, icon sets, button groups, and metric counters.
   2. **Bulma Responsive Card Components (`bulma.html`)**:
      - **Semantic Component Hierarchy**: Utilizes `card`, `card-image` with responsive 4:3 aspect ratio (`image is-4by3`), `media` blocks (author avatars, title, subtitles), and `content` tags.
      - **Interactive Card Footers**: Actionable links and metrics (`card-footer-item`) with hover feedback.
      - **Responsive Columns**: Bulma's `columns is-multiline` configured with `is-12-mobile`, `is-6-tablet`, and `is-4-desktop`.
- **Technologies**: Bootstrap 5.3.3, Bulma 1.0.2, Font Awesome 6, Bootstrap Icons, Custom CSS3.

#### **Task 2: Responsive Web Design & Mobile Hamburger Navigation Menu**

- **Objective**: Convert a basic webpage into a responsive layout that adapts across screen sizes using CSS media queries, and build a mobile-friendly collapsible hamburger navigation menu using HTML and CSS.
- **Implementations**:
   1. **CSS Media Queries Architecture**:
      - **Mobile XS (`< 480px`)**: Compact typography, optimized touch padding, and single-column flow.
      - **Mobile (`< 768px`)**: Hides horizontal desktop navigation bar, activates the animated hamburger toggle button, and stacks multi-column grids and form fields into 1-column layouts.
      - **Tablet (`768px – 991px`)**: 2-Column responsive grid displays, centered hero presentation, and adaptive typography scaling.
      - **Desktop (`992px – 1199px`)**: Full horizontal navigation links, 3-column features grid, and 50%/50% responsive split demo.
      - **Ultra-Wide (`≥ 1200px`)**: 1240px centered layout constraint with 4-column card spans.
   2. **Collapsible Mobile Hamburger Menu**:
      - 3-bar hamburger icon morphing into an 'X' using pure CSS transforms (`translateY`, `rotate(45deg)`, `rotate(-45deg)`).
      - Sliding drawer panel (`translateX(100%)` to `translateX(0)`) with backdrop blur overlay and body scroll prevention (`menu-open`).
      - Full accessibility support with `aria-expanded`, `aria-controls`, `Escape` key close, and auto-closing on viewport resize or link selection.
   3. **Live Viewport & Breakpoint Tracker**:
      - Real-time status widget displaying current window resolution and active media query tier.
- **Technologies**: Semantic HTML5, Vanilla CSS3 (Media Queries, Flexbox, CSS Grid), Vanilla JavaScript (ES6+), Font Awesome 6.

---

### Level 3: Advanced Web Concepts & Image Manipulation

#### **Task 1: Image Manipulation (Click-to-Enlarge Gallery & Automated Slideshow)**

- **Objective**: Use CSS to create an image gallery with thumbnail images that enlarge when clicked, and build an automated image slideshow that transitions between images using HTML and CSS.
- **Implementations**:
   1. **Automated Image Slideshow**:
      - Automated slide transitions every 5 seconds using CSS animations.
      - Real-time animated progress timer bar.
      - **Pause-on-hover interaction**: Freezes the slide transitions and progress bar when cursor hovers over the slideshow viewport.
      - Interactive manual controls (Left/Right chevrons & pagination dots).
   2. **Click-to-Enlarge Gallery & Lightbox Spotlight**:
      - Responsive 4-column thumbnail grid with fluid hover zoom effects (`scale(1.08)`) and expand overlays.
      - Modal lightbox spotlight displaying high-resolution images, category pills, titles, detailed captions, and counter indicators.
      - Full keyboard accessibility (`Escape` to close, `←` and `→` arrow keys to cycle images).
      - Category filter pills (`All`, `Nature & Peaks`, `Architecture & Urban`, `Abstract & Cosmos`).
- **Technologies**: Semantic HTML5, Vanilla CSS3 (Keyframes, Transitions, Flexbox, CSS Grid), Vanilla JavaScript (ES6+), Font Awesome 6.

#### **Task 2: (Upcoming)**

- *Upcoming Level 3 Task 2 module.*

---

## Technologies & Tools

| Category              | Tools / Technologies                                                                 |
| :-------------------- | :----------------------------------------------------------------------------------- |
| **Core Languages**    | HTML5, CSS3, JavaScript (ES6+)                                                       |
| **CSS Frameworks**    | Bootstrap 5.3.3, Bulma 1.0.2                                                         |
| **Icon Libraries**    | Bootstrap Icons, Font Awesome 6                                                      |
| **Design Principles** | Responsive Web Design (RWD), Mobile-First, Flexbox & CSS Grid, BEM / Semantic naming |
| **Version Control**   | Git & GitHub                                                                         |

---

## How to Run and View the Projects

No complex build steps or package installations are required! All tasks run natively in any modern web browser.

### Option 1: Direct File Preview

1. Clone or download this repository:
   ```bash
   git clone https://github.com/<your-username>/Cognifyz-Internship.git
   ```
2. Navigate into any task folder (for example, `Level-2/Task-1/`).
3. Double-click `index.html` or `bulma.html` to open it in your default browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Option 2: Using VS Code Live Server

1. Open the repository in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on any `index.html` file and select **"Open with Live Server"**.
4. The project will automatically launch at `http://127.0.0.1:5500` with hot reload enabled.

---

## Key Learning Outcomes

- [x] Structuring semantic, accessible, and clean HTML documents.
- [x] Crafting modern CSS layouts using Flexbox, CSS Grid, and custom CSS variables.
- [x] Handling DOM events, form inputs, dynamic styling, and asynchronous operations in JavaScript.
- [x] Utilizing Bootstrap's responsive 12-column grid and utility classes effectively.
- [x] Building reusable, modular UI components with Bulma's flexbox-first architecture.
- [x] Ensuring seamless multi-device responsiveness across smartphones, tablets, and desktops.

---

## 👨‍💻 Author & Acknowledgments

- **Intern**: Bhabani Sankar Jana
- **Program**: Web Development Internship
- **Organization**: [Cognifyz Technologies](https://cognifyz.com/)

---

<p align="center">Made with ❤️ during the Cognifyz Technologies Web Development Internship</p>

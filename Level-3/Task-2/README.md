# Level 3 - Task 2: Web Developer Internship Landing Page

## Project Overview

This capstone project implements all required components for **Level 3 - Task 2** of the Cognifyz Technologies Web Development Internship:

1. **Clear Headline**:
   `"Web Developer Internship Opportunities at Cognifyz Technologies"` prominently featured in the hero section with gradient typography.
2. **Brief Introduction**:
   A comprehensive overview detailing the **1-Month (4-Week)** virtual program structure, self-paced milestones, and practical front-end engineering focus.
3. **Internship Highlights & Benefits**:
   - Real-world software engineering experience
   - 1-on-1 dedicated mentorship and code reviews
   - Official, verifiable Certificate of Completion & Letter of Recommendation (LOR)
   - Industry-ready GitHub portfolio projects
   - Pre-placement interview opportunities
4. **Qualifications & Desired Skills**:
   - Technical competencies: HTML5 semantic structure, modern CSS3 (Flexbox/Grid), JavaScript (ES6+), CSS Frameworks (Bootstrap/Bulma), Git/GitHub.
   - Soft skills: Problem-solving curiosity, discipline in meeting deadlines, and design aesthetics.
5. **Call-to-Action (CTA) Buttons**:
   - Highly visible `"Apply Now"` and `"Learn More"` action triggers.
   - Interactive **Fast-Track Application Modal Form** with validation, duration selection, and confirmation views.
6. **Contact Information & Inquiries**:
   - Contact section and footer containing official email desks (`contact@cognifyz.com`, `careers@cognifyz.com`), office headquarters (Nagpur, Maharashtra, India), official website (`cognifyz.com`), office hours, and an instant inquiry form.

---

## Technical Stack & Standards

- **Semantic HTML5**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>` ARIA accessibility attributes (`aria-expanded`, `aria-modal`, `aria-hidden`).
- **Pure Vanilla CSS3**: Custom properties (CSS variables), Flexbox, CSS Grid, media query breakpoints, smooth transitions, glassmorphic headers, and hover lift micro-interactions.
- **Vanilla JavaScript (ES6+)**:
  - Application modal controller with form validation and confirmation screens.
  - Interactive FAQ accordion with smooth open/collapse transitions.
  - Responsive mobile dropdown navigation.
  - Sticky header elevation and active navigation link highlight on scroll.
- **Font Awesome 6 & Google Fonts (Plus Jakarta Sans)**: High-resolution vector icons and typography.

---

## File Structure

```text
Level-3/
└── Task-2/
    ├── index.html     # Semantic landing page structure & modal markup
    ├── styles.css      # Vanilla CSS design system, cards, animations & media queries
    ├── script.js       # Modal controller, FAQ accordion, & navigation handlers
    └── README.md       # Technical documentation & component breakdown
```

---

## Key Landing Page Sections

| Section | ID | Description |
| :--- | :--- | :--- |
| **Top Announcement Bar** | `.announcement-bar` | Batch recruitment alert with quick apply link. |
| **Header Navigation** | `#navbarHeader` | Sticky glassmorphic navbar with desktop links and mobile toggle. |
| **Hero Section** | `#hero` | Primary headline, introduction, dual CTA buttons, and visual timeline card. |
| **Program Overview** | `#overview` | 3 cards explaining duration (4 weeks), practical deliverables, and GitHub workflows. |
| **Core Benefits** | `#benefits` | 6 feature cards detailing mentorship, certifications, portfolios, and opportunities. |
| **Curriculum Roadmap** | `#curriculum` | Progressive cards breaking down Level 1, Level 2, and Level 3 milestone tasks. |
| **Qualifications** | `#qualifications` | Side-by-side comparison of technical requirements and eligibility attributes. |
| **Mid-Page CTA Banner** | `#apply` | Full-width gradient call-to-action banner with apply trigger. |
| **FAQ Accordion** | `#faq` | 5 interactive collapsible questions clarifying remote format, time, and certificates. |
| **Contact & Inquiries** | `#contact` | Official communication channels and an instant inquiry form. |
| **Application Modal** | `#applicationModal` | Interactive pop-up form with instant client-side validation. |
| **Footer** | `.site-footer` | Complete footer with office hours, track links, and corporate contact details. |

---

## How to Run & Verify

1. Open `index.html` in any web browser.
2. **Test CTAs & Application Modal**:
   - Click any `"Apply Now"` button (in header, hero, banner, or mobile menu).
   - Verify that the modal opens with smooth backdrop blur.
   - Submit the form to verify field validation and the successful confirmation screen.
3. **Test FAQ Accordion**:
   - Click any question in the FAQ section to verify smooth accordion toggles.
4. **Test Responsive Design**:
   - Resize your browser window across Mobile (`< 768px`), Tablet (`768px – 991px`), and Desktop (`≥ 992px`) viewports to verify complete fluid responsiveness.

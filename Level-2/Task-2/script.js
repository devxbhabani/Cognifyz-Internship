/**
 * ============================================================================
 * COGNIFYZ INTERNSHIP · LEVEL 2 · TASK 2
 * Responsive Web Design & Mobile Hamburger Navigation Controller
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------------------------------------
    // 1. DOM Elements Selection
    // ------------------------------------------------------------------------
    const hamburgerBtn = document.querySelector('#hamburgerBtn');
    const mobileNavMenu = document.querySelector('#mobileNavMenu');
    const mobileMenuBackdrop = document.querySelector('#mobileMenuBackdrop');
    const mobileCloseBtn = document.querySelector('#mobileCloseBtn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const navbarHeader = document.querySelector('#navbarHeader');
    
    // Viewport Tracker Elements
    const breakpointName = document.querySelector('#breakpointName');
    const viewportDimensions = document.querySelector('#viewportDimensions');
    const bpCards = {
        mobile: document.querySelector('#bpMobileCard'),
        tablet: document.querySelector('#bpTabletCard'),
        desktop: document.querySelector('#bpDesktopCard'),
        wide: document.querySelector('#bpWideCard')
    };

    // Contact Form Elements
    const contactForm = document.querySelector('#contactForm');
    const formNotification = document.querySelector('#formNotification');

    // ------------------------------------------------------------------------
    // 2. Mobile Navigation Menu Logic (Toggle, Accessibility & Animations)
    // ------------------------------------------------------------------------
    function openMobileMenu() {
        if (!hamburgerBtn || !mobileNavMenu) return;
        hamburgerBtn.classList.add('is-active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        mobileNavMenu.classList.add('is-open');
        if (mobileMenuBackdrop) mobileMenuBackdrop.classList.add('is-open');
        document.body.classList.add('menu-open');
    }

    function closeMobileMenu() {
        if (!hamburgerBtn || !mobileNavMenu) return;
        hamburgerBtn.classList.remove('is-active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileNavMenu.classList.remove('is-open');
        if (mobileMenuBackdrop) mobileMenuBackdrop.classList.remove('is-open');
        document.body.classList.remove('menu-open');
    }

    // Toggle menu when clicking the hamburger / X button
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = hamburgerBtn.classList.contains('is-active');
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Close menu when clicking the explicit close button ("Close ✕")
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    // Close menu when clicking the backdrop overlay on the main screen
    if (mobileMenuBackdrop) {
        mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Close menu automatically when clicking any navigation link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
            closeMobileMenu();
        });
    });

    // Close menu with the Escape key for accessibility
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileNavMenu && mobileNavMenu.classList.contains('is-open')) {
            closeMobileMenu();
            if (hamburgerBtn) hamburgerBtn.focus();
        }
    });

    // Auto-close menu if viewport resized beyond mobile breakpoint (≥ 768px)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && mobileNavMenu && mobileNavMenu.classList.contains('is-open')) {
            closeMobileMenu();
        }
    });

    // ------------------------------------------------------------------------
    // 3. Real-Time Viewport & Media Query Breakpoint Tracker
    // ------------------------------------------------------------------------
    function updateViewportIndicator() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (viewportDimensions) {
            viewportDimensions.textContent = `${width} × ${height}`;
        }

        // Reset active cards highlight
        Object.values(bpCards).forEach(card => card && card.classList.remove('active-breakpoint'));

        let activeTier = 'Desktop';

        if (width < 768) {
            activeTier = width < 480 ? 'Mobile (XS)' : 'Mobile (<768px)';
            if (bpCards.mobile) bpCards.mobile.classList.add('active-breakpoint');
        } else if (width >= 768 && width < 992) {
            activeTier = 'Tablet (768–991px)';
            if (bpCards.tablet) bpCards.tablet.classList.add('active-breakpoint');
        } else if (width >= 992 && width < 1200) {
            activeTier = 'Desktop (992–1199px)';
            if (bpCards.desktop) bpCards.desktop.classList.add('active-breakpoint');
        } else {
            activeTier = 'Ultra Wide (≥1200px)';
            if (bpCards.wide) bpCards.wide.classList.add('active-breakpoint');
        }

        if (breakpointName) {
            breakpointName.textContent = activeTier;
        }
    }

    // Initialize and listen to resize events
    window.addEventListener('resize', updateViewportIndicator);
    updateViewportIndicator();

    // ------------------------------------------------------------------------
    // 4. Sticky Navbar Elevation on Scroll
    // ------------------------------------------------------------------------
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbarHeader.classList.add('scrolled');
        } else {
            navbarHeader.classList.remove('scrolled');
        }
    });

    // ------------------------------------------------------------------------
    // 5. Contact / Feedback Form Submission Simulation
    // ------------------------------------------------------------------------
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.querySelector('#userName').value.trim();
            const email = document.querySelector('#userEmail').value.trim();
            const device = document.querySelector('#deviceType').value;
            const rating = document.querySelector('#feedbackRating').value;

            if (!name || !email) {
                alert('Please fill out all required fields before submitting.');
                return;
            }

            formNotification.className = 'form-notification success';
            formNotification.innerHTML = `
                <i class="fa-solid fa-circle-check"></i> 
                Thank you, <strong>${name}</strong>! Your responsive review for <em>${device.toUpperCase()}</em> (Rated ${rating}/5 ⭐) was received successfully.
            `;

            contactForm.reset();

            // Auto-hide message after 6 seconds
            setTimeout(() => {
                formNotification.className = 'form-notification';
                formNotification.innerHTML = '';
            }, 6000);
        });
    }
});

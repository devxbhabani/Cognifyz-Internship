/**
 * ============================================================================
 * COGNIFYZ INTERNSHIP · LEVEL 3 · TASK 2
 * Web Developer Internship Landing Page Controller
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------------------------------------
    // 1. Mobile Navigation Toggle
    // ------------------------------------------------------------------------
    const mobileToggleBtn = document.querySelector('#mobileToggleBtn');
    const mobileDropdown = document.querySelector('#mobileDropdown');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMobileMenu() {
        const isOpen = mobileToggleBtn.classList.contains('is-active');
        if (isOpen) {
            mobileToggleBtn.classList.remove('is-active');
            mobileToggleBtn.setAttribute('aria-expanded', 'false');
            mobileDropdown.classList.remove('is-open');
        } else {
            mobileToggleBtn.classList.add('is-active');
            mobileToggleBtn.setAttribute('aria-expanded', 'true');
            mobileDropdown.classList.add('is-open');
        }
    }

    if (mobileToggleBtn) {
        mobileToggleBtn.addEventListener('click', toggleMobileMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggleBtn.classList.remove('is-active');
            mobileToggleBtn.setAttribute('aria-expanded', 'false');
            mobileDropdown.classList.remove('is-open');
        });
    });

    // ------------------------------------------------------------------------
    // 2. Sticky Navbar & Active Navigation State on Scroll
    // ------------------------------------------------------------------------
    const navbarHeader = document.querySelector('#navbarHeader');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Sticky Header shadow
        if (window.scrollY > 20) {
            navbarHeader.classList.add('scrolled');
        } else {
            navbarHeader.classList.remove('scrolled');
        }

        // Active Link Highlight
        const scrollPosition = window.scrollY + 120;

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ------------------------------------------------------------------------
    // 3. Application Modal Controller
    // ------------------------------------------------------------------------
    const applicationModal = document.querySelector('#applicationModal');
    const modalBackdrop = document.querySelector('#modalBackdrop');
    const modalCloseBtn = document.querySelector('#modalCloseBtn');
    const openModalButtons = document.querySelectorAll('.open-modal-btn, #navApplyBtn, #heroApplyBtn');
    const applicationForm = document.querySelector('#applicationForm');
    const modalSuccessView = document.querySelector('#modalSuccessView');
    const successCloseBtn = document.querySelector('#successCloseBtn');
    const successMessage = document.querySelector('#successMessage');

    function openModal() {
        if (!applicationModal) return;
        applicationModal.classList.add('is-active');
        applicationModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        // Reset form view
        if (applicationForm) applicationForm.style.display = 'flex';
        if (modalSuccessView) modalSuccessView.style.display = 'none';
    }

    function closeModal() {
        if (!applicationModal) return;
        applicationModal.classList.remove('is-active');
        applicationModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    openModalButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Close mobile menu if open
            if (mobileDropdown && mobileDropdown.classList.contains('is-open')) {
                toggleMobileMenu();
            }
            openModal();
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if (successCloseBtn) successCloseBtn.addEventListener('click', closeModal);

    // Escape Key to Close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && applicationModal && applicationModal.classList.contains('is-active')) {
            closeModal();
        }
    });

    // Form Submission Simulation
    if (applicationForm) {
        applicationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.querySelector('#appFullName').value.trim();
            const email = document.querySelector('#appEmail').value.trim();
            const phone = document.querySelector('#appPhone').value.trim();
            const github = document.querySelector('#appGithub').value.trim();

            if (!fullName || !email || !phone || !github) {
                alert('Please fill out all mandatory fields (Full Name, Email, Contact Number, GitHub URL).');
                return;
            }

            // Show success confirmation
            applicationForm.style.display = 'none';
            if (modalSuccessView) {
                modalSuccessView.style.display = 'block';
                if (successMessage) {
                    successMessage.innerHTML = `
                        Thank you, <strong>${fullName}</strong>! Your application for the Cognifyz Web Development Internship has been received. 
                        We have sent onboarding instructions and confirmation to <strong>${email}</strong>.
                    `;
                }
            }

            applicationForm.reset();
        });
    }

    // ------------------------------------------------------------------------
    // 4. FAQ Accordion Controller
    // ------------------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherBtn = otherItem.querySelector('.faq-question');
                if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            });

            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
                questionBtn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ------------------------------------------------------------------------
    // 5. Quick Inquiry Form Controller
    // ------------------------------------------------------------------------
    const inquiryForm = document.querySelector('#inquiryForm');
    const inquiryFeedback = document.querySelector('#inquiryFeedback');

    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inqName = document.querySelector('#inqName').value.trim();
            const inqEmail = document.querySelector('#inqEmail').value.trim();
            const inqMessage = document.querySelector('#inqMessage').value.trim();

            if (!inqName || !inqEmail || !inqMessage) {
                alert('Please fill out your name, email, and message before sending.');
                return;
            }

            if (inquiryFeedback) {
                inquiryFeedback.className = 'form-feedback success';
                inquiryFeedback.innerHTML = `
                    <i class="fa-solid fa-circle-check"></i> Thank you, <strong>${inqName}</strong>! Your message was received. Our team will contact you at ${inqEmail}.
                `;
            }

            inquiryForm.reset();

            setTimeout(() => {
                if (inquiryFeedback) {
                    inquiryFeedback.className = 'form-feedback';
                    inquiryFeedback.innerHTML = '';
                }
            }, 5000);
        });
    }
});

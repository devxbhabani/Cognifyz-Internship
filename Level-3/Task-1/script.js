/**
 * ============================================================================
 * COGNIFYZ INTERNSHIP · LEVEL 3 · TASK 1
 * Image Manipulation: Click-to-Enlarge Gallery & Automated Slideshow
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------------------------------------
    // 1. PART 1: Automated Image Slideshow Controller
    // ------------------------------------------------------------------------
    const slideshowWrapper = document.querySelector('.slideshow-wrapper');
    const slideItems = document.querySelectorAll('.slide-item');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    const prevSlideBtn = document.querySelector('#prevSlideBtn');
    const nextSlideBtn = document.querySelector('#nextSlideBtn');
    const timerFill = document.querySelector('.timer-fill');

    let currentSlideIndex = 0;
    const totalSlides = slideItems.length;
    const slideIntervalDuration = 5000; // 5 seconds per slide
    let slideTimer = null;
    let isPaused = false;

    function showSlide(index) {
        if (index < 0) {
            currentSlideIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlideIndex = 0;
        } else {
            currentSlideIndex = index;
        }

        // Update active slide class
        slideItems.forEach((slide, i) => {
            if (i === currentSlideIndex) {
                slide.classList.add('active-slide');
            } else {
                slide.classList.remove('active-slide');
            }
        });

        // Update pagination dots
        paginationDots.forEach((dot, i) => {
            if (i === currentSlideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Reset and trigger CSS timer animation
        if (timerFill) {
            timerFill.classList.remove('animating');
            // Trigger reflow to restart animation
            void timerFill.offsetWidth;
            timerFill.classList.add('animating');
        }
    }

    function nextSlide() {
        showSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
        showSlide(currentSlideIndex - 1);
    }

    function startAutoSlideshow() {
        stopAutoSlideshow();
        if (timerFill) timerFill.classList.add('animating');
        slideTimer = setInterval(() => {
            if (!isPaused) {
                nextSlide();
            }
        }, slideIntervalDuration);
    }

    function stopAutoSlideshow() {
        if (slideTimer) {
            clearInterval(slideTimer);
            slideTimer = null;
        }
    }

    // Pause on Hover
    if (slideshowWrapper) {
        slideshowWrapper.addEventListener('mouseenter', () => {
            isPaused = true;
        });

        slideshowWrapper.addEventListener('mouseleave', () => {
            isPaused = false;
        });
    }

    // Manual Arrow Controls
    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', () => {
            nextSlide();
            startAutoSlideshow(); // Reset interval
        });
    }

    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', () => {
            prevSlide();
            startAutoSlideshow(); // Reset interval
        });
    }

    // Pagination Dot Controls
    paginationDots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const targetIndex = parseInt(dot.getAttribute('data-slide'), 10);
            showSlide(targetIndex);
            startAutoSlideshow(); // Reset interval
        });
    });

    // Start automated cycle
    startAutoSlideshow();

    // ------------------------------------------------------------------------
    // 2. PART 2: Click-to-Enlarge Lightbox Modal
    // ------------------------------------------------------------------------
    const lightboxModal = document.querySelector('#lightboxModal');
    const lightboxBackdrop = document.querySelector('#lightboxBackdrop');
    const lightboxCloseBtn = document.querySelector('#lightboxCloseBtn');
    const lightboxImg = document.querySelector('#lightboxImg');
    const lightboxTitle = document.querySelector('#lightboxTitle');
    const lightboxCaption = document.querySelector('#lightboxCaption');
    const lightboxCategory = document.querySelector('#lightboxCategory');
    const lightboxCounter = document.querySelector('#lightboxCounter');
    const lightboxLoader = document.querySelector('#lightboxLoader');
    const lightboxPrevBtn = document.querySelector('#lightboxPrevBtn');
    const lightboxNextBtn = document.querySelector('#lightboxNextBtn');

    const thumbnailWrappers = Array.from(document.querySelectorAll('.thumbnail-wrapper'));
    let currentLightboxIndex = 0;

    function getVisibleThumbnails() {
        return thumbnailWrappers.filter(thumb => {
            const parentCard = thumb.closest('.gallery-card');
            return parentCard && !parentCard.classList.contains('hidden');
        });
    }

    function openLightbox(index) {
        const visibleThumbs = getVisibleThumbnails();
        if (index < 0 || index >= visibleThumbs.length) return;

        currentLightboxIndex = index;
        const targetThumb = visibleThumbs[currentLightboxIndex];

        const fullSrc = targetThumb.getAttribute('data-full');
        const title = targetThumb.getAttribute('data-title');
        const caption = targetThumb.getAttribute('data-caption');
        const category = targetThumb.getAttribute('data-category');

        // Show loader while image finishes loading
        if (lightboxLoader) lightboxLoader.classList.add('loading');
        lightboxImg.style.opacity = '0';

        lightboxImg.onload = () => {
            if (lightboxLoader) lightboxLoader.classList.remove('loading');
            lightboxImg.style.opacity = '1';
        };

        lightboxImg.src = fullSrc;
        lightboxImg.alt = title;
        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        if (lightboxCategory) lightboxCategory.textContent = category;
        if (lightboxCounter) lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${visibleThumbs.length}`;

        lightboxModal.classList.add('is-active');
        lightboxModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('is-active');
        lightboxModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        lightboxImg.src = '';
    }

    function nextLightboxImage() {
        const visibleThumbs = getVisibleThumbnails();
        let nextIdx = currentLightboxIndex + 1;
        if (nextIdx >= visibleThumbs.length) nextIdx = 0;
        openLightbox(nextIdx);
    }

    function prevLightboxImage() {
        const visibleThumbs = getVisibleThumbnails();
        let prevIdx = currentLightboxIndex - 1;
        if (prevIdx < 0) prevIdx = visibleThumbs.length - 1;
        openLightbox(prevIdx);
    }

    // Attach click triggers to thumbnails
    thumbnailWrappers.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const visibleThumbs = getVisibleThumbnails();
            const index = visibleThumbs.indexOf(thumb);
            if (index !== -1) {
                openLightbox(index);
            }
        });

        // Keyboard Enter or Space key triggers enlarge
        thumb.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                thumb.click();
            }
        });
    });

    // Close Button & Backdrop Listeners
    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightboxImage);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightboxImage);

    // Keyboard Shortcuts (Escape, Left Arrow, Right Arrow)
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('is-active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextLightboxImage();
        } else if (e.key === 'ArrowLeft') {
            prevLightboxImage();
        }
    });

    // ------------------------------------------------------------------------
    // 3. Gallery Category Filters
    // ------------------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});

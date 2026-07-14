document.addEventListener('DOMContentLoaded', () => {

    /* --- Theme Toggle (Dark/Light Mode) --- */
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
        }
    });

    /* --- Sticky Navigation --- */
    const headerWrapper = document.querySelector('.header-wrapper');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerWrapper.classList.add('scrolled');
        } else {
            headerWrapper.classList.remove('scrolled');
        }
    });

    /* --- Back to Top Button --- */
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* --- Search Overlay Toggle & Dynamic Search --- */
    const searchToggleBtn = document.querySelector('.search-toggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearchBtn = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchOverlayForm = document.querySelector('.search-overlay-form');
    const productColumns = document.querySelectorAll('.product-grid > div');
    
    searchToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchOverlay.classList.add('active');
        // Small delay to allow transition before focusing
        setTimeout(() => searchInput.focus(), 100);
    });

    closeSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchOverlay.classList.remove('active');
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });

    // Handle Search Submission
    searchOverlayForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        let found = false;
        
        productColumns.forEach(col => {
            const title = col.querySelector('.product-info h4').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                col.style.display = 'block';
                found = true;
            } else {
                col.style.display = 'none';
            }
        });

        // Close overlay and scroll to products section
        searchOverlay.classList.remove('active');
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });

    // Reset products if input is cleared
    searchInput.addEventListener('input', (e) => {
        if (e.target.value.trim() === '') {
            productColumns.forEach(col => col.style.display = 'block');
        }
    });

    /* --- Swiper Initialization --- */
    const testimonialSwiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    /* --- ScrollReveal Animations --- */
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: false // Set to true if you want animations to repeat on scroll up
    });

    // Hero Section
    sr.reveal('.hero-content', { origin: 'left' });
    sr.reveal('.hero-image-wrapper', { origin: 'right', delay: 400 });

    // Deals Section
    sr.reveal('.deals-header', { origin: 'top' });
    sr.reveal('.offer-card', { interval: 200 });

    // About Section
    sr.reveal('.about-image-wrapper', { origin: 'left' });
    sr.reveal('.about-text-content', { origin: 'right', delay: 400 });

    // Products Section
    sr.reveal('.section-heading', { origin: 'top' });
    sr.reveal('.product-card', { interval: 150 });

    // Testimonials
    sr.reveal('.testimonialSwiper', { delay: 400 });

    // Footer
    sr.reveal('.footer-brand', { origin: 'left' });
    sr.reveal('.footer-heading, .footer-links, .newsletter-form', { interval: 150, delay: 300 });

});

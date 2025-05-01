// const menuBtn=document.getElementById("menu-btn");
// const navLinks=document.getElementById("nav-links");
// const menuBtnIcon=menuBtn.querySelector("i");
// menuBtn.addEventListener("click",(e)=>{
//     navLinks.classList.toggle("open")
//     const isopen=navLinks.classList.contains("open")

//     menuBtn.setAttribute("class",isopen?"ri-close-line":"ri-menu-line")
// })
//  // JavaScript to toggle search form visibility
// document.querySelector('.search-icon').addEventListener('click', function() {
// const searchForm = document.querySelector('.search-form');
//             if (searchForm.style.display === 'none' || searchForm.style.display === '') {
//                 searchForm.style.display = 'flex'; // Show the search form
//             } else {
//                 searchForm.style.display = 'none'; // Hide the search form
//             }
// });



//slidder

// const swiper = new Swiper('.swiper', {
//       slidesPerView: 1,
//       spaceBetween: 20,
//       loop: true,
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//       },
//       breakpoints: {
//         768: {
//           slidesPerView: 2,
//         },
//         992: {
//           slidesPerView: 3,
//         },
//       },
//     });


ScrollReveal().reveal('.hero-section .text-section', {
    delay: 200,
    duration: 1000,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out',
    opacity: 0
});

ScrollReveal().reveal('.hero-section .image-section', {
    delay: 400,
    duration: 1000,
    origin: 'right',
    distance: '50px',
    easing: 'ease-in-out',
    opacity: 0
});

ScrollReveal().reveal('.deals-section .deals-heading', {
    delay: 200,
    duration: 800,
    origin: 'top',
    distance: '30px',
    easing: 'ease-in-out',
    opacity: 0
});

ScrollReveal().reveal('.deals-section .offer-box', {
    delay: 300,
    duration: 800,
    origin: 'bottom',
    distance: '30px',
    easing: 'ease-in-out',
    opacity: 0,
    interval: 200 // Stagger each offer box
});

ScrollReveal().reveal('#About .col-md-6:first-child', {
    delay: 200,
    duration: 1000,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out',
    opacity: 0
});

ScrollReveal().reveal('#image-about', {
    delay: 400,
    duration: 1000,
    origin: 'right',
    distance: '50px',
    easing: 'ease-in-out',
    opacity: 0
});

ScrollReveal().reveal('#about-text', {
    delay: 300,
    duration: 1000,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out',
    opacity: 0
});




ScrollReveal().reveal('#Products .product-card', {
    delay: 200,
    duration: 800,
    origin: 'bottom',
    distance: '30px',
    easing: 'ease-in-out',
    opacity: 0,
    interval: 200 // Stagger each product card
});

ScrollReveal().reveal('.testimonial-section .testimonial-content', {
    delay: 200,
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    opacity: 0
});

ScrollReveal().reveal('.footer', {
    delay: 200,
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    opacity: 0
});


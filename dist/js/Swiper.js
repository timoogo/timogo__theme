var swiper = new Swiper(".ourServices", {
    cssMode: true,
    slidesPerView: 3,

    spaceBetweenSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      2000:{
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is <= 499px
      1023: {
          slidesPerView: 1,
          
      },

      // when window width is <= 999px
     
  },
    mousewheel: true,
    keyboard: true,
  });
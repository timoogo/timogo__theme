//console.clear();

window.onload = () => {
  const swiperConfig = {
    cssMode:true,
    mousewheel: false,
    mousewheelControl: false,
    loop: false,
    parallax: true,
    slidesPerView: "auto",
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
   
      740: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  }
  const divswipe = new Swiper('.mySwiper', swiperConfig);

};
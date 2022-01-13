//console.clear();

window.onload = () => {
  const swiperConfig = {
    cssMode:true,
    mousewheel: false,
    mousewheelControl: false,
    loop: false,
    parallax: true,
    slidesPerView: "auto",
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
        spaceBetween: 200,
        loop:true
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  }
  const divswipe = new Swiper('.mySwiper', swiperConfig);

};
let resizeTimeout;
window.addEventListener('resize', function(event) {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function(){
    window.location.reload();
  }, 1500);
});

window.addEventListener('resize', function(event) {
  location.reload();
}, true);

  const swiperServicesConfig = {
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
  const swiperTeamConfig = {
    cssMode:true,
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
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
  const servicesswipe = new Swiper('.servicesswipe', swiperServicesConfig);

  const teamSwipe = new Swiper('.teamswipe', swiperTeamConfig);




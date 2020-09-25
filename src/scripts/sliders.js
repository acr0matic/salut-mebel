/* global Swiper */

const mySwiper = new Swiper('.promo__slider-container', {
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.promo__slider-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

mySwiper.init();

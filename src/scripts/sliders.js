/* eslint-disable no-unused-vars */
/* global Swiper */

const promoSlider = new Swiper('.promo__slider', {
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.promo__slider-pagination',
  },

  navigation: {
    nextEl: '.promo__slider-right',
    prevEl: '.promo__slider-left',
  },
});

const offerSlider = new Swiper('.promo__offer', {
  loop: true,
  autoplay: {
    delay: 2000,
  },

  slidesPerView: 1,
  spaceBetween: 25,

  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: '.promo__offer-pagination',
  },
});

const articleSlider = new Swiper('.article__slider', {
  slidesPerView: 4,
  spaceBetween: 40,

  navigation: {
    nextEl: '.article__slider-next',
    prevEl: '.article__slider-prev',
  },
});

const kitchenSlider = new Swiper('.catalog__slider--kitchen', {
  slidesPerView: 4,
  spaceBetween: 40,

  navigation: {
    nextEl: '.catalog__slider--kitchen-right',
    prevEl: '.catalog__slider--kitchen-left',
  },
});

const hullSlider = new Swiper('.catalog__slider--hull', {
  slidesPerView: 4,
  spaceBetween: 40,

  navigation: {
    nextEl: '.catalog__slider--hull-right',
    prevEl: '.catalog__slider--hull-left',
  },
});

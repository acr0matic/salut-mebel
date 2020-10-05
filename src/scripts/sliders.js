/* global Swiper */

const promoSlider = new Swiper('.promo__slider-container', {
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

promoSlider.init();

const articleSlider = new Swiper('.article__slider', {
  slidesPerView: 4,
  spaceBetween: 40,

  navigation: {
    nextEl: '.article__slider-next',
    prevEl: '.article__slider-prev',
  },
});

articleSlider.init();

const kitchenSlider = new Swiper('.catalog__slider--kitchen', {
  slidesPerView: 4,
  spaceBetween: 40,

  navigation: {
    nextEl: '.catalog__slider--kitchen-right',
    prevEl: '.catalog__slider--kitchen-left',
  },
});

kitchenSlider.init();

const hullSlider = new Swiper('.catalog__slider--hull', {
  slidesPerView: 4,
  spaceBetween: 40,

  navigation: {
    nextEl: '.catalog__slider--hull-right',
    prevEl: '.catalog__slider--hull-left',
  },
});

hullSlider.init();

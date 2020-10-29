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
    delay: 3000,
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
  slidesPerView: 1,
  spaceBetween: 40,

  navigation: {
    nextEl: '.article__slider-right',
    prevEl: '.article__slider-left',
  },

  breakpoints: {
    480: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const kitchenSlider = new Swiper('.catalog__slider--kitchen', {
  slidesPerView: 1,
  spaceBetween: 40,

  navigation: {
    nextEl: '.catalog__slider--kitchen-right',
    prevEl: '.catalog__slider--kitchen-left',
  },

  breakpoints: {
    480: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const hullSlider = new Swiper('.catalog__slider--hull', {
  slidesPerView: 1,
  spaceBetween: 40,

  navigation: {
    nextEl: '.catalog__slider--hull-right',
    prevEl: '.catalog__slider--hull-left',
  },

  breakpoints: {
    480: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const galleryPhoto = new Swiper('.product-gallery__main', {
  slidesPerView: 1,
  loop: true,
  loopedSlides: 5,

  navigation: {
    nextEl: '.product-gallery__next',
    prevEl: '.product-gallery__prev',
  },
});

const galleryThumbnails = new Swiper('.product-gallery__thumbnails', {
  slidesPerView: 5,
  spaceBetween: 15,

  loop: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,

  loopedSlides: 5,
});

if (document.querySelector('.product-gallery__main')) galleryPhoto.controller.control = galleryThumbnails;
if (document.querySelector('.product-gallery__thumbnails')) galleryThumbnails.controller.control = galleryPhoto;

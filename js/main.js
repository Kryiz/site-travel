// =============== Swiper slider
const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }
});

const swiper2 = new Swiper('.feedback-swiper', {
  loop: true,
  centeredSlides: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});
//============= Modal
$(function () {
  $(".modal__open, .modal__background, .modal__close").click(function () {
    $(".modal__content, .modal__background").toggleClass("active");
  });
});
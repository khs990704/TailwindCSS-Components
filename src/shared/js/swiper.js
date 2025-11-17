document.addEventListener("DOMContentLoaded", function () {
  const briefSwiper = new Swiper(".main_brief_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

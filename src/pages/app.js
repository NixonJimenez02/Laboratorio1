// Asegúrate de incluir el script de Swiper antes de este archivo

document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    effect: "slide", // Agregado para el efecto de deslizamiento
  });
});

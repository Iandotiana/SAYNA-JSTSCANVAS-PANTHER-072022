// la fonction du slider , j'ai pas mis le bouton mais il suffit de scroller vers la gauche//

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
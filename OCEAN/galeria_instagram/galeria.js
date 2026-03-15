const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: "#swiper-button-next",
    prevEl: "#swiper-button-prev",
  },
  loop: true,
});

const modal = document.getElementById("sliderModal");
const thumbs = document.querySelectorAll(".mockups-img");
const closeBtn = document.getElementById("closeBtn");

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    modal.classList.add("active");
    swiper.slideToLoop(index);
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

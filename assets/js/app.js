/*==================== SHOW MENU ====================*/
const showHide = (toggleSelect, navSelect, CheckBars = false) => {
  const toggle = document.querySelector(toggleSelect),
    nav = document.querySelector(navSelect),
    navIcon = document.querySelector(".icon-bars");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      if (CheckBars) {
        navIcon.classList.toggle("show");
      }
    });
  }
};
showHide("div.wrap-bars", "nav.navbar", true);
showHide(".dropbtn", ".dropdown");
showHide(".dropbtn", "i.fa-caret-down");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".navbar__link");
const dropLink = document.querySelectorAll(".dropdown__link");

function linkAction() {
  const navMenu = document.querySelector("nav.navbar");
  const dropMenu = document.querySelector(".dropdown");
  const navIcon = document.querySelector(".icon-bars");
  const caretDown = document.querySelector("i.fa-caret-down");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
  dropMenu.classList.remove("show");
  navIcon.classList.remove("show");
  caretDown.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
dropLink.forEach((n) => n.addEventListener("click", linkAction));

/*===================== SLIDER ========================*/

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 27,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// let secondSwiper = new Swiper(".testimonialsSwiper", {
//   // slidesPerView: 1,
//   spaceBetween: 27,
//   slidesPerGroup: 1,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  let toggleM = document.querySelector(".toggle");
  let menu = document.querySelector(".menu");

  toggleM.classList.toggle("active");
  menu.classList.toggle("active");
}

"use strict";

// Cambio pagine senza refresh
const linkHead = document.querySelectorAll(".linkHead");
const linkPage = document.querySelectorAll(".linkPage");

linkHead.forEach((element) => {
  element.addEventListener("click", function () {
    // Nasconde tendina (mobile) e overlay sfocato
    hambTendina.classList.add("hidden");
    selectOverlay.classList.add("hidden");

    hambMenu.style.display = "block";
    hambMenuClose.style.display = "none";

    // Elimina da tutti i link la pagina attiva (css)
    linkHead.forEach((x) => {
      x.classList.remove("attiva");
    });

    element.classList.add("attiva");
    // Nasconde tutte le pagine tranne quella cliccata
    linkPage.forEach((el) => {
      el.classList.add("hidden");

      if (element.id == el.classList[0]) {
        el.classList.remove("hidden");
      }
    });
  });
});

// Hamburger menu
const hambMenu = document.getElementById("hambMenu");
const hambMenuClose = document.getElementById("hambMenuClose");
const hambTendina = document.getElementById("tendinaLinks");
const selectOverlay = document.querySelector(".overlay");

hambMenuClose.style.display = "none";

hambMenu.addEventListener("click", function () {
  hambTendina.classList.toggle("fade");
  hambTendina.classList.toggle("hidden");
  selectOverlay.classList.toggle("hidden");
  hambMenu.style.display = "none";
  hambMenuClose.style.display = "block";
});

hambMenuClose.addEventListener("click", function () {
  hambTendina.classList.toggle("fade");
  hambTendina.classList.toggle("hidden");
  selectOverlay.classList.toggle("hidden");
  hambMenu.style.display = "block";
  hambMenuClose.style.display = "none";
});

selectOverlay.addEventListener("click", function () {
  hambTendina.classList.add("hidden");
  selectOverlay.classList.add("hidden");
  hambMenu.style.display = "block";
  hambMenuClose.style.display = "none";
});

// const linkPage = document.querySelectorAll(".linkPage");
// const homeLink = document.getElementById("home");
// const homeDiv = document.querySelector(".home");

// const aboutLink = document.getElementById("about");
// const aboutDiv = document.querySelector(".about");

// const esperienzaLink = document.getElementById("esperienza");
// const esperienzaDiv = document.querySelector(".esperienza");

// const portfolioLink = document.getElementById("portfolio");
// const portfolioDiv = document.querySelector(".portfolio");

// const contattiLink = document.getElementById("contatti");
// const contattiDiv = document.querySelector(".contatti");

// homeLink.addEventListener("click", function () {
//   console.log(home);
//   linkPage.forEach((element) => {
//     element.classList.add("hidden");
//   });
//   homeDiv.classList.remove("hidden");
// });

// aboutLink.addEventListener("click", function () {
//   linkPage.forEach((element) => {
//     element.classList.add("hidden");
//   });
//   aboutDiv.classList.remove("hidden");
// });

// esperienzaLink.addEventListener("click", function () {
//   linkPage.forEach((element) => {
//     element.classList.add("hidden");
//   });
//   esperienzaDiv.classList.remove("hidden");
// });

// portfolioLink.addEventListener("click", function () {
//   linkPage.forEach((element) => {
//     element.classList.add("hidden");
//   });
//   portfolioDiv.classList.remove("hidden");
// });

// contattiLink.addEventListener("click", function () {
//   linkPage.forEach((element) => {
//     element.classList.add("hidden");
//   });
//   contattiDiv.classList.remove("hidden");
// });

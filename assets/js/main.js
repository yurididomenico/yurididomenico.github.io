"use strict";

// Cambio pagine senza refresh
const linkHead = document.querySelectorAll(".linkHead");
const linkPage = document.querySelectorAll(".linkPage");

// HambMenu
const hambMenu = document.getElementById("hambMenu");
const hambMenuClose = document.getElementById("hambMenu");
const hambTendina = document.getElementById("tendinaLinks");
const selectOverlay = document.querySelector(".overlay");
let toggleMenu = false;

// Ruota hamb menu se cliccato
function rotateMenu() {
  if (toggleMenu) {
    hambMenu.style.transform = "rotate(0deg)";
  } else {
    hambMenu.style.transform = "rotate(90deg)";
  }
  toggleMenu = !toggleMenu;
}

// Aggiunge click ai link e gestisce pagine
linkHead.forEach((element) => {
  element.addEventListener("click", function () {
    // Nasconde tendina (mobile) e overlay sfocato
    hambTendina.classList.add("hidden");
    selectOverlay.classList.add("hidden");

    //Reset Hamburger
    rotateMenu();

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
hambMenu.addEventListener("click", function () {
  rotateMenu();
  hambTendina.classList.toggle("fade");
  hambTendina.classList.toggle("hidden");
  selectOverlay.classList.toggle("hidden");
});

selectOverlay.addEventListener("click", function () {
  rotateMenu();
  hambTendina.classList.add("hidden");
  selectOverlay.classList.add("hidden");
});

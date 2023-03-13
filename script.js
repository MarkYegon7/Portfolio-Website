let hamburgerMenu = document.querySelector('.image-icon');
let desktopMenu = document.querySelector('.mobile-Menu-list');

function clickOn () {
  hamburgerMenu.classList.add("hambDisplay");
  desktopMenu.classList.add('mobile-Menu-list-display');
}
hamburgerMenu.addEventListener('click', clickOn);
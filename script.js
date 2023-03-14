let hamburgerMenu = document.querySelector('.image-icon');
let desktopMenu = document.querySelector('.name');
let backGround = document.querySelector('.mobile-Menu-list')

function clickOn () {
  hamburgerMenu.classList.add("hambDisplay");
  desktopMenu.classList.add('mobile-Menu-list-display');
  backGround.classList.add("imageBackGround")
}
hamburgerMenu.addEventListener('click', clickOn);
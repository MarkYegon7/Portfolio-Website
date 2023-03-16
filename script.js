const hamburgerMenu = document.querySelector('.image-icon');
const desktopMenu = document.querySelector('.name-1');
const clickButton = document.querySelector('#close_button');
const navigationNav = document.querySelectorAll('.mobile-Menu-list > li > a');

function clickOn() {
  desktopMenu.style.display = 'flex';
}

function closeMenu() {
  desktopMenu.style.display = 'none';
}

hamburgerMenu.addEventListener('click', clickOn);
clickButton.addEventListener('click', closeMenu);
navigationNav.forEach((each) => each.addEventListener('click', closeMenu));

const seeProject = document.querySelector('.see');
const popWindow = document.querySelector('.works');
const popClose = document.querySelector('#close_button')


// seeProject.addEventListener('click', () => {
//   popWindow.style.display = 'block';
// });

// popClose.addEventListener('click', () => {
//   popWindow.style.display = 'none';
// });


// const html = `
// <div class="works">
 

//   <div class="div1">
//       <h1 class="header-tonic">Tonic</h1>
//       <img src="images/Closing-cross.png" alt="" id="close_button">

//       <ul class="description">
//           <li class="canopy">CANOPY</li>
//           <li><img src="images/Counter.svg" alt="" id="counter"></li>
//           <li class="back">Back End Dev</li>
//           <li><img src="images/Counter.svg" alt="" id="counter"></li>
//           <li class="back">2015</li>
//       </ul>
//   </div>

//       <img src="images/Snapshoot Portfolio.svg" alt="" class="tonic">
//       <img src="images/Snapshoot Portfolio1.svg" alt="" class="tonic-1">
    
//   <div>
//       <p class="more-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
//         has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
//         and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
//         electronic typesetting, remaining essent
//       </p>

//       <ul class="languages">
//           <li><button class="lang" id="lan-1">html</button></li>
//           <li><button class="lang" id="lan-2">css</button></li>
//           <li><button class="lang" id="lan-3">javaScript</li></button></li>
//       </ul>

//   <div class="see-live_source">
//     <a href="https://markyegon7.github.io/Portfolio-Website/" class="see-live">
//       <button><h3>See live</h3></button>
//       // <button><h3>See live</h3></button>
//     </a>
//   </div>
//   </div> 
// </div>`;



// for (let i = 0;i < 6;i += 1) {
//   seeProject[i].addEventListener('click', () => {
//     see.innerHTML = html;
//   })
// }

// const seeProjectBtn = document.getElementById('see-1');
// const worksContainer = document.getElementById('works-container');
// const closeButton = document.getElementById('close_button');

// seeProjectBtn.addEventListener('click', function() {
//   worksContainer.classList.add('show');
// });

// closeButton.addEventListener('click', function() {
//   worksContainer.classList.remove('show');
// });
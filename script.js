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



const worksArray = [
    {
      id: 0,
      title: 'Tonic',
      experiences: ['Canopy', 'Back End Dev', '2015'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
      urlMobile: 'images/Snapshoot Portfolio.svg',
      urlDesktop: 'images/Snapshoot Portfolio1.svg',
      urlModal: 'images/Snapshoot Portfolio1.svg',
      alt: '',
      live: 'https://markyegon7.github.io/Portfolio-Website/',
      source: 'https://github.com/MarkYegon7',
    },
    {
      id: 1,
      title: 'Multi-Post Stories',
      experiences: ['Canopy', 'Back End Dev', '2015'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
      urlMobile: 'images/Snapshoot Portfolio (1).svg',
      urlDesktop: 'images/Snapshoot Portfolio2.svg',
      urlModal: 'images/Snapshoot Portfolio1.svg',
      alt: '',
      live: 'https://markyegon7.github.io/Portfolio-Website/',
      source: 'https://github.com/MarkYegon7',
    },
    {
      id: 2,
      title: 'Tonic',
      experiences: ['Canopy', 'Back End Dev', '2015'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
      urlMobile: 'images/Snapshoot Portfolio (2).svg',
      urlDesktop: 'images/Snapshoot Portfolio3.svg',
      urlModal: 'images/Snapshoot Portfolio1.svg',
      alt: '',
      live: 'https://markyegon7.github.io/Portfolio-Website/',
      source: 'https://github.com/MarkYegon7',
    },
    {
      id: 3,
      title: 'Multi-Post Stories',
      experiences: ['Canopy', 'Back End Dev', '2015'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
      urlMobile: 'images/Snapshoot Portfolio (3).svg',
      urlDesktop: 'images/Snapshoot Portfolio4.svg',
      urlModal: 'images/Snapshoot Portfolio1.svg',
      alt: '',
      live: 'https://markyegon7.github.io/Portfolio-Website/',
      source: 'https://github.com/MarkYegon7',
    },
  ];

const worksLoadHandler = () => {
    const works = document.getElementsByClassName('works')
}

 
for (let i = 0; i < worksArray.length; i += 1) {
  const card = ` 
<div class="works">
            <img src={$worksArray[i].urlMobile} alt="" class="tonic">
              <div class="div1">
                <h1 class="header-tonic">{$worksArray[i].title}</h1>
                <ul class="description">
                    <li class="canopy">{$worksArray[i].expierences[0]}</li>
                    <li><img src="images/Counter.svg" alt="" id="counter"></li>
                    <li class="back">{$worksArray[i].expierences[1]}</li>
                    <li><img src="images/Counter.svg" alt="" id="counter"></li>
                    <li class="back">{$worksArray[i].expierences[2]}</li>
                </ul>
                <p class="more-info">{$worksArray[i].description}
                </p>
                <ul class="languages">
                    <li><button class="lang" id="lan-1">html</button></li>
                    <li><button class="lang" id="lan-2">css</button></li>
                    <li><button class="lang" id="lan-3">javaScript</li></button></li>
                </ul>
                <button class="see" id="see-1">{$worksArray[i].live}</button>
                <button class="see" id="see-1">{$worksArray[i].source}</button>
            </div>   
        </div>
`;
}















































































































// const seeProject = document.querySelectorAll('.see');
// const popWindow = document.querySelector('.works','works works2');
// const popClose = document.querySelector('#close_button')

// const html = `
// <section class="works-container" id="works-container">
//         <div class="works">
//             <h1 class="header-tonic">Tonic</h1>
//             <img src="images/Closing-cross.png" alt="" id="close_button">
//             <ul class="description">
//                 <li class="canopy">CANOPY</li>
//                 <li><img src="images/Counter.svg" alt="" id="counter"></li>
//                 <li class="back">Back End Dev</li>
//                 <li><img src="images/Counter.svg" alt="" id="counter"></li>
//                 <li class="back">2015</li>
//             </ul>

//             <img src="images/Snapshoot Portfolio.svg" alt="" class="tonic">
//             <img src="images/Snapshoot Portfolio1.svg" alt="" class="tonic-1">
//             // <div class="div1">
              

//                 <p class="more-info">A daily selection of privately 
//                     personalized reads; no accounts or sign-ups required.
//                 </p>

//                 <ul class="languages">
//                     <li><button class="lang" id="lan-1">html</button></li>
//                     <li><button class="lang" id="lan-2">css</button></li>
//                     <li><button class="lang" id="lan-3">javaScript</li></button></li>
//                 </ul>


//                 <div class="see-live_source">
//                     <a href="https://markyegon7.github.io/Portfolio-Website/" class="see-live">
//                         <button><h3>See live</h3></button>
//                     </a>
//                     <a href="https://github.com/MarkYegon7/Portfolio-Website/tree/main" class="see-live">
//                         <button><h3>See source</h3></button>
//                     </a>
//                 </div>
//             // </div>   
//         </div>

//         <div class="works works2">
//             <h1 class="stories">Multi-Post Stories</h1>

//             <ul class="description">
//                 <li class="canopy">CANOPY</li>
//                 <li><img src="images/Counter.svg" alt="" id="counter"></li>
//                 <li class="back">Back End Dev</li>
//                 <li><img src="images/Counter.svg" alt="" id="counter"></li>
//                 <li class="back">2015</li>
//             </ul>

//             <img src="images/Snapshoot Portfolio (1).svg" alt="" class="tonic">
//             <img src="images/Snapshoot Portfolio2.svg" alt="" class="tonic-1">
//             <div>
//                 <p class="more-info">A daily selection of privately 
//                     personalized reads; no accounts or sign-ups required.
//                 </p>

//                 <ul class="languages">
//                     <li><button class="lang" id="lan-1">html</button></li>
//                     <li><button class="lang" id="lan-2">css</button></li>
//                     <li><button class="lang" id="lan-3">javaScript</li></button></li>
//                 </ul>

//                 <div class="see-live_source">
//                     <a href="https://markyegon7.github.io/Portfolio-Website/" class="see-live">
//                         <button><h3>See live</h3></button>
//                     </a>
//                     <a href="https://github.com/MarkYegon7/Portfolio-Website/tree/main" class="see-live">
//                         <button><h3>See source</h3></button>
//                     </a>
//                 </div>
//             </div>
//         </div>

//         <div class="works">
//             <h1 class="header-tonic">Tonic</h1>

//             <ul class="description">
//                 <li class="canopy">CANOPY</li>
//                 <li><img src="images/Counter.svg" alt="" id="counter"></li>
//                 <li class="back">Back End Dev</li>
//                 <li><img src="images/Counter.svg" alt="" id="counter"></li>
//                 <li class="back">2015</li>
//             </ul>

//             <img src="images/Snapshoot Portfolio (2).svg" alt="" class="tonic">
//             <img src="images/Snapshoot Portfolio3.svg" alt="" class="tonic-1">
//             <div>
//                 <p class="more-info">A daily selection of privately 
//                     personalized reads; no accounts or sign-ups required.
//                 </p>

//                 <ul class="languages">
//                     <li><button class="lang" id="lan-1">html</button></li>
//                     <li><button class="lang" id="lan-2">css</button></li>
//                     <li><button class="lang" id="lan-3">javaScript</li></button></li>
//                 </ul>

//                 <div class="see-live_source">
//                     <a href="https://markyegon7.github.io/Portfolio-Website/" class="see-live">
//                         <button><h3>See live</h3></button>
//                     </a>
//                     <a href="https://github.com/MarkYegon7/Portfolio-Website/tree/main" class="see-live">
//                         <button><h3>See source</h3></button>
//                     </a>
//                 </div>
//             </div>
//         </div>

//         <div class="works works2">
//             <h1 class="stories">Multi-Post Stories</h1>


//             <ul class="description">
//                 <li class="canopy">CANOPY</li>
//                 <li><img src="images/Counter.svg" alt="" id="counter"></li>
//                 <li class="back">Back End Dev</li>
//                 <li><img src="images/Counter.svg" alt="" id="counter"></li>
//                 <li class="back">2015</li>
//             </ul>

//             <img src="images/Snapshoot Portfolio (3).svg" alt="" class="tonic">
//             <img src="images/Snapshoot Portfolio4.svg" alt="" class="tonic-1">
//             <div>
//                 <p class="more-info">A daily selection of privately 
//                     personalized reads; no accounts or sign-ups required.
//                 </p>

//                 <ul class="languages">
//                     <li><button class="lang" id="lan-1">html</button></li>
//                     <li><button class="lang" id="lan-2">css</button></li>
//                     <li><button class="lang" id="lan-3">javaScript</li></button></li>
//                 </ul>

//                 <div class="see-live_source">
//                     <a href="https://markyegon7.github.io/Portfolio-Website/" class="see-live">
//                         <button><h3>See live</h3></button>
//                     </a>
//                     <a href="https://github.com/MarkYegon7/Portfolio-Website/tree/main" class="see-live">
//                         <button><h3>See source</h3></button>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </section>`;



//     seeProject.forEach((item)=> {
//       item.addEventListener('click',()=>{
//         popWindow.innerHTML = html
//       })
//     }) 

  
  
  
//  seeProject[i].addEventListener('click', () => {
// see.innerHTML = html;
//  console.log("clickedk")
//    })
//  }


// seeProject.forEach((item)=> {
//     item.addEventListener('click',()=>{
//       fetch('works.html')
//         .then(response => response.text())
//         .then(data => {
//           const popup = document.createElement('div');
//           popup.classList.add('popup');
//           popup.innerHTML = data;
//           document.body.appendChild(popup);
//           popClose.addEventListener('click', () => popup.remove());
//         })
//     })
//   })

// const seeProjectBtn = document.getElementById('see-1');
// const worksContainer = document.getElementById('works-container');
// const closeButton = document.getElementById('close_button');

// seeProjectBtn.addEventListener('click', function() {
//   worksContainer.classList.add('show');
// });

// closeButton.addEventListener('click', function() {
//   worksContainer.classList.remove('show');
// });
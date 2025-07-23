
/****** nav *******/

const navBar = document.querySelector('nav')
let lastScrollTop = 0

window.addEventListener('scroll', () => {
  const scrollMove = window.scrollY
  if(scrollMove > lastScrollTop){
    navBar.classList.remove('fixed')
  }
  else{
    if(scrollMove > 20){
      navBar.classList.add('fixed')
    }
    else{
      navBar.classList.remove('fixed')
    }
  }
  lastScrollTop = scrollMove
})

/****** menu ******/

const menuButton = document.querySelector('.menu-toggle')
const navMenu = document.querySelector('.nav-links')
const menuText = document.querySelector('.btn-text')

menuButton.addEventListener("click", () =>{
  navMenu.classList.toggle('active')
  menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active'))
  if(navMenu.classList.contains('active')){
    menuText.innerText = "Cerrar Menú"
  }else{
    menuText.innerText = "Menú"
  }
})

/***** lightbox  ******/
  
window.addEventListener('load', () => { 
  baguetteBox.run('.container-gallery', {
    buttons: true
  })
});

/* swiper */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay:{
    delay: 10000
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

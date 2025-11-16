
  /* =========  HEADER  ==========*/

const navBar = document.querySelector('header')
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

  /* =========  MENU  ==========*/

  const menuButton = document.querySelector('.menu-toggle')
  const navMenu = document.querySelector('.nav-links')
  menuButton.addEventListener("click", () =>{
    navMenu.classList.toggle('active')
    menuButton.classList.toggle('active')
    menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active'))
  })

  /* =========  SWIPER  ==========*/

if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay:{
    delay: 10000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });
}
  /* =========  BAGUETTEBOX  ==========*/

if (typeof baguetteBox !== 'undefined') {
  baguetteBox.run('.container-gallery', {
    buttons: true 
  });
}

/* ============ MODAL  ============== */

const privacyButton = document.querySelector('.privacy__btn')
privacyButton.addEventListener('click', openModal)

function openModal(){
  const modal = document.querySelector('#privacy-modal')
  modal.showModal()
  modal.scrollTop = 0 
  document.querySelector('.modal__title').focus()

}

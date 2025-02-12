
/****** nav ******/
window.addEventListener('scroll', () =>{
  const myNav = document.querySelector('nav')
  if(window.scrollY > 5){
    myNav.classList.add('fixed')

  }else{
    myNav.classList.remove('fixed')
  }
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


/******  active  *****/

  const currentPage = window.location.pathname
  const navLinks = document.querySelectorAll('nav ul li a')

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href')
    if(currentPage.includes(linkPath)){
      link.classList.add('active')

  }
  
  })





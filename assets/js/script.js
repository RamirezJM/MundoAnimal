
/****** nav ******/
window.addEventListener('scroll', () =>{
  const myNav = document.querySelector('nav')
  if(window.scrollY > 20){
    myNav.classList.add('fixed')

  }else{
    myNav.classList.remove('fixed')
  }
})


/****** menu ******/

const menuButton = document.querySelector('.menu-toggle')
const navMenu = document.querySelector('.nav-links')

menuButton.addEventListener("click", () =>{
  navMenu.classList.toggle('active')
  menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active'))
})



/***** galeria lightbox *******/

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.getElementsByClassName("gallery-img")
for( let i=0; i < images.length; i++){
  images[i].addEventListener("click", () => {
    import('./lightbox.js')
  })
   

  
}
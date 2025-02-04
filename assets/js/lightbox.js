export function lightboxFunction(){

  lightbox.classList.add('active')
  const lightboxImage = document.createElement('img')
  lightboxImage.src = images[i].src

  while(lightbox.firstChild){
    lightbox.removeChild(lightbox.firstChild)
  }
  lightbox.appendChild(lightboxImage)

  const closeButton = document.createElement('span')
  closeButton.classList.add('closeButton')
  closeButton.addEventListener("click", () =>{
    lightbox.classList.remove('active')
  })
  lightbox.appendChild(closeButton)
 
  const leftArrow = document.createElement('span')
  leftArrow.classList.add('leftArrow')
  leftArrow.addEventListener("click", prevImage)
  lightbox.appendChild(leftArrow)

  const rightArrow = document.createElement('span')
  rightArrow.classList.add('rightArrow')
  rightArrow.addEventListener("click", nextImage)
  lightbox.appendChild(rightArrow)

  const galleryImages = ['../assets/images/galeria/imagen1.jpeg', '../assets/images/galeria/imagen2.jpeg', '../assets/images/galeria/imagen3.jpeg', '../assets/images/galeria/imagen4.jpeg', '../assets/images/galeria/imagen5.jpeg', '../assets/images/galeria/imagen6.jpeg', '../assets/images/galeria/imagen7.jpeg',]
  let currentImage = 0

  function nextImage(){
    currentImage++
    if(currentImage > galleryImages.length - 1){
      currentImage = 0
    }
    lightboxImage.src = galleryImages[currentImage]
  }

  function prevImage(){
    currentImage--
    if(currentImage < 0){
      currentImage = galleryImages.length - 1
    }
    lightboxImage.src = galleryImages[currentImage]
  }

}
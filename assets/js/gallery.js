
/*  ===== BaguetteBox  ======= */

const gallery = document.querySelector('.container-gallery');

if (gallery && typeof baguetteBox !== 'undefined') {
  const galleryObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      baguetteBox.run('.container-gallery', { buttons: true });
      observer.disconnect();
    }
  }, {
    rootMargin: '200px'
  });

  galleryObserver.observe(gallery);
}

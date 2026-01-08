
/* =========  HEADER  ==========*/

/* const navBar = document.querySelector('header')
let lastScrollTop = 0
window.addEventListener('scroll', () => {
  const scrollMove = window.scrollY
  if (scrollMove > lastScrollTop) {
    navBar.classList.remove('fixed')
  }
  else {
    if (scrollMove > 20) {
      navBar.classList.add('fixed')
    }
    else {
      navBar.classList.remove('fixed')
    }
  }
  lastScrollTop = scrollMove
}) */

const navBar = document.querySelector('header');
let lastScrollTop = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollMove = window.scrollY;

      if (scrollMove > lastScrollTop && scrollMove > 20) {
        navBar.classList.remove('fixed');
      } else if (scrollMove > 20) {
        navBar.classList.add('fixed');
      } else {
        navBar.classList.remove('fixed');
      }

      lastScrollTop = scrollMove;
      ticking = false;
    });

    ticking = true;
  }
}, { passive: true });


/* =========  MENU  ==========*/

/* const menuButton = document.querySelector('.menu-toggle')
const navMenu = document.querySelector('.nav-links')
menuButton.addEventListener("click", () => {
  navMenu.classList.toggle('active')
  menuButton.classList.toggle('active')
  menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active'))
}) */

const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', isActive);
  });
}


/* =========  SWIPER  ==========*/

/* document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 10000
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}) */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper === 'undefined') return;

  const swiperEl = document.querySelector('.swiper');
  if (!swiperEl) return;

  let initialized = false;

  const loadSwiperCSS = () => {
    return new Promise((resolve) => {
      // Evitar cargar dos veces
      if (document.querySelector('link[data-swiper-css]')) {
        resolve();
        return;
      }

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      link.dataset.swiperCss = 'true';
      link.onload = () => resolve();
      document.head.appendChild(link);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(async entry => {
      if (entry.isIntersecting && !initialized) {
        initialized = true;
        observer.disconnect();

        await loadSwiperCSS();

        new Swiper('.swiper', {
          direction: 'horizontal',
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
            delay: 10000,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    });
  }, {
    rootMargin: '200px',
    threshold: 0.1
  });

  observer.observe(swiperEl);
});


/* =========  BAGUETTEBOX  ==========*/

/* if (typeof baguetteBox !== 'undefined') {
  baguetteBox.run('.container-gallery', {
    buttons: true
  });
} */

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


/* ============ MODAL  ============== */

/* const privacyButton = document.querySelector('.privacy__btn')
privacyButton.addEventListener('click', openModal)

function openModal() {
  const modal = document.querySelector('#privacy-modal')
  modal.showModal()
  modal.scrollTop = 0
  document.querySelector('.modal__title').focus()

} */

const privacyButton = document.querySelector('.privacy__btn');

if (privacyButton) {
  privacyButton.addEventListener('click', () => {
    const modal = document.querySelector('#privacy-modal');
    if (!modal) return;

    modal.showModal();
    modal.scrollTop = 0;
    document.querySelector('.modal__title')?.focus();
  });
}


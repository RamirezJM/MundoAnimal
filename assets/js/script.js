
/* =========  HEADER  ==========*/

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

const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', isActive);
  });
}


/* ============ MODAL  ============== */

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


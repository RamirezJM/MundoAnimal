/* =========  SWIPER  ==========*/

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
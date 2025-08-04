/*=============================
  Header Scale
===============================*/
document.addEventListener('DOMContentLoaded', function () {
  function handleScrollHeader() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      header.classList.add('is-scale');
    } else {
      header.classList.remove('is-scale');
    }
  }

  window.addEventListener('scroll', handleScrollHeader);
});

/*=============================
  Slider WEB CM
===============================*/
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".js_slider_webcm", {
    slidesPerView: 1.75,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 20
      },
      480: {
        spaceBetween: 20
      },
      768: {
        spaceBetween: 30
      },
      1440: {
        spaceBetween: 40
      }
    }
  });
});

/*=============================
  Animation Fade Up
===============================*/
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".js-anima-up");
  let delayIndex = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("js-anima-up-on");
          // Uncomment if you only want to run once
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((el) => {
    if (el.classList.contains("js-anima-delay")) {
      el.style.transitionDelay = `${delayIndex * 0.1}s`;
      delayIndex++;
    }
    observer.observe(el);
  });
});
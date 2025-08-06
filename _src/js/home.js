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
    slidesPerView: 'auto',
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

  // Popup Video
  const popup = document.getElementById('popup_video');
  const iframe = document.getElementById('youtube_frame');
  const closeBtn = document.querySelector('.popup-close');
  const overlay = document.querySelector('.popup-overlay');

  // Open popup when click slide item
  document.querySelectorAll('.js_slider_webcm .swiper-slide').forEach(slide => {
    slide.addEventListener('click', () => {
      const videoId = slide.getAttribute('data-video-id');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;
      popup.classList.add('active');
    });
  });

  // Function close popup & reset video
  function closePopup() {
    popup.classList.remove('active');
    iframe.src = '';
  }

  // Close popup
  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', closePopup);

  // Prevent clicking on videos from closing popups (block bubbling)
  document.querySelector('.popup-content').addEventListener('click', e => {
    e.stopPropagation();
  });

});

/*=============================
  Slider Google Pixel 10
===============================*/
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".js_slider_gg_pixel10", {
    slidesPerView: 'auto',
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
        spaceBetween: 30
      }
    }
  });
});

/*=============================
  Slider Google Pixel 10 - 02
===============================*/
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".js_slider_gg_pixel10_02", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    // centeredSlides: true,
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
        spaceBetween: 20,
        centeredSlides: true,
      },
      480: {
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        spaceBetween: 30,
        centeredSlides: true,
      },
      1440: {
        spaceBetween: 30
      }
    }
  });
});

/*=============================
  Slider Google Pixel Watch
===============================*/
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".js_slider_gg_pixel_watch", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    // centeredSlides: true,
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
        spaceBetween: 20,
        centeredSlides: true,
      },
      480: {
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        spaceBetween: 30,
        centeredSlides: true,
      },
      1440: {
        spaceBetween: 30
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
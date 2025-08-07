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
  $('.js_slider_webcm').slick({
    centerMode: true,
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    variableWidth: true,
    appendDots: $('.js_slider_webcm_dots'),
  });
  $('.js_slider_webcm_prev').on('click', function () {
    $('.js_slider_webcm').slick('slickPrev');
  });

  $('.js_slider_webcm_next').on('click', function () {
    $('.js_slider_webcm').slick('slickNext');
  });
});

/*=============================
  Slider Google Pixel 10
===============================*/
document.addEventListener("DOMContentLoaded", () => {
  $('.js_slider_gg_pixel10').slick({
    centerMode: false,
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    variableWidth: true,
    appendDots: $('.js_slider_gg_pixel10_dots'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true
        }
      }
    ]
  });
  $('.js_slider_gg_pixel10_prev').on('click', function () {
    $('.js_slider_gg_pixel10').slick('slickPrev');
  });

  $('.js_slider_gg_pixel10_next').on('click', function () {
    $('.js_slider_gg_pixel10').slick('slickNext');
  });
});

/*=============================
  Slider Google Pixel 10 - 02
===============================*/
document.addEventListener("DOMContentLoaded", () => {
  $('.js_slider_gg_pixel10_02').slick({
    centerMode: false,
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    variableWidth: true,
    appendDots: $('.js_slider_gg_pixel10_02_dots'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true
        }
      }
    ]
  });
  $('.js_slider_gg_pixel10_02_prev').on('click', function () {
    $('.js_slider_gg_pixel10_02').slick('slickPrev');
  });

  $('.js_slider_gg_pixel10_02_next').on('click', function () {
    $('.js_slider_gg_pixel10_02').slick('slickNext');
  });
});

/*=============================
  Slider Google Pixel Watch
===============================*/
document.addEventListener("DOMContentLoaded", () => {
  $('.js_slider_gg_pixel_watch').slick({
    centerMode: false,
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    variableWidth: true,
    appendDots: $('.js_slider_gg_pixel_watch_dots'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true
        }
      }
    ]
  });
  $('.js_slider_gg_pixel_watch_prev').on('click', function () {
    $('.js_slider_gg_pixel_watch').slick('slickPrev');
  });

  $('.js_slider_gg_pixel_watch_next').on('click', function () {
    $('.js_slider_gg_pixel_watch').slick('slickNext');
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
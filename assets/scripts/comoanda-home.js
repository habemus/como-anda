(function () {
  'use strict';


  // get global variables
  var nlForeach = window.nlForeach;
  var animateScroll = window.animateScroll;
  var scrollTrigger = window.scrollTrigger;
  var SVGInjector = window.SVGInjector;

  /**
   * Intro animations
   */
  (function () {

    var introEl = document.querySelector('.intro');
    if (introEl) {

      scrollTrigger(introEl, {
        visibleClass: 'intro--scrolled',
        topOffset: -2 - window.innerHeight
      });

      setTimeout(function () {
        introEl.classList.add('intro--isReady');
      }, 400);

    }

    var mainContentEl = document.querySelector('.landing-main');
    if (mainContentEl) {
      scrollTrigger(mainContentEl, {
        visibleClass: 'is-visible',
        topOffset: 200 - window.innerHeight
      });
    }

    var firstSectionEl = document.getElementById('o-projeto');

    var scrollTipEl = document.querySelector('.intro-scrollTip');
    if (scrollTipEl && firstSectionEl) {
      scrollTipEl.addEventListener('click', function () {
        animateScroll(firstSectionEl, 1200);
      });
    }

    var introHeaderEl = document.querySelector('.intro-header');
    if (introHeaderEl && firstSectionEl) {
      introHeaderEl.addEventListener('click', function () {
        animateScroll(firstSectionEl, 1200);
      });
    }

  })();

  /**
   * -------------------------------------------------------------------
   * SVG
   * -------------------------------------------------------------------
   */
  (function () {

    var svgImgs = document.querySelectorAll('.svgimg');
    if (svgImgs) { SVGInjector(svgImgs); }

  })();

})();
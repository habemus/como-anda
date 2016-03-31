(function () {
  'use strict';

  // get global scope object
  var App = window.App = window.App || {};

  /**
   * Do intro animations
   */
  (function () {

    var logoEl = document.querySelector('.intro-logo');
    var taglineEl = document.querySelector('.intro-tagline');
    var charactersEl = document.querySelector('.intro-characters');
    var scrollTipEl = document.querySelector('.intro-scrollTip');

    if (logoEl && taglineEl && charactersEl && scrollTipEl) {
      
      setTimeout(function () {
        logoEl.classList.add('is-showing');
        charactersEl.classList.add('is-showing');
      }, 400);

      setTimeout(function () {
        taglineEl.classList.add('is-showing');
      }, 1000);

      setTimeout(function () {
        animateBackgroundImage(charactersEl, {
          speed: 800,
          framesCount: 11,
          baseUrl: charactersEl.getAttribute('data-animation-base-url')
        })
      }, 1400);

      if (window.pageYOffset === 0) {
        setTimeout(function () {
          scrollTipEl.classList.add('is-showing');
        }, 2400);
      }
    }

    // remove scrollTip on first scroll.
    function removeScrollTip() {
      scrollTipEl.classList.remove('is-showing');
      window.removeEventListener('scroll', removeScrollTip);
    }
    window.addEventListener('scroll', removeScrollTip);

  })();


  /**
   * Bind open menu events
   */
  (function () {

    function openMenu(target) {
      animateScroll(target, 400, function () {
        setTimeout(App.menu.open, 200);
      });
    }

    nlForeach(document.querySelectorAll('.hero'), function (el) {
      var navEl = el.querySelector('.hero-nav-button');
      if (navEl) {
        navEl.addEventListener('click', function () { openMenu(el); });
      }
    });

  })();

  /**
   * Grab hero, hero-text and every characters of the hero-title
   * and apply is-visible toggable class.
   */
  (function () {

    var heroEls = document.querySelectorAll('.hero');

    nlForeach(heroEls, function (heroEl) {

      var textEl = heroEl.querySelector('.hero-text');
      var titleEl = heroEl.querySelector('.hero-title');
      
      var arr = (textEl) ? [heroEl, textEl] : heroEl;
      nlForeach(
        arr,
        function (element, i) {
          scrollTrigger(element, { visibleClass: 'is-visible' });
        }
      );

      if (titleEl) {
        var titleCharEls = [];
        var titleCharacters = titleEl.innerHTML.split('');
        titleEl.innerHTML = '';

        for (var i = 0; i < titleCharacters.length; i++) {
          var charEl = document.createElement('SPAN');
          charEl.innerHTML = titleCharacters[i];
          titleCharEls.push(charEl);
          titleEl.appendChild(charEl);
        }

        nlForeach(
          [titleCharEls],
          function (element, i) {
            scrollTrigger(element, {
              visibleClass: 'is-visible',
              offset: Math.round(Math.random() * -100)
            });
          }
        );
      }

    });

  })();

})();

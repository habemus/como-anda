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

      scrollTrigger(heroEl, { visibleClass: 'is-visible' });

      var titleEl = heroEl.querySelector('.hero-title');
      var titleCharEls = [];

      if (titleEl) {
        var titleCharacters = titleEl.innerHTML.split('');
        titleEl.innerHTML = '';

        for (var i = 0; i < titleCharacters.length; i++) {
          var charEl = document.createElement('SPAN');
          charEl.innerHTML = titleCharacters[i];
          titleCharEls.push(charEl);
          titleEl.appendChild(charEl);
        }
      }

      scrollTrigger(titleEl, {
        offset: -40,
        onShow: function () {
          titleCharEls.forEach(function (charEl) {
            charEl.classList.add('is-visible-pre');
            setTimeout(function () {
              if (charEl.className.indexOf('is-visible-pre') !== -1) {
                charEl.classList.add('is-visible');
              }
            }, Math.round(Math.random() * 600));
          });
        },
        onHide: function () {
          nlForeach(titleCharEls, function (charEl) {
            charEl.classList.remove('is-visible', 'is-visible-pre');
          });
        }
      });

    });

  })();

})();

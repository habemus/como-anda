(function () {
  'use strict';

  // get global scope object
  var App = window.App = window.App || {};

  /**
   * Do intro animations
   */
  (function () {

    var introEl = document.querySelector('.intro');
    if (introEl) {
      setTimeout(function () {
        introEl.classList.add('intro--isReady');
      }, 400);
    }

    var charactersEl = document.querySelector('.intro-characters');
    if (charactersEl) {
      setTimeout(function () {
        animateBackgroundImage(charactersEl, {
          speed: 800,
          framesCount: 11,
          baseUrl: charactersEl.getAttribute('data-animation-base-url')
        })
      }, 1400);
    }

  })();

  /**
   * Bind scrollTip event
   */
  (function () {

    var scrollTipEl = document.querySelector('.intro-scrollTip');
    if (scrollTipEl) {
      scrollTipEl.addEventListener('click', function () {
        animateScroll(document.getElementById('o-projeto'), 400);
      });
    }

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
   * Scroll fade sections
   */
  (function () {

    nlForeach(document.querySelectorAll('.hero'), function (heroEl) {
      scrollFade(heroEl, { offset: window.innerHeight });
    });

  })();

  /**
   * Toggle hero-text is-visible class.
   */
  (function () {

    var heroEls = document.querySelectorAll('.hero');

    nlForeach(document.querySelectorAll('.hero-title'), function (titleEl) {

      var titleCharEls = [];
      var titleCharacters = titleEl.innerHTML.split('');

      titleEl.innerHTML = '';

      for (var i = 0; i < titleCharacters.length; i++) {
        var charEl = document.createElement('SPAN');
        charEl.innerHTML = titleCharacters[i];
        titleCharEls.push(charEl);
        titleEl.appendChild(charEl);
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
            }, Math.round(Math.random() * 1000));
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

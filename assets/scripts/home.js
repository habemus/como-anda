(function () {
  'use strict';

  // get global scope object
  var App = window.App = window.App || {};

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

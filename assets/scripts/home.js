(function () {
  'use strict';

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
              topOffset: Math.round(Math.random() * 200) * -1
            });
          }
        );
      }

    });

  })();

})();

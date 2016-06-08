(function () {
  'use strict';

  /**
  * -------------------------------------------------------------------
  * Update location
  * -------------------------------------------------------------------
  */
  (function () {

    // only trigger this for modern browser,
    // as replacing it manually would trigger scroll jumps that would ruin the navigation.
    if (!history || !history.pushState) { return; }

    nlForeach('.location-anchor', function (el) {
      scrollTrigger(el, {
        onShow: function () {
          history.pushState(null, null, '#' + el.getAttribute('id'));
        },
        topOffset: window.innerHeight * -0.5
      });
    });

  })();

})();

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

    /**
     * Wait some time for attaching scroll triggers
     * in order not to interfere with natural #anchor navigation
     */
    setTimeout(function () {

      nlForeach('.location-anchor', function (el) {
        scrollTrigger(el, {
          onShow: function () {
            history.pushState(null, null, '#' + el.getAttribute('id'));
          },
          topOffset: window.innerHeight * -0.5
        });
      });

    }, 1000);
  })();

})();

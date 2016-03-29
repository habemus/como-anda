(function () {
  'use strict';

  /**
   * AnimateClasses
   *
   * Animate element classes with timed out state classes.
   * This module is inspired by the likes of ng-animate and react-css-animation-group.
   *
   * Since it's not binded to any MVC framework, it really is a lot more simple than the ones that inspired it.
   * It simply animates by manually calling the animation from somewhere in your application.
   * This API, although simple, is quite flexible when you hook into things like scroll-trigger.
   *
   * `animateClass(element, animationClass, timeout [, callback]);`
   *
   * Where the animationName will be set first as `animationClass`
   * and then will be appended with `animationClass-active` after the passed timeout.
   * 
   */

  function animateClasses(el, animationClass, timeout, callback) {
    return getAnimateClasses(el, animationClass, timeout)(callback);
  };

  /**
   * Curried function.
   * Use this if you want to save animations for later or multiple uses.
   * 
   * ```
   *   var animation = getAnimateClasses(element, 'animate', 2000);
   *   animation(function () {
   *     // animation is finished.
   *   });
   * ```
   */
  function getAnimateClasses(el, animationClass, timeout) {
    if (!el || !animationClass || isNaN(timeout)) { return false; }

    var activeClass = animationClass + '-active';

    return function (callback) {
      // Imediatelly set the animationClass.
      el.classList.add(animationClass);

      // // Set the active class on the next event loop.
      setTimeout(function () { el.classList.add(activeClass); });

      // After timeout, remove animation classes and calls callback function if available.
      setTimeout(function () {
        el.classList.remove(animationClass, activeClass);
        if (typeof callback === 'function') { callback(); }
      }, timeout);
    };
  }

  /**
   * API
   */
  
  window.animateClasses = animateClasses;
  window.getAnimateClasses = getAnimateClasses; 

})();

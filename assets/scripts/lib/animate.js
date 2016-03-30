(function () {

  /**
   * Pure JS animate function.
   * Based on http://stackoverflow.com/questions/11213259/javascript-animation
   */
  function animate(element, style, unit, from, to, time, prop) {
    if (!element) { return; }
    var start = new Date().getTime();
    var timer = setInterval(function() {
      var step = Math.min(1, (new Date().getTime() - start) / time);
      if (prop) {
        element[style] = (from + step * (to - from)) + unit;
      } else {
        element.style[style] = (from + step * (to - from)) + unit;
      }
      if (step === 1) {
        clearInterval(timer);
      }
    }, 25);
    element.style[style] = from + unit;
  }

  /**
   * API
   */
  window.animate = animate;

})();

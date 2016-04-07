(function () {

  /**
   * Pure JS animate function.
   * Based on http://stackoverflow.com/questions/11213259/javascript-animation
   * and https://coderwall.com/p/hujlhg/smooth-scrolling-without-jquery.
   */
  
  function _setProp(element, style, value, unit, prop) {
    unit = unit || ''; 
    if (prop) { element[style] = value + unit; }
    else { element.style[style] = value + unit; }
  }
  
  function _getProp(element, style, prop) {
    return (prop) ? element[style] : element.style[style];
  }

  function animate(element, style, unit, target, duration, prop) {
      
    target = Math.round(target);
    duration = Math.round(duration);
    
    if (duration < 0) {
      return;
    } else if (duration === 0) {
      _setProp(element, style, target, unit, prop);
    }

    var startTime = Date.now();
    var endTime = startTime + duration;

    var startProp = _getProp(element, style, prop);
    var distance = target - startProp;

    // based on http://en.wikipedia.org/wiki/Smoothstep
    var smoothStep = function(start, end, point) {
      if (point <= start) { return 0; }
      if (point >= end) { return 1; }
      var x = (point - start) / (end - start);
      return x * x * (3 - 2 * x);
    }

    // This is to keep track of where the element's prop is
    // supposed to be, based on what we're doing.
    var previousProp = _getProp(element, style, prop);

    // This is like a think function from a game loop
    var animateFrame = function() {

      // Stop if element prop changed by other means.
      if (_getProp(element, style, prop) != previousProp) {
          return;
      }

      // Set the prop for this frame
      var now = Date.now();
      var point = smoothStep(startTime, endTime, now);
      var frameProp = Math.round(startProp + (distance * point));
      _setProp(element, style, frameProp, unit, prop);

      // Check if done
      if (now >= endTime) {
        return;
      }

      // If we were supposed to change value but didn't, then we
      // probably hit the limit, so consider it done; not
      // interrupted.
      if (_getProp(element, style, prop) === previousProp && _getProp(element, style, prop) !== frameProp) {
        return;
      } else {
        previousProp = _getProp(element, style, prop);
      }

      // Schedule next frame for execution
      setTimeout(animateFrame, 0);
    }

    // Boostrap the animation process
    setTimeout(animateFrame, 0);
  }

  /**
   * API
   */
  window.animate = animate;

})();

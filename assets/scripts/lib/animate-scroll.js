(function () {

  /**
   * Animate scrolling to target element.
   * **Depends on `animate` module.**
   */
  function animateScroll(targetEl, speed, callback) {
    
    var scrollTop = document.body.scrollTop;
    var targetScrollTop = _getOffsetTop(targetEl);

    if (scrollTop === targetScrollTop) {
      callback && callback();
    } else {
      animate(document.body, 'scrollTop', '', targetScrollTop, speed || 400, true);
      callback && setTimeout(callback, speed || 400);
    }
  }

  function _getOffsetTop(element) {
    var box = element.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var top  = box.top +  scrollTop - clientTop;

    return Math.round(top);
  }

  /**
   * API
   */
  window.animateScroll = animateScroll;
  
})();

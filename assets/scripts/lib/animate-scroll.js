(function () {

  /**
   * Animate scroll when user clicks a named anchor tag.
   * **Depends on `animate` module.**
   *
   * `<a href="#target></d>`
   */
  function animateScroll(targetEl, speed, callback) {
    
    var scrollTop = document.body.scrollTop;
    var targetScrollTop = _getOffset(targetEl);

    if (scrollTop === targetScrollTop) {
      callback && callback();
    } else {
      animate(document.body, 'scrollTop', '', scrollTop, _getOffset(targetEl), speed || 400, true);
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
(function () {

  /**
   * Autobinds animateScroll to anchor tags.
   * **Depends on `animate` and `animate-scroll` module.**
   *
   * `<a href="#target></d>`
   */
  document.body.addEventListener('click', function (e) {
    if (e.target.tagName.match(/^(a|A)$/) && e.target.getAttribute('href').match(/^#/)) {
      e.preventDefault();
      var targetEl = document.getElementById(e.target.getAttribute('href').replace(/^#/, ''));
      if (targetEl) animateScroll(targetEl);
    }
  });
  
})();

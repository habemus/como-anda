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
      var href = e.target.getAttribute('href');
      var targetId = href.replace(/^#/, '');
      var targetEl = document.getElementById(targetId);
      if (targetEl) animateScroll(targetEl);
      window.location.hash = href;
    }
  });
  
})();

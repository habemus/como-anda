(function () {
  
  /**
   * Util function to loop across every node in a nodelist.
   */
  
  function nlForeach(nodelist, fn) {
    // return if null element.
    if (!nodelist) { return }
    // query if nodelist is string.
    if (typeof nodelist === 'string') {
      nodelist = document.querySelectorAll(nodelist);
    }
    // loop through nodelist
    // or just execute callback if a single element was passed.
    if (nodelist.length) {
      for (var i = 0; i < nodelist.length; i++) {
        if (nodelist[i] && nodelist[i].length) {
          nlForeach(nodelist[i], fn);
        } else if (nodelist[i]) {
          fn(nodelist[i], i);
        }
      }
    } else if (nodelist.nodeName) {
      fn(nodelist, 0);
    }
  };

  /**
   * API
   */
  
  window.nlForeach = nlForeach;
  
})();

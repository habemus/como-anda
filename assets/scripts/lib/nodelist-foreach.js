(function () {
  
  /**
   * Util function to loop across every node in a nodelist.
   */
  
  function nlForeach(nodelist, fn) {
    if (!nodelist) { return }
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

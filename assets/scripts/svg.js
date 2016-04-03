(function () {
  'use strict';

  var svgImgs = document.querySelectorAll('.svgimg');
  console.log('svg', svgImgs);
  if (svgImgs && SVGInjector) {
    SVGInjector(svgImgs);
  }

})();

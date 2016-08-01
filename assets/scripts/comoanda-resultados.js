(function () {

  console.log('resultados')

  var SVGInjector = window.SVGInjector;
  
  /**
   * -------------------------------------------------------------------
   * SVG
   * -------------------------------------------------------------------
   */
  (function () {

    var svgImgs = document.querySelectorAll('.svgimg');
    if (svgImgs) { SVGInjector(svgImgs); }

  })();

  // ensure this is run before d3 data viz
  window.STATES_GEO_JSON_URL = window.ajax_object.ajax_url + '?action=get_states_geo_json';
})()
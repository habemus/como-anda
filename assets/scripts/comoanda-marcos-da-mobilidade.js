(function () {

  console.log('marcos da mobilidade')

  var SVGInjector = window.SVGInjector;

  /**
   * Timeline js
   */
  window.addEventListener('DOMContentLoaded', function () {
    var timelineOptions = {
      hash_bookmark: true
    };

    // The TL.Timeline constructor takes at least two arguments:
    // the id of the Timeline container (no '#'), and
    // the URL to your JSON data file or Google spreadsheet.
    // the id must refer to an element "above" this code,
    // and the element must have CSS styling to give it width and height
    // optionally, a third argument with configuration options can be passed.
    // See below for more about options.
    var timeline = new TL.Timeline(
      'timeline',
      'https://docs.google.com/spreadsheets/d/1cFTbjqKPKd3mTyYk9yBZg5YdXSJRO8Oay7OtGH45LfA/pubhtml',
      timelineOptions
    );
    
    
    // event listeners
    document.addEventListener('keydown', function (e) {
      // http://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript#5597114
      
      var keyCode = e.keyCode;
      if (keyCode === 37 || keyCode === 38) {
        // previous
        timeline.goToPrev();
        
      } else if (keyCode === 39 || keyCode === 40) {
        // next
        timeline.goToNext();
      }
    })
  });



  /**
   * -------------------------------------------------------------------
   * SVG
   * -------------------------------------------------------------------
   */
  (function () {

    var svgImgs = document.querySelectorAll('.svgimg');
    if (svgImgs) { SVGInjector(svgImgs); }

  })();

})();
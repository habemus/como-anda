(function () {
  'use strict';

  /**
   * Fades element based on window offset.
   * Depends on `scrollListener`.
   *
   * ```
   *   // html
   *   <any id='container'></any>
   *   // js
   *   scrollFade(document.getElementById('container'), {
   *     [offset: 400,]
   *     [topOffset: 400,]
   *     [bottomOffset: 400]
   *   })
   * ```
   * 
   */
  function ScrollFader(element, options) {
    if (!element || !(options && (options.offset || options.topOffset || options.bottomOffset)) ) {
      return false;
    }
    
    this.element = element;
    this.topOffset = options.topOffset || options.offset || 0;
    this.bottomOffset = options.bottomOffset || options.offset || 0;

    this._listener = scrollListener(element, this._update.bind(this));
    this._safetyListener = false;
    this._safetyTimeout = options.safetyTimeout || 1000;
    this._setupSafetyListener();
  }
  ScrollFader.prototype._update = function (distances) {
    console.log(distances);
    if (distances.absBottom > this.bottomOffset && distances.absTop <= 0) {
      if (distances.absTop > this.topOffset * -1) {
        this.element.style.opacity = (distances.absTop * -1) / this.topOffset;
      } else {
        this.element.style.opacity = 1;
      }
    } else if (distances.absBottom > 0) {
      this.element.style.opacity = distances.absBottom / this.bottomOffset;
    } else {
      this.element.style.opacity = 0;
    }
  };
  ScrollFader.prototype._setupSafetyListener = function () {
    this._update(this._listener.getDistances());
    this._lazyListener = setTimeout(this._setupSafetyListener.bind(this), this._safetyTimeout);
  };
  ScrollFader.prototype.destroy = function () {
    this._listener.destroy();
    if (this._safetyListener) {
      clearTimeout(this._safetyListener);
    }
  };

  /**
   * API
   */
  window.scrollFade = function (element, options) {
    return new ScrollFader(element, options);
  };

})(scrollListener);

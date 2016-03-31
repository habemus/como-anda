(function () {
  'use strict';

  /**
   *
   * Triggers functions when the passed element is shown or hidden by scrolling the page.
   * A visibleClass property can be passed so the class is toggled based on the element's visiblity.
   *
   * ```
   *   scrollTrigger(element, {
   *     visibleClass: string,
   *     onShow: callback,
   *     onHide: callback,
   *     topOffset: number,
   *     bottomOffset: number,
   *     offset: number
   *   });
   * ```
   */

  function ScrollTrigger(element, options) {

    if (!element || !options || (!options.onShow && !options.onHide && !options.visibleClass)) {
      return false;
    }

    this.visible = false;
    this.element = element;
    this.visibleClass = options.visibleClass;
    this.onShow = options.onShow;
    this.onHide = options.onHide;
    this.topOffset = options.topOffset || options.offset || 0;
    this.bottomOffset = options.bottomOffset || options.offset || 0;

    this._listener = scrollListener(element, this._update.bind(this));

    return this;
  };
  ScrollTrigger.prototype._updateVisibility = function (distances) {
    var visible = true;

    if (this.topOffset === 0 && this.bottomOffset === 0 && distances.abs !== 0) {
      visible = false;
    } else if (this.topOffset < 0 || this.bottomOffset < 0) {
      if (this.topOffset < 0 && distances.absTop > this.topOffset) { visible = false; }
      else if (this.bottomOffset < 0 && distances.absBottom < -this.bottomOffset) { visible = false; }
    } else if (distances.top > this.topOffset || distances.bottom < -this.bottomOffset) {
      visible = false;
    }

    this.visible = visible;
  };
  // check if element is visible and trigger callbacks if provided.
  ScrollTrigger.prototype._update = function (distances) {

    var wasVisible = this.visible;
    this._updateVisibility(distances);
    console.log(distances);

    if (!wasVisible && this.visible) {
      this.onShow && this.onShow();
      this.visibleClass && this.element.classList.add(this.visibleClass);
    } else if (wasVisible && !this.visible) {
      this.onHide && this.onHide();
      this.visibleClass && this.element.classList.remove(this.visibleClass);
    }
  };
  // remove listeners.
  ScrollTrigger.prototype.destroy = function () {
    this._listener.destroy();
  };

  /**
   * API
   */
  
  window.scrollTrigger = function (element, options) {
    return new ScrollTrigger(element, options);
  };
  
})();

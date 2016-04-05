(function () {
  'use strict';

  /**
   * Listen for scroll events and saves the current distances of window from element.
   * Can be used with a callback that listen to every scroll event,
   * or by manually calling the `getDistances` method.
   * 
   * `ScrollListener(element, fn);``
   * 
   */
  function ScrollListener(element, callback) {

    if (!element) {
      return false;
    }

    this.element = element;

    if (callback) {
      this.callback = callback;
      this._listener = window.addEventListener('scroll', this._update.bind(this));
      this._update();
    }

    return this;
  };
  ScrollListener.prototype._getOffset = function () {

    var box = this.element.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var top  = box.top +  scrollTop - clientTop;

    this._offsetTop = Math.round(top);
  };
  ScrollListener.prototype._getDistances = function () {

    var elementHeight = this.element.offsetHeight;

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var windowHeight = window.innerHeight;

    var distTopToTop = this._offsetTop - scrollTop;
    var distTopToBottom = this._offsetTop + elementHeight - scrollTop;
    var distBottomToTop = this._offsetTop - scrollTop - windowHeight;
    var distBottomToBottom = this._offsetTop + elementHeight - scrollTop - windowHeight;

    this.absDistanceToTop = distBottomToTop;
    this.absDistanceToBottom = distTopToBottom;
    this.distanceToTop = distBottomToTop >= 0 ? distBottomToTop : distTopToTop >= 0 ? 0 : distTopToTop;
    this.distanceToBottom = distBottomToBottom >= 0 ? distBottomToBottom : distTopToBottom >= 0 ? 0 : distTopToBottom;
    this.absDistance = (this.distanceToTop === 0 || this.distanceToBottom === 0 || (this.distanceToTop < 0 && this.distanceToBottom > 0)) ? 0 :
      (this.distanceToTop > 0) ? this.distanceToTop : this.distanceToBottom;
  };
  ScrollListener.prototype.getDistances = function () {
    
    this._getOffset();
    this._getDistances();

    return {
      abs: this.absDistance,
      top: this.distanceToTop,
      bottom: this.distanceToBottom,
      absTop: this.absDistanceToTop,
      absBottom: this.absDistanceToBottom
    };
  };
  ScrollListener.prototype._update = function () {
    this.callback(this.getDistances());
  };
  ScrollListener.prototype.destroy = function () {
    if (this._listener) {
      this._listener = false;
      window.removeEventListener('scroll', this._update.bind(this));
    }
  };

  /**
   * API
   */
  window.scrollListener = function (element, callback) {
    return new ScrollListener(element, callback);
  };

})();

(function () {
  'use strict';

  /**
   * Makes body property specified to change based on defined colorPoints.
   * It also sets the provided classes so other elements may change accordingly.
   *
   * e.g.
   *
   * // index.html
   * <any id='element'>
   *   <any id='target'>
   *     <any
   *       data-color-point='255,0,0'
   *       data-color-point-classname='red'></any>
   *     <any
   *       data-color-point='0,0,255'
   *       data-color-point-classname='blue'></any>
   *   </any>
   * </any>
   *
   * // script.js
   * colorBlend(
   *   document.getElementById('element'),
   *   document.getElementById('target'),
   *   ['color', 'borderColor']
   * );
   * 
   */

  function ColorBlender(element, target, props) {

    this._element = element || document.body;
    this._target = target || element || document.body;
    this._props = props || ['backgroundColor', 'color'];

    if (typeof this._props === 'string') { this._props = [this._props]; }

    this._colorPoints = this._target.querySelectorAll('[data-color-point]');
    this._colorOffsets = [];
    this._colorClassNames = [];
    this._colors = [];

    // check if there is at least two target color points.
    if (this._colorPoints.length < 2) {
      return false;
    }

    // populate main variables.
    for (var i = 0; i < this._colorPoints.length; i++) {
      var colorPoint = this._colorPoints[i];
      this._colorOffsets.push(this._getOffset(colorPoint));
      this._colorClassNames.push(this._getColorClassName(colorPoint));
      this._colors.push(this._getColorObj(colorPoint));
    }

    // check if all colors are valid.
    if (this._colors.indexOf(false) > -1) {
      return false;
    }

    // start listening
    window.addEventListener('scroll', this._update.bind(this));
    this._safetyListener = false;
    this._safetyTimeout = 1000;
    this._setupSafetyListener();

    return this;
  };
  ColorBlender.prototype._getOffset = function (element) {
    var box = element.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var top  = box.top +  scrollTop - clientTop;

    return Math.round(top);
  }
  ColorBlender.prototype._getColorClassName = function (element) {
    return element.getAttribute('data-color-point-classname');
  };
  ColorBlender.prototype._getColorObj = function (element) {
    var colorStr = element.getAttribute('data-color-point');
    if (!colorStr || !colorStr.length || !colorStr.match(/^\s*\d\d?\d?\s*,\s*\d\d?\d?\s*,\s*\d\d?\d?\s*$/)) {
      return false;
    } else {
      return colorStr.trim().split(',').map(function (c) {
        return parseInt(c.trim());
      });
    }
  };
  ColorBlender.prototype._blendColors = function (c1, c2, _percentage) {
    var percentage = _percentage || 0.5;
    
    var rDiff = c1[0] - c2[0];
    var gDiff = c1[1] - c2[1];
    var bDiff = c1[2] - c2[2];
    
    var blendedR = Math.round(c1[0] - rDiff * percentage);
    var blendedG = Math.round(c1[1] - gDiff * percentage);
    var blendedB = Math.round(c1[2] - bDiff * percentage);
    
    return [blendedR, blendedG, blendedB];
  };
  ColorBlender.prototype._colorToRgb = function (color) {
    return 'rgb(' + color.join(',') + ')';
  };
  ColorBlender.prototype._update = function () {

    /**
     * This can be REALLY optimized.
     */
    this._colorOffsets = [];
    for (var i = 0; i < this._colorPoints.length; i++) {
      var colorPoint = this._colorPoints[i];
      this._colorOffsets.push(this._getOffset(colorPoint));
    }

    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;

    var blendedColor;
    var blendedClass;

    // if before first color point. make it solid.
    if (scrollTop <= this._colorOffsets[0]) {
      blendedColor = this._colorToRgb(this._colors[0]);
      blendedClass = this._colorClassNames[0];

    // if after last color point. make it solid.
    } else if (scrollTop >= this._colorOffsets[this._colorOffsets.length - 1]) {
      blendedColor = this._colorToRgb(this._colors[this._colorOffsets.length - 1]);
      blendedClass = this._colorClassNames[this._colorOffsets.length - 1];

    // if between two points, blend them.
    } else {
      for (var i = 0; i < this._colorOffsets.length - 1; i++) {
        if (scrollTop <= this._colorOffsets[i + 1]) {
          var percentage = (scrollTop - this._colorOffsets[i]) / (this._colorOffsets[i + 1] - this._colorOffsets[i]);
          var blendedColor = this._blendColors(this._colors[i], this._colors[i + 1], percentage);
          blendedColor = this._colorToRgb(blendedColor);
          blendedClass = this._colorClassNames[i];
          break;
        }
      }
    }

    // set color into element props.
    for (var i = 0; i < this._props.length; i++) {
      this._element.style[this._props[i]] = blendedColor;
    }

    // set element class
    for (var i = 0; i < this._colorClassNames.length; i++) {
      if (this._colorClassNames[i]) {
        if (this._colorClassNames[i] === blendedClass) {
          this._element.classList.add(blendedClass);
        } else {
          this._element.classList.remove(this._colorClassNames[i]);
        }
      }
    }

  };
  ColorBlender.prototype._setupSafetyListener = function () {
    this._update();
    this._safetyListener = setTimeout(this._setupSafetyListener.bind(this), this._safetyTimeout);
  };
  ColorBlender.prototype.destroy = function () {
    window.removeEventListener('scroll', this._update.bind(this));
    if (this._safetyListener) {
      clearTimeout(this._safetyListener);
    }
  };

  /**
   * API
   */
  window.colorBlend = function (element, target, props) {
    return new ColorBlender(element, target, props);
  };

})();

(function () {
  'use strict';

  // get global scope object
  var App = window.App = window.App || {};

  // get menu element
  var menuEl = document.querySelector('.menu');

  // initial state
  var isClosed = menuEl.classList.contains('menu--isClosed');

  // animations
  var menuEnter = getAnimateClasses(menuEl, 'menu--a-enter', 400);
  var menuLeave = getAnimateClasses(menuEl, 'menu--a-leave', 400);

  // public methods
  function open() {
    isClosed = false;
    menuEnter(function () { menuEl.classList.remove('menu--isClosed'); });
  }

  function close() {
    isClosed = true;
    menuLeave(function () { menuEl.classList.add('menu--isClosed'); });
  }

  function toggle() {
    if (isClosed) { open(); }
    else { close(); }
  }

  App.menu = {
    open: open,
    close: close,
    toggle: toggle
  };

})();

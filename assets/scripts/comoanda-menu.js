/**
 * -------------------------------------------------------------------
 * Menu
 * -------------------------------------------------------------------
 */
(function () {


  // get global variables
  var nlForeach = window.nlForeach;
  var animateScroll = window.animateScroll;
  
  // get menu element
  var menuEl = document.querySelector('.menu');
  if (!menuEl) { return; }

  // get toggle menu button
  var toggleButtonEl = menuEl.querySelector('.menu-toggleButton');

  // initial state
  var isClosed = menuEl.classList.contains('menu--isClosed');

  // public methods
  function open() {
    isClosed = false;
    menuEl.classList.remove('menu--isClosed');
    document.body.classList.add('menu-body--isOpen');
    if (toggleButtonEl) { toggleButtonEl.classList.add('hamburger--isOpen'); }
  }

  function close() {
    isClosed = true;
    menuEl.classList.add('menu--isClosed');
    document.body.classList.remove('menu-body--isOpen');
    if (toggleButtonEl) { toggleButtonEl.classList.remove('hamburger--isOpen'); }
  }

  function toggle() {
    if (isClosed) { open(); }
    else { close(); }
  }

  // toggle menu button
  if (toggleButtonEl) {
    if (!isClosed) { toggleButtonEl.classList.add('hamburger--isOpen'); }
    toggleButtonEl.addEventListener('click', toggle);
  }

  var anchorRegExp = /#.*$/;

  // menu navigation
  nlForeach(menuEl.querySelectorAll('.menu-nav-item a'), function (navItemEl) {
    navItemEl.addEventListener('click', function (e) {
      var href = navItemEl.getAttribute('href');
      var targetUrl = href.replace(anchorRegExp, '');
      var targetId  = href.replace(/^(.*)\/#/, '');

      var currentUrl = window.location.toString().replace(anchorRegExp, '');

      if (targetUrl === currentUrl) {
        e.preventDefault();
        close();
        setTimeout(function () {
          var targetEl = document.getElementById(targetId);
          if (targetEl) { animateScroll(targetEl, 1200); }
        }, 400);
      }
    });
  });

})();

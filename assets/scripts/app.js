(function () {
  'use strict';


  // get global variables
  var nlForeach = window.nlForeach;
  var animateScroll = window.animateScroll;
  var scrollTrigger = window.scrollTrigger;
  var colorBlend = window.colorBlend;
  var SVGInjector = window.SVGInjector;
  var marked = window.marked;

  // get global scope object
  var App = window.App = window.App || {};


  /**
   * -------------------------------------------------------------------
   * Menu
   * -------------------------------------------------------------------
   */
  (function () {

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
      if (toggleButtonEl) { toggleButtonEl.classList.add('hamburger--isOpen'); }
    }

    function close() {
      isClosed = true;
      menuEl.classList.add('menu--isClosed');
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

  })();


  /**
   * -------------------------------------------------------------------
   * Landing
   * -------------------------------------------------------------------
   */
  (function () {

      /**
       * Intro animations
       */
      (function () {

        var introEl = document.querySelector('.intro');
        if (introEl) {
          setTimeout(function () {
            introEl.classList.add('intro--isReady');
          }, 400);
        }

        var mainContentEl = document.querySelector('.landing-main');
        if (mainContentEl) {
          scrollTrigger(mainContentEl, {
            visibleClass: 'is-visible',
            topOffset: 200 - window.innerHeight
          });
        }

      })();

      /**
       * Scroll fade sections
       */
      (function () {

        nlForeach(document.querySelectorAll('.section'), function (heroEl) {
          scrollFade(heroEl, { topOffset: window.innerHeight, bottomOffset: window.innerHeight * 0.5 });
        });

      })();

      /**
       * Section-title.
       * Bind highlight markup.
       * Bind 'is-visible' class.
       */
      (function () {

        var sectionTitleEls = document.querySelectorAll('.section-title');

        /**
         * Parse highlight markup.
         */
        var highlightRegex = /\*\*(.*)\*\*/;
        nlForeach(sectionTitleEls, function (titleEl) {
          titleEl.innerHTML = '<span>' + titleEl.innerHTML.trim().replace(highlightRegex, function (match) {
            return match.replace(/^\*\*/, '</span><strong>').replace(/\*\*$/, '<\/strong><span>');
          }) + '</span>';
        });

        /**
         * Wrap characters in SPAN tags and then toggle their visibility class randomly.
         */
        nlForeach(sectionTitleEls, function (titleEl) {
          if (!titleEl.childNodes) { return; }

          var titleCharEls = [];

          nlForeach(titleEl.childNodes, function (childNode) {
            
            var characters = childNode.innerHTML.split('');
            childNode.innerHTML = '';

            for (var i = 0; i < characters.length; i++) {
              var charEl = document.createElement('SPAN');
              charEl.innerHTML = characters[i];
              childNode.appendChild(charEl);
              titleCharEls.push(charEl);
            }

          });

          scrollTrigger(titleEl, {
            offset: -40,
            onShow: function () {
              titleCharEls.forEach(function (charEl) {
                charEl.classList.add('is-visible-pre');
                setTimeout(function () {
                  if (charEl.className.indexOf('is-visible-pre') !== -1) {
                    charEl.classList.add('is-visible');
                  }
                }, Math.round(Math.random() * 600));
              });
            },
            onHide: function () {
              nlForeach(titleCharEls, function (charEl) {
                charEl.classList.remove('is-visible', 'is-visible-pre');
              });
            }
          });

        });

      })();

    })();


  /**
   * -------------------------------------------------------------------
   * Color blend
   * -------------------------------------------------------------------
   */
  (function () {
    colorBlend();
  })();

  /**
   * -------------------------------------------------------------------
   * SVG
   * -------------------------------------------------------------------
   */
  (function () {

    var svgImgs = document.querySelectorAll('.svgimg');
    if (svgImgs) { SVGInjector(svgImgs); }

  })();


  /**
   * -------------------------------------------------------------------
   * Markdown
   * -------------------------------------------------------------------
   */
  (function () {

    nlForeach('.__markdown', function (node) {
      node.innerHTML = marked(node.innerHTML.trim());
    });

  })();

})();

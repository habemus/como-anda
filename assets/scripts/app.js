(function () {
  'use strict';


  // get global variables
  var nlForeach = window.nlForeach;
  var animateScroll = window.animateScroll;
  var scrollTrigger = window.scrollTrigger;
  var scrollFade = window.scrollFade;
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

    // menu navigation
    nlForeach(menuEl.querySelectorAll('.menu-nav-item a'), function (navItemEl) {
      navItemEl.addEventListener('click', function (e) {
        e.preventDefault();
        close();
        setTimeout(function () {
          var href = navItemEl.getAttribute('href');
          var targetId = href.replace(/^(.*)\/#/, '');
          var targetEl = document.getElementById(targetId);
          if (targetEl) { animateScroll(targetEl, 1200); }
        }, 400);
      });
    });

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

          scrollTrigger(introEl, {
            visibleClass: 'intro--scrolled',
            topOffset: -2 - window.innerHeight
          });

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

        var scrollTipEl = document.querySelector('.intro-scrollTip');
        var firstSectionEl = document.getElementById('sobre-o-projeto');
        if (scrollTipEl && firstSectionEl) {
          scrollTipEl.addEventListener('click', function () {
            animateScroll(firstSectionEl, 1200);
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

  /**
   * XDomain Request
   */
  function xdr(url, method, data, callback, errback) {
    var req;
    
    if (XMLHttpRequest) {
      req = new XMLHttpRequest();

      if ('withCredentials' in req) {
        req.open(method, url, true);
        req.onerror = errback;
        req.onreadystatechange = function() {
          if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
              callback(req.responseText);
            } else {
              errback(new Error('Response returned with non-OK status'));
            }
          }
        };
        req.send(data);
      }
    } else if (XDomainRequest) {
      req = new XDomainRequest();
      req.open(method, url);
      req.onerror = errback;
      req.onload = function() {
        callback(req.responseText);
      };
      req.send(data);
    } else {
      errback(new Error('CORS not supported'));
    }
  }

  /**
   * -------------------------------------------------------------------
   * Charts
   * -------------------------------------------------------------------
   */
  (function () {

    /**
     * Chart options
     */
    
    var barChartOptions = {
      height: 240,
      plugins: [ Chartist.plugins.tooltip() ]
    };
    
    var pieChartOptions = {
      width: 240,
      height: 240,
      donut: true,
      showLabel: false,
      plugins: [ Chartist.plugins.tooltip() ]
    };
    
    var pieChartAnimationOptions = {
      speed: 400
    };
    
    var barChartOnDraw = function (context, data, chartId) {
      animateBarChart(context);
      styleChart('bar', context, data, chartId);
    };

    var pieChartOnDraw = function (context, data, chartId) {
      animatePieChart(context);
      styleChart('slice', context, data, chartId);
    };

    /**
     * Wait for data to be setup.
     */
    
    App.charts = {};
    App.charts.setup = function (results) {
      setupSubjectsData(results);
      setupAreasData(results);
      setupBasesData(results);
      setupViewVariables(results);
    };

    // if data is already available, set it up.
    if (App.survey && App.survey.results) {
      App.charts.setup(App.survey.results);
    }

    /**
     * Fetch data from typeform.
     */
    var subjectsShouldInit = false;
    var subjectsData = false;
    var setupSubjectsData = function setupSubjectsData(results) {

      var series = [0, 0, 0, 0, 0, 0, 0];
      var labels = [
        'Comunicação e Informação',
        'Educação e Cultura',
        'Intervenção física no espaço',
        'Legislação e Políticas Públicas',
        'Mobilização',
        'Pesquisa',
        'Projetos e Planos'
      ];

      for (var i = 0, len = results.length; i < len; i++) {
        for (var j = 0, jlen = results[i].subjects.length; j < jlen ; j++) {
          if (results[i].subjects[j]) {
            series[j] = series[j] + 1;
          }
        }
      }

      // set the data
      subjectsData = {
        series: [series.map(function (o, i) {
          return { meta: 'Atuam em ' + labels[i], value: o };
        })],
        labels: labels
      };

      // create chart if it's on hold.
      if (subjectsShouldInit) {
        createSubjectsChart();
      }

    };

    function areasDataLabel(label) {
      switch (label) {
        case 'Bairro / Comunidade':
          return 'Atuam no Bairro ou Comunidade';
        case 'Cidade':
          return 'Atuam na sua cidade';
        case 'Várias Cidades':
          return 'Atuam em várias cidades';
        case 'Vários Estados':
          return 'Atuam em vários estados';
        case 'Nacional':
          return 'Atuam nacionalmente';
        case 'Internacional':
          return 'Atuam internacionalmente';
      }
    }

    var areasShouldInit = false;
    var areasData = false;
    var setupAreasData = function setupAreasData(results) {

      var series = [0, 0, 0, 0, 0, 0, 0];
      var labels = [
        'Bairro / Comunidade',
        'Cidade',
        'Várias Cidades',
        'Estado',
        'Vários Estados',
        'Nacional',
        'Internacional'
      ];

      for (var i = 0, len = results.length; i < len; i++) {
        for (var j = 0, jlen = results[i].areas.length; j < jlen; j++) {
          if (results[i].areas[j]) {
            series[j] = series[j] + 1;
          }
        }
      }

      var visibleSeries = [];
      var visibleLabels = [];
      for (var i = 0, len = series.length; i < len; i++) {
        if (series[i] > 0) {
          visibleSeries.push(series[i]);
          visibleLabels.push(labels[i]);
        }
      }

      // set the data
      areasData = {
        series: [visibleSeries.map(function (o, i) {
          return { meta: areasDataLabel(visibleLabels[i]), value: o }
        })],
        labels: visibleLabels
      };

      // create chart if it's on hold.
      if (areasShouldInit) {
        createAreasChart();
      }

    };

    var basesShouldInit = false;
    var basesData = false;
    var setupBasesData = function setupBasesData(results) {

      var seriesObj = {};
      var seriesArr = [];
      var labelsArr = [];

      for (var i = 0, len = results.length; i < len; i++) {
        var state = results[i].state;
        if (!state.length) { continue; }
        if (seriesObj[state]) { seriesObj[state] = seriesObj[state] + 1; }
        else { seriesObj[state] = 1; }
      }

      labelsArr = Object.getOwnPropertyNames(seriesObj);
      seriesArr = labelsArr.map(function (state) {
        return { meta: state, value: seriesObj[state] };
      });

      // set the data
      basesData = {
        series: seriesArr,
        labels: labelsArr
      };

      // create chart if it's on hold.
      if (basesShouldInit) {
        createBasesChart();
      }

    };
    
    /**
     * Create charts functions.
     */
    var subjectsChart;
    var subjectsChartSet = false;
    function createSubjectsChart() {
      
      if (subjectsChartSet) {
        subjectsChart.update();
        return;
      }

      if (!subjectsData) {
        subjectsShouldInit = true;
        return;
      } else {
        subjectsChartSet = true;
      }

      // build chart
      subjectsChart = new Chartist.Bar('.chart-subjects', subjectsData, barChartOptions);
      subjectsChart.on('draw', function (context) {
        barChartOnDraw(context, subjectsData.series[0], 'subjects');
      });

    }

    var areasChart;
    var areasChartSet = false;
    function createAreasChart() {
      
      if (areasChartSet) {
        areasChart.update();
        return;
      }

      if (!areasData) {
        areasShouldInit = true;
        return;
      } else {
        areasChartSet = true;
      }

      areasChart = new Chartist.Bar('.chart-areas', areasData, barChartOptions);
      areasChart.on('draw', function (context) {
        barChartOnDraw(context, areasData.series[0], 'areas');
      });
      
    }

    var basesChart;
    var basesChartSet = false;
    function createBasesChart() {
      
      if (basesChartSet) {
        basesChart.update();
        return;
      }

      if (!basesData) {
        basesShouldInit = true;
        return;
      } else {
        basesChartSet = true;
      }

      // build chart
      basesChart = new Chartist.Pie('.chart-bases', basesData, pieChartOptions);
      basesChart.on('draw', function (context) {
        pieChartOnDraw(context, basesData.series, 'bases');
      });
      
    }

    /**
     * Animate pie chart creation.
     */
    function animatePieChart(context) {
      if (context.type === 'slice') {
        var pathLength = context.element._node.getTotalLength();
        context.element.attr({ 'stroke-dasharray': pathLength + 'px ' + pathLength + 'px' });
        var animationDefinition = {
          'stroke-dashoffset': {
            id: 'anim' + context.index,
            dur: pieChartAnimationOptions.speed,
            from: -pathLength + 'px',
            to:  '0px',
            easing: Chartist.Svg.Easing.easeOutQuint,
            fill: 'freeze'
          }
        };
        if (context.index !== 0) { animationDefinition['stroke-dashoffset'].begin = 'anim' + (context.index - 1) + '.end'; }
        context.element.attr({ 'stroke-dashoffset': -pathLength + 'px' });
        context.element.animate(animationDefinition, false);
      }
    }

    /**
     * Animate bar chart creation.
     */
    function animateBarChart(context) {
      if (context.type === 'bar') {
        context.element.animate({
          y2: {
            begin: Math.floor(Math.random() * 800),
            dur: 400,
            from: context.y1,
            to: context.y2,
            easing: Chartist.Svg.Easing.easeOutQuart
          }
        });
      }
    }

    /**
     * Color chart based on id.
     */
    var chartValueIndexes = {};
    function styleChart(type, context, data, chartId) {

      if (context.type === type) {

        // make sure index cache is created for this chartId.
        if (!chartValueIndexes[chartId]) { chartValueIndexes[chartId] = {}; }

        // get new data based solely on index.
        var colorIndex = context.index;
        if (chartValueIndexes[chartId][colorIndex]) { colorIndex++; }
        chartValueIndexes[chartId][colorIndex] = true;

        // transform data to a sequenced index array.
        var colorData = data.map(function (o, i) { return i; });

        // get hsl color based on current chartId.
        var hslColor;
        switch (chartId) {
          case 'subjects':
            hslColor = [208, 100, [30, 50]];
            break;
          case 'areas':
            hslColor = [96, 100, [30, 40]];
            break;
          case 'bases':
            hslColor = [360, 100, [30, 50]];
            break;
        }

        // find saturation based on current index and data min/max.
        var minMax = Chartist.getHighLow(colorData);
        var light = Math.ceil(((colorIndex / minMax.high) * (hslColor[2][1] - hslColor[2][0])) + hslColor[2][0]);

        // element hslColor.
        var colorStyleStr = 'stroke: hsl(' + hslColor[0] + ', ' + hslColor[1] + '%, ' + light + '%);';

        // set style.
        context.element.attr({ style: colorStyleStr });
      }
    }

    /**
     * Setup view variables
     */
    function setupViewVariables(results) {

      var subjectsDetailEl = document.getElementById('subjects-detail');
      if (subjectsDetailEl) {

        var actOnMultiple = 0;
        var actOn = {};
        for (var i = 0, len = results.length; i < len; i++) {
          for (var j = 0, jlen = results[i].subjects.length; j < jlen; j++) {
            if (results[i].areas[j]) {
              if (actOn[results[i]['name']]) { actOnMultiple++; break; }
              if (!actOn[results[i]['name']]) { actOn[results[i]['name']] = 1; }
            }
          }
        }

        var percentage = Math.floor((actOnMultiple / results.length) * 100);
        subjectsDetailEl.innerHTML = actOnMultiple + ' iniciativas atuam em mais de uma frente relacionada ao tema. ' + percentage + '% do total de iniciativas mapeadas.';

      }

      var areasDetailEl = document.getElementById('areas-detail');
      if (areasDetailEl) {

        areasDetailEl.innerHTML = 'Os dados representam ' + results.length + ' iniciativas mapeadas e é atualizado constantemente.';

      }

      var basesDetailEl = document.getElementById('bases-detail');
      if (basesDetailEl) {

        var basesHighest = Chartist.getHighLow(basesData.series).high;
        var basesHighIndex = basesData.series.indexOf(basesHighest);
        var basesHighState = basesData.labels[basesHighIndex];
        var basesHighestPercentage = Math.floor((basesHighest / results.length) * 100);
        basesDetailEl.innerHTML = basesHighest + ' de ' + results.length + ' iniciativas estão localizadas em ' + basesHighState + '. ' + basesHighestPercentage + '% do total de iniciativas mapeadas.';

      }

    }
    
    /**
     * Bind creation to scroll.
     */
    var chartIds = ['subjects', 'areas', 'bases'];
    var createChart = {
      subjects: createSubjectsChart,
      areas: createAreasChart,
      bases: createBasesChart
    };

    for (var i = 0, len = chartIds.length; i < len; i++) {
      var el = document.querySelector('.chart-' + chartIds[i]);
      if (el && createChart[chartIds[i]] && typeof createChart[chartIds[i]] === 'function') {
        scrollTrigger(el, { onShow: createChart[chartIds[i]], topOffset: window.innerHeight * -0.33 });
      }
    }

    /**
     * Fade charts into view
     */
    nlForeach(document.querySelectorAll('.survey-results-item'), function (heroEl) {
      scrollFade(heroEl, { offset: window.innerHeight * 0.5 });
    });
    

  })();


})();

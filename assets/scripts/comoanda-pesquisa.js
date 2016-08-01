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

      var firstSectionEl = document.getElementById('o-projeto');

      var scrollTipEl = document.querySelector('.intro-scrollTip');
      if (scrollTipEl && firstSectionEl) {
        scrollTipEl.addEventListener('click', function () {
          animateScroll(firstSectionEl, 1200);
        });
      }

      var introHeaderEl = document.querySelector('.intro-header');
      if (introHeaderEl && firstSectionEl) {
        introHeaderEl.addEventListener('click', function () {
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
    
    /**
     * Public setup title for async loads.
     * Wrap characters in SPAN tags and then toggle their visibility class randomly.
     */
    App.setupTitle = function (titleEl) {
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

    };

    (function () {

      var sectionTitleEls = document.querySelectorAll('.section-title');

      /**
       * Parse highlight markup.
       */
      var highlightRegex = /\*\*([^\*]*)\*\*/g;
      nlForeach(sectionTitleEls, function (titleEl) {
        titleEl.innerHTML = '<span>' + titleEl.innerHTML.trim().replace(highlightRegex, function (match) {
          return match.replace(/^\*\*/, '</span><strong>').replace(/\*\*$/, '<\/strong><span>');
        }) + '</span>';
      });

      nlForeach(sectionTitleEls, function (titleEl) {
        if (titleEl.className.indexOf('section-title--async') === -1) {
          App.setupTitle(titleEl);
        }
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
      fullWidth: true,
      plugins: [ Chartist.plugins.tooltip({ metaIsHTML: true }) ]
    };
    
    var pieChartOptions = {
      width: 240,
      height: 240,
      donut: true,
      showLabel: false,
      plugins: [ Chartist.plugins.tooltip({ metaIsHTML: true }) ]
    };
    
    var pieChartAnimationOptions = {
      speed: 400
    };
    
    var barChartOnDraw = function (context, data, chartId) {
      drawBarChartLabels(context);
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
     * Tooltip Values
     */
    function tooltipValue(prefix, names) {
      var namesStr = names.slice(0, 5).join(', <br/>');
      if (names.length > 5) {
        var remainingStr;
        if (names.length === 5 + 1) {  remainingStr = '<br>e mais uma organização.'; }
        else { remainingStr = '<br>e mais ' + (names.length - 5) + ' organizações.'; }
        namesStr += remainingStr;
      }
      return '<strong>' + prefix + '</strong>: <br/>' + namesStr;
    }

    /**
     * Fetch data from typeform.
     */
    var subjectsShouldInit = false;
    var subjectsData = false;
    var setupSubjectsData = function setupSubjectsData(results) {

      var series = [0, 0, 0, 0, 0, 0, 0, 0];
      var seriesNames = series.map(function () { return []; });
      var labels = [
        'Comunicação e Informação',
        'Educação e Cultura',
        'Intervenção física no espaço',
        'Legislação e Políticas Públicas',
        'Mobilização',
        'Pesquisa',
        'Projetos e Planos',
        'Outros'
      ];

      for (var i = 0, len = results.length; i < len; i++) {
        for (var j = 0, jlen = results[i].subjects.length; j < jlen ; j++) {
          if (results[i].subjects[j]) {
            series[j] = series[j] + 1;
            seriesNames[j].push(results[i].name);
          }
        }
      }

      // set the data
      subjectsData = {
        series: [series.map(function (o, i) {
          return { meta: tooltipValue(labels[i], seriesNames[i]), value: o };
        })],
        labels: labels
      };

      // create chart if it's on hold.
      if (subjectsShouldInit) {
        createSubjectsChart();
      }

    };

    var areasShouldInit = false;
    var areasData = false;
    var setupAreasData = function setupAreasData(results) {

      var series = [0, 0, 0, 0, 0, 0, 0];
      var seriesNames = series.map(function () { return []; });
      var labels = [
        'Bairro / Comunidade',
        'Cidade',
        'Região metropolitana',
        'Estado',
        'Vários Estados',
        'Nacional',
        'Internacional'
      ];

      for (var i = 0, len = results.length; i < len; i++) {
        for (var j = 0, jlen = results[i].areas.length; j < jlen; j++) {
          if (results[i].areas[j]) {
            series[j] = series[j] + 1;
            seriesNames[j].push(results[i].name);
          }
        }
      }

      var visibleSeries = [];
      var visibleSeriesNames = [];
      var visibleLabels = [];
      for (var i = 0, len = series.length; i < len; i++) {
        if (series[i] > 0) {
          visibleSeries.push(series[i]);
          visibleSeriesNames.push(seriesNames[i]);
          visibleLabels.push(labels[i]);
        }
      }

      // set the data
      areasData = {
        series: [visibleSeries.map(function (o, i) {
          return { meta: tooltipValue(visibleLabels[i], visibleSeriesNames[i]), value: o };
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
        var state = results[i].state || 'Sede indefinida';
        if (seriesObj[state]) {
          seriesObj[state]['count']++;
          seriesObj[state]['names'].push(results[i].name)
        } else {
          seriesObj[state] = { count: 1, names: [results[i].name] };
        }
      }

      labelsArr = Object.getOwnPropertyNames(seriesObj);
      seriesArr = labelsArr.map(function (state) {
        return { meta: tooltipValue(state, seriesObj[state]['names']), value: seriesObj[state]['count'] };
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
     * Draw bar chart labels based on windows width. 
     */
    function drawBarChartLabels(context) {
      if (context.type === 'label' &&
          window.innerWidth <= 560 &&
          context.element._node.innerHTML.indexOf('ct-horizontal') > -1) {
        context.element._node.innerHTML = '';
      }
    }

    /**
     * Animate pie chart creation.
     */
    function animatePieChart(context) {
      if (context.type === 'slice') {

        var pathLength = context.element._node.getTotalLength();
        context.element.attr({ 'stroke-dasharray': pathLength + 'px ' + pathLength + 'px' });
        context.element.attr({ 'stroke-dashoffset': -pathLength + 'px' });
        context.element.animate({
          'stroke-dashoffset': {
            dur: 400,
            from: -pathLength + 'px',
            to: 0,
            easing: Chartist.Svg.Easing.easeOutQuint,
            fill: 'freeze'
          }
        });

        // var pathLength = context.element._node.getTotalLength();
        // context.element.attr({ 'stroke-dasharray': pathLength + 'px ' + pathLength + 'px' });
        // var animationDefinition = {
        //   'stroke-dashoffset': {
        //     id: 'anim' + context.index,
        //     dur: pieChartAnimationOptions.speed,
        //     from: -pathLength + 'px',
        //     to:  '0px',
        //     easing: Chartist.Svg.Easing.easeOutQuint,
        //     fill: 'freeze'
        //   }
        // };
        // if (context.index !== 0) { animationDefinition['stroke-dashoffset'].begin = 'anim' + (context.index - 1) + '.end'; }
        // context.element.attr({ 'stroke-dashoffset': -pathLength + 'px' });
        // context.element.animate(animationDefinition, false);
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
            hslColor = [25, 100, [20, 60]];
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

      nlForeach('.survey-var-results-total', function (el) {
        el.innerHTML = results.length;
      });

      nlForeach('.section-title--async', function (el) {
        el.innerHTML = el.innerHTML.replace('{total}', results.length);
        App.setupTitle(el);
        el.classList.remove('section-title--async');
      });

      var resultsNamesEl = document.querySelector('.survey-results-names');
      if (resultsNamesEl) {

        var sortedResults = results.concat().sort(function compare(_a, _b) {
          var a = _a.name.toLowerCase();
          var b = _b.name.toLowerCase();
          if (a < b) { return -1; }
          if (a > b) { return 1; }
          return 0;
        });

        var resultsNamesListEl = document.getElementById('results-names');
        if (resultsNamesListEl) {
          resultsNamesListEl.innerHTML = sortedResults.map(function (result) {
            return '<li class="survey-results-names-item">' + result.name + '</li>';
          }).join('');
        }

        nlForeach('.survey-results-names-open', function (el) {
          el.addEventListener('click', function () {
            resultsNamesEl.classList.add('survey-results-names--isOpen');
            document.body.classList.add('survey-results-names-body--isOpen');
          });
        });

        nlForeach('.survey-results-names-closeclick', function (el) {
          el.addEventListener('click', function (e) {
            if (e.target === el) {
              resultsNamesEl.classList.remove('survey-results-names--isOpen');
              document.body.classList.remove('survey-results-names-body--isOpen');
            }
          });
        });

      }

      var subjectsDetailEl = document.getElementById('subjects-detail');
      if (subjectsDetailEl) {

        var actOnMultipleSubjects = 0;
        var actOnSubjects = {};
        for (var i = 0, len = results.length; i < len; i++) {
          for (var j = 0, jlen = results[i].subjects.length; j < jlen; j++) {
            if (results[i].subjects[j]) {
              if (actOnSubjects[results[i]['name']]) { actOnMultipleSubjects++; break; }
              if (!actOnSubjects[results[i]['name']]) { actOnSubjects[results[i]['name']] = 1; }
            }
          }
        }

        var percentage = Math.floor((actOnMultipleSubjects / results.length) * 100);
        subjectsDetailEl.innerHTML = actOnMultipleSubjects + ' organizações atuam em mais de uma abordagem. ' + percentage + '% do total de organizações mapeadas.';

      }

      var areasDetailEl = document.getElementById('areas-detail');
      if (areasDetailEl) {

        var actOnMultipleAreas = 0;
        var actOnAreas = {};
        for (var i = 0, len = results.length; i < len; i++) {
          for (var j = 0, jlen = results[i].subjects.length; j < jlen; j++) {
            if (results[i].areas[j]) {
              if (actOnAreas[results[i]['name']]) { actOnMultipleAreas++; break; }
              if (!actOnAreas[results[i]['name']]) { actOnAreas[results[i]['name']] = 1; }
            }
          }
        }

        var percentage = Math.floor((actOnMultipleAreas / results.length) * 100);
        areasDetailEl.innerHTML = actOnMultipleAreas + ' organizações atuam em mais de uma escala. ' + percentage + '% do total de organizações mapeadas.';

      }

      var basesDetailEl = document.getElementById('bases-detail');
      if (basesDetailEl) {

        // var basesDataSeriesValue = basesData.series.map(function (serie) { return serie.value; });
        // var basesHighest = Chartist.getHighLow(basesDataSeriesValue).high;
        // var basesHighIndex = basesDataSeriesValue.indexOf(basesHighest);
        // var basesHighState = basesData.labels[basesHighIndex];
        // var basesHighestPercentage = Math.floor((basesHighest / results.length) * 100);
        // basesDetailEl.innerHTML = basesHighest + ' de ' + results.length + ' organizações estão localizadas em ' + basesHighState + '. ' + basesHighestPercentage + '% do total de organizações mapeadas.';

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

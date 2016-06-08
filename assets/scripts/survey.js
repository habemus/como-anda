(function () {

  /**
   * Fetch data
   */
  (function () {
    jQuery.get(ajax_object.ajax_url, { action: 'get_typeform_results' }, function(_results) {

      var unparsedResults = JSON.parse(_results);
      var results = [];

      // map answers.
      for (var i = 0, len = unparsedResults.responses.length; i < len; i++) {
        var response = unparsedResults.responses[i];
        
        // save array variables
        var subjects = [];
        var areas = [];

        /**
         * subjects
         * - Qual a abordagem da sua organização sobre o tema da mobilidade a pé?
         * 0 - Comunicação e Informação
         * 1 - Educação e Cultura
         * 2 - Intervenção física no espaço
         * 3 - Legislação e Políticas Públicas
         * 4 - Mobilização
         * 5 - Pesquisa
         * 6 - Projetos e Planos
         * 7 - Outros
         */
        subjects.push(!!response.answers['list_19882975_choice_25541116'].length);
        subjects.push(!!response.answers['list_19882975_choice_25541117'].length);
        subjects.push(!!response.answers['list_19882975_choice_25541118'].length);
        subjects.push(!!response.answers['list_19882975_choice_25541119'].length);
        subjects.push(!!response.answers['list_19882975_choice_25541120'].length);
        subjects.push(!!response.answers['list_19882975_choice_25541121'].length);
        subjects.push(!!response.answers['list_19882975_choice_25541122'].length);
        subjects.push(!!response.answers['list_19882975_other'].length);

        /**
         * areas
         * - Qual é a área de atuação da sua organização?
         * 0 - Bairro / Comunidade
         * 1 - Cidade
         * 2 - Regiões Metropolitanas (Várias Cidades)
         * 3 - Estado
         * 4 - Vários Estados
         * 5 - Nacional
         * 6 - Internacional
         */
        areas.push(!!response.answers['list_19882027_choice_25539860'].length);
        areas.push(!!response.answers['list_19882027_choice_25539861'].length);
        areas.push(!!response.answers['list_19882027_choice_25539862'].length);
        areas.push(!!response.answers['list_19882027_choice_25539863'].length);
        areas.push(!!response.answers['list_19882027_choice_25539864'].length);
        areas.push(!!response.answers['list_19882027_choice_25539865'].length);
        areas.push(!!response.answers['list_19882027_choice_25539866'].length);

        // name
        results.push({
          name: response.answers['textfield_19881669'],
          city: response.answers['dropdown_19881672'],
          state: response.answers['dropdown_20020978'],
          subjects: subjects,
          areas: areas
        });

      }

      /**
       * Ordering results
       */
      // results.sort(function compare(a, b) {
      //   if (a.name < b.name) { return -1; }
      //   if (a.name > b.name) { return 1; }
      //   return 0;
      // });

      /**
       * API
       */
      var App = window.App = window.App || {};
      App.survey = { results: results };

      /**
       * if charts are setup, trigger their creation.
       */
      if (App.charts && App.charts.setup) { App.charts.setup(results); }

    });
  })();

})();

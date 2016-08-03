<div class='legislation'>

  <section 
    id="legis"
    class='section section--style-centered location-anchor'
    data-color-point='79, 123, 51'>
    <h1 class='section-title'>**como anda** a legislação</h1>
    
    <div class='legislation-explanantion-text'>
      <p><?php the_field('legislation_explanation_text', 'options'); ?></p>
    </div>

    <form id="legis-controls">
      
      <select name="elemento" id="legis-elemento">
        <option value="_all">elemento</option>
      </select>
      
      <select name="aspecto" id="legis-aspecto">
        <option value="_all">aspecto</option>
      </select>
      
      <select name="esfera-de-governo" id="legis-esfera-de-governo">
        <option value="_all">esfera de governo</option>
      </select>
      
      <select name="local" id="legis-local">
        <option value="_all">local</option>
      </select>
      
      <select name="ano" id="legis-ano">
        <option value="_all">ano</option>
      </select>
      
    </form>
    
    <ul id="legis-entries">
      
    </ul>
    
    <div id="legis-empty-results" hidden="true">
      Nenhum resultado foi encontrado para os critérios selecionados.<br>
      Por favor selecione outra combinação de critérios.
    </div>
  </section>

</div>

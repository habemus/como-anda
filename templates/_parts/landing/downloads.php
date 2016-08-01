<div class='downloads'>

  <section
    id='downloads'
    class='section section--style-centered location-anchor'
    data-color-point='230, 114, 53'>
    <h1 class='section-title'>downloads **como anda**</h1>

    <article class='downloads-action'>

      <div class='downloads-explanantion-text'>
        <p><?php the_field('downloads_explanation_text', 'options'); ?></p>
      </div>

      <a
        target="_blank"
        href="<?php the_field('download_results_xls', 'options'); ?>"
        class="button button--size-large downloads-action-button">
        planilha com resultado integral da pesquisa .xls
      </a>
      <a
        target="_blank"
        href="<?php the_field('download_report_url', 'options'); ?>"
        class="button button--size-large downloads-action-button">
        relatório completo sobre a pesquisa .pdf
      </a>
      <a
        target="_blank"
        href="http://google.com"
        class="button button--size-large downloads-action-button">
        fichas resumo sobre as organizações pesquisadas
      </a>
      <a
        target="_blank"
        href="<?php the_field('download_legislation_url', 'options'); ?>"
        class="button button--size-large downloads-action-button">
        planilha completa de legislação .xls
      </a>

    </article>
  </section>

</div>

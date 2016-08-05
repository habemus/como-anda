<div class='survey'>

  <!--
  <div class='survey-results-names survey-results-names-closeclick'>
    <article class='survey-results-names-content'>
      <button class='survey-results-names-close survey-results-names-closeclick'><span class='fa fa-close survey-results-names-closeclick'></span></button>
      <h1 class='survey-results-names-title'>Essas são as organizações que já foram mapeadas pelo COMO ANDA.</h1>
      <ul id='results-names' class='survey-results-names-list'></ul>
    </article>
  </div>

  <article
    class='section survey-results'
    data-color-point='255, 205, 32'>
    <h1 class='section-title section-title--async'><?php the_field('survey_results_highlight', 'options', false); ?></h1>
    <p class='survey-results-disclaimer'>
      Os dados representam <span class='survey-var-results-total'></span> organizações mapeadas e são atualizados constantemente.<br />
      <button class='survey-results-names-open'>Clique aqui para ver a lista de organizações mapeadas.</button>
    </p>
    
    <div class='survey-results-list'>
      <section class='survey-results-item bar-chart'>
        <div class='survey-results-item-content'>
          <h1 class='survey-results-item-title'><?php the_field('survey_subjects_highlight', 'options', false); ?></h1>
          <div class='survey-results-item-chart chart-subjects'></div>
          <p class='survey-results-item-description __markdown'><?php the_field('survey_subjects_description', 'options', false); ?></p>
          <p id='subjects-detail' class='survey-results-item-details'></p>
        </div>
      </section>

      <section class='survey-results-item bar-chart'>
        <div class='survey-results-item-content'>
          <h1 class='survey-results-item-title'><?php the_field('survey_areas_highlight', 'options', false); ?></h1>
          <div class='survey-results-item-chart chart-areas'></div>
          <p class='survey-results-item-description __markdown'><?php the_field('survey_areas_description', 'options', false); ?></p>
          <p id='areas-detail' class='survey-results-item-details'></p>
        </div>
      </section>

      <section class='survey-results-item pie-chart'>
        <div class='survey-results-item-content'>
          <h1 class='survey-results-item-title'><?php the_field('survey_bases_highlight', 'options', false); ?></h1>
          <div class='survey-results-item-chart chart-bases'></div>
          <p class='survey-results-item-description __markdown'><?php the_field('survey_bases_description', 'options', false); ?></p>
          <p id='bases-detail' class='survey-results-item-details'></p>
        </div>
      </section>
    </div>

  </article>
  -->

  <section
    id='participe'
    class='section section--style-centered location-anchor'
    data-color-point='255, 205, 32'>
    <h1 class='section-title'><?php the_field('survey_action_title', 'options'); ?></h1>
    <article class='survey-action'>
      
      <a data-mode="1" target="_blank" href='<?php the_field('survey_1_url', 'options'); ?>' class="typeform-share button button--size-large survey-action-button"><?php the_field('survey_1_text', 'options', false); ?></a>
      <a data-mode="1" target="_blank" href='<?php the_field('survey_2_url', 'options'); ?>' class="typeform-share button button--size-large survey-action-button"><?php the_field('survey_2_text', 'options', false); ?></a>

      <a target="_blank" href="<?php the_field('survey_newsletter_url', 'options'); ?>" class="button button--size-large survey-action-button"><?php the_field('survey_newsletter_text', 'options', false); ?></a>
      <script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}id=id+'_';})()</script>

      <div class='survey-action-disclaimer'><?php the_field('survey_action_highlight', 'options'); ?></div>
      
      <a data-mode="1"
        target="_blank"
        href="../resultados"
        class="button button--size-large survey-action-button survey-explore">
        explore o resultado da pesquisa
      </a>

      <div class='survey-action-character-1 section-character' style='background-image: url("<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char9.png")'></div>
      <div class='survey-action-character-2 section-character' style='background-image: url("<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char1.png")'></div>

    </article>
  </section>

</div>

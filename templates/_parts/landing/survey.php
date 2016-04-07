<div class='survey'>

  <article
    class='section survey-results'
    data-color-point='255, 205, 32'>
    <h1 class='section-title'><?php the_field('survey_results_highlight', 'options', false); ?></h1>
    
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
        <p class='survey-results-item-description __markdown'><?php the_field('survey_bases_description', 'options', false); ?></p>
        <div class='survey-results-item-chart chart-bases'></div>
        <p id='bases-detail' class='survey-results-item-details'></p>
      </div>
    </section>

  </article>

  <section
    id='<?php echo slugify(get_field('survey_action_title', 'options')); ?>'
    class='section section--style-centered'
    data-color-point='255, 205, 32'>
    <h1 class='section-title'><?php the_field('survey_action_title', 'options'); ?></h1>
    <article class='survey-action'>
      
      <a data-mode="1" target="_blank" href='<?php the_field('survey_1_url', 'options'); ?>' class="typeform-share button button--size-large survey-action-button"><?php the_field('survey_1_text', 'options', false); ?></a>
      <a data-mode="1" target="_blank" href='<?php the_field('survey_2_url', 'options'); ?>' class="typeform-share button button--size-large survey-action-button"><?php the_field('survey_2_text', 'options', false); ?></a>
      <a target="_blank" href="<?php the_field('survey_newsletter_url', 'options'); ?>" class="button button--size-large survey-action-button"><?php the_field('survey_newsletter_text', 'options', false); ?></a>
      <script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}id=id+'_';})()</script>

      <div class='survey-action-disclaimer'><?php the_field('survey_action_highlight', 'options'); ?></div>
      
      <div class='survey-action-character-1 section-character' style='background-image: url("<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char9.png")'></div>
      <div class='survey-action-character-2 section-character' style='background-image: url("<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char1.png")'></div>

    </article>
  </section>

</div>

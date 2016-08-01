<div class='survey'>

  <section
    id='participe'
    class='section section--style-centered location-anchor'
    data-color-point='230, 114, 53'>
    <h1 class='section-title'><?php the_field('survey_action_title', 'options'); ?></h1>
    <h1 class='section-title'>downloads **como anda**</h1>
    <article class='survey-action'>
      
      <a data-mode="1" target="_blank" href='<?php the_field('survey_1_url', 'options'); ?>' class="typeform-share button button--size-large survey-action-button"><?php the_field('survey_1_text', 'options', false); ?></a>
      <a data-mode="1" target="_blank" href='<?php the_field('survey_2_url', 'options'); ?>' class="typeform-share button button--size-large survey-action-button"><?php the_field('survey_2_text', 'options', false); ?></a>
      
      <a data-mode="1"
        target="_blank"
        href="http://google.com"
        class="button button--size-large survey-action-button">
        explore o resultado parcial da pesquisa
      </a>

      <a target="_blank" href="<?php the_field('survey_newsletter_url', 'options'); ?>" class="button button--size-large survey-action-button"><?php the_field('survey_newsletter_text', 'options', false); ?></a>
      <script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}id=id+'_';})()</script>

      <div class='survey-action-disclaimer'><?php the_field('survey_action_highlight', 'options'); ?></div>
      
      <div class='survey-action-character-1 section-character' style='background-image: url("<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char9.png")'></div>
      <div class='survey-action-character-2 section-character' style='background-image: url("<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char1.png")'></div>

    </article>
  </section>

</div>

<?php oed_helpers::get_template_parts( array('_parts/html-header') ); ?>

<section class='landing'>
  
  <div class='landing-main'>
    <?php get_template_part('_parts/landing/menu'); ?>
    <?php get_template_part('_parts/landing/project'); ?>
    <?php get_template_part('_parts/landing/survey'); ?>
    <?php get_template_part('_parts/landing/timeline'); ?>
    <?php get_template_part('_parts/landing/legislation'); ?>
    <?php get_template_part('_parts/landing/downloads'); ?>
    <?php get_template_part('_parts/landing/news'); ?>
    <?php get_template_part('_parts/landing/about'); ?>
  </div>

</section>

<?php oed_helpers:: get_template_parts( array('_parts/html-footer') ); ?>

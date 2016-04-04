<?php oed_helpers::get_template_parts( array('_parts/html-header') ); ?>

<section class='landing'>

  <?php get_template_part('_parts/landing/menu'); ?>
  <?php get_template_part('_parts/landing/project'); ?>
  <?php get_template_part('_parts/landing/survey'); ?>
  <?php get_template_part('_parts/landing/news'); ?>
  <?php get_template_part('_parts/landing/about'); ?>

</section>

<?php oed_helpers:: get_template_parts( array('_parts/html-footer') ); ?>

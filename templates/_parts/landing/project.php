<div id='o-projeto' class='project location-anchor'>

  <?php 
    if ( have_rows('about_project_sections', 'options') ) :
      while ( have_rows('about_project_sections', 'options') ) : the_row(); ?>
    <section
      class='section'
      data-color-point='<?php get_theme_color(get_sub_field('background_color')); ?>'>
      <h1 class='section-title'><?php echo strip_tags(get_sub_field('highlight')); ?></h1>
      <div class='section-content'>
        <div class='project-content'><?php the_sub_field('text'); ?></div>
      </div>
    </section>
  <?php endwhile; endif; ?>

</div>

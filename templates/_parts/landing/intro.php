<div
  id="intro"
  class='section'>
  <div class='intro<?php if (get_field('intro_video', 'options')) { echo ' intro--style-video'; } ?>'>
    
    <header class='intro-header'>
      <h1 class='intro-title'>como anda</h1>
      <div class='intro-logo'>
        <img class='svgimg' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/logo-comoanda-vertical.svg' />
      </div>
      <div class='intro-tagline'>
        <img class='svgimg' alt='quem promove a mobilidade a pé?' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/tagline-comoanda-vertical.svg' />
      </div>
    </header>

    <?php if (get_field('intro_video', 'options')) : ?>
      <div class='intro-video'><?php the_field('intro_video', 'options'); ?></div>
    <?php endif; ?>

    <?php
      $frames = array( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 );
      $rndFrame = $frames[array_rand($frames)];
    ?>
    <div class='intro-character section-character' style='background-image: url("<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char<?php echo $rndFrame; ?>.png")'></div>

  </div>
</div>

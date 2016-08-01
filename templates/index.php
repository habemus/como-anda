<?php oed_helpers::get_template_parts( array('_parts/html-header') ); ?>

<section class='landing'>
  <div
    id="home"
    class='section'>

    <header>
      <h1 class='home-title'>como anda</h1>
      <div class='home-logo'>
        <img
          class='svgimg'
          data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/como_anda-assinaturas-horizontal.svg' />
      </div>
      <?php
        $frames = array( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 );
        $rndFrame = $frames[array_rand($frames)];
      ?>
      <div class='home-character'>
        <img
          src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-<?php echo $rndFrame; ?>.svg' />
      </div>
    </header>

    <?php if (get_field('home_video', 'options')) : ?>
      <!-- for now, no videos are supported -->
      <!-- <div class='home-video'><?php the_field('home_video', 'options'); ?></div> -->
    <?php endif; ?>

    <div class="actions">

      <a
        target="_blank"
        href="resultados"
        class="button button--size-large survey-action-button">
        explore os resultados
      </a>
      
      <a
        href="pesquisa"
        class="button button--size-large survey-action-button">
        conheça a pesquisa
      </a>

    </div>
  </div>


</section>

<?php oed_helpers:: get_template_parts( array('_parts/html-footer') ); ?>

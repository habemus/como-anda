<?php oed_helpers::get_template_parts( array('_parts/html-header', '_parts/header') ); ?>

<section class='main'>

  <header
    class='intro'
    data-color-point='255, 255, 255'>
    <hgroup class='intro-hgroup'>
      <h1 class='intro-title'>como anda</h1>
      <div class='intro-logo'>
        <img class='svgimg' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/logo-comoanda-vertical.svg' />
      </div>
      <div class='intro-tagline'>
        <img class='svgimg' alt='quem promove a mobilidade a pé?' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/tagline-comoanda-vertical.svg' />
      </div>
    </hgroup>
    <div class='intro-illustration'>
      <div class='intro-characters' data-animation-base-url='<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char${frame}.png'></div>
      <div class="intro-floorline"></div>
    </div>
    <p class='intro-scrollTip'>
      <img class='svgimg' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/arrow-down.svg' />
    </p>
  </header>

  <div id='o-projeto'>
    <?php
      if ( have_rows('about_project_sections', 'options') ) :
        while ( have_rows('about_project_sections', 'options') ) : the_row(); ?>

          <?php if (get_sub_field('type') === 'video') : ?>
            
            <section
              class='hero hero--style-inset hero--color-<?php the_sub_field('background_color'); ?>'
              data-color-point='<?php get_theme_color(get_sub_field('background_color')); ?>'>
              <div class='embed'><?php the_sub_field('video'); ?></div>
            </section>

          <?php else : ?>

            <section
              class='hero hero--color-<?php the_sub_field('background_color'); ?>'
              data-color-point='<?php get_theme_color(get_sub_field('background_color')); ?>'>
              <header class='hero-header'>
                
                <h1 class='hero-title'>
                  <?php the_sub_field('highlight', false, false); ?>
                </h1>
                
                <nav class='hero-nav'>
                  <div class='hero-nav-logo logo'>
                    <h1 class='hero-nav-logo-title'>como anda</h1>
                    <p class='hero-nav-logo-image'>
                      <img class='svgimg' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/logo-comoanda-horizontal.svg' />
                    </p>
                  </div>
                  <button
                    type='button'
                    alt='close menu'
                    class='hero-nav-button hamburger'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </nav>

              </header>
              <p class='hero-text'>
                <?php the_sub_field('text', false, false); ?>
              </p>
            </section>

          <?php endif; ?>

        <?php endwhile;
      endif;
    ?>
  </div>

  <section
    id='quem-faz-parte'
    class='hero hero--style-inset hero--style-inset-2 hero--color-<?php the_field('survey_results_background_color', 'options'); ?>'
    data-color-point='<?php get_theme_color(get_field('survey_results_background_color', 'options')); ?>'>
    <header class='hero-header'>
      <h1 class='hero-title'>nossos resultados</h1>
      <div class='hero-chart'>
        <img src='<?php echo get_bloginfo('template_directory'); ?>/assets/images/comoanda-grafico.jpg' />
      </div>
    </header>
  </section>

  <section
    id='participe'
    class='hero hero--color-green'
    data-color-point='177, 214, 152'>
    <header class='hero-header'>
      
      <h1 class='hero-title'>Participe da nossa pesquisa</h1>
      
      <nav class='hero-nav'>
        <div class='hero-nav-logo logo'>
          <h1 class='hero-nav-logo-title'>como anda</h1>
          <p class='hero-nav-logo-image'>
            <img class='svgimg' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/logo-comoanda-horizontal.svg' />
          </p>
        </div>
        <button
          type='button'
          alt='close menu'
          class='hero-nav-button hamburger'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

    </header>

    <div class='hero-content'>
      <p class='textblock'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <a class='button' href='#'>Já possuo uma iniciativa e gostaria de participar.</a>
      <a class='button' href='#'>Não atuo atualmente mas tenho interesse em atuar.</a>
      <a class='button' href='#'>Não, mas gostaria de me manter informado sobre o assunto.</a>
    </div>
  </section>

  <?php $news_query = getNewsQuery('10', false); ?>
  <?php if ( $news_query->have_posts() ) : ?>

    <section
      id='noticias'
      class='hero'
      data-color-point='224, 224, 224'>
      <header class='hero-header'>
        
        <h1 class='hero-title'>Últimas Notícias</h1>
        
        <nav class='hero-nav'>
          <div class='hero-nav-logo logo'>
            <h1 class='hero-nav-logo-title'>como anda</h1>
            <p class='hero-nav-logo-image'>
              <img class='svgimg' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/logo-comoanda-horizontal.svg' />
            </p>
          </div>
          <button
            type='button'
            alt='close menu'
            class='hero-nav-button hamburger'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

      </header>

      <section class='hero-content news'>
        <ul class='news-list'>

          <?php while ($news_query->have_posts()) : $news_query->the_post(); ?>
            <li class='news-item'>
              <a class='news-item-link' target='_blank' href='<?php the_field('link'); ?>'>
                <h1 class='news-item-title'><?php the_title(); ?></h1>
                <time class='news-item-date'><?php the_time(); ?></time>
                <p class='news-item-excerpt'><?php the_field('excerpt', false, false); ?></p>
              </a>
            </li>
          <?php endwhile; ?>

        </ul>
        <a class='news-more' href='#'>ver todas as notícias</a>
      </section>

    </section>
  <?php endif; ?>

  <section
    id='quem-somos'
    class='hero hero--color-white'
    data-color-point='255, 255, 255'>
    <header class='hero-header'>
      
      <h1 class='hero-title'>Quem somos</h1>
      
      <nav class='hero-nav'>
        <div class='hero-nav-logo logo'>
          <h1 class='hero-nav-logo-title'>como anda</h1>
          <p class='hero-nav-logo-image'>
            <img class='svgimg' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/logo-comoanda-horizontal.svg' />
          </p>
        </div>
        <button
          type='button'
          alt='close menu'
          class='hero-nav-button hamburger'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

    </header>

    <div class='hero-content'>
      <?php
        if ( have_rows('organizations', 'options') ) :
          while ( have_rows('organizations', 'options') ) : the_row(); ?>

            <?php $logo = get_sub_field('logo'); ?>
            <article class='infoblock'>
              <div class='infoblock-image'>
                <img src='<?php echo $logo['sizes']['thumbnail']; ?>' />
              </div>
              <div class='infoblock-main'>
                <h1 class='infoblock-title'><?php the_sub_field('name', false, false); ?></h1>
                <p class='infoblock-text'><?php the_sub_field('description', false, false); ?></p>
              </div>
            </article>

          <?php endwhile;
        endif;
      ?>
    </div>

  </section>

</section>

<?php oed_helpers:: get_template_parts( array('_parts/footer', '_parts/html-footer') ); ?>

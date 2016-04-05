<div class='menu menu--isClosed'>
  <div class='menu-wrapper'>

    <div class='menu-open'>
      
      <header class='menu-header'>
        <h1 class='menu-title'>como anda</h1>
        <div class='menu-logo'>
          <img class='svgimg' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/logo-comoanda-vertical.svg' />
        </div>
        <div class='menu-tagline'>
          <img class='svgimg' alt='quem promove a mobilidade a pé?' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/tagline-comoanda-vertical.svg' />
        </div>
      </header>

      <div class='menu-illustration'>

        <?php
          $frames = array( 0, 1, 2, 6, 9 );
          $rndFrame = $frames[array_rand($frames)];
        ?>

        <div class='menu-characters' style='background-image: url("<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char<?php echo $rndFrame; ?>.png")'></div>
        <div class="menu-floorline"></div>
      </div>

      <nav class='menu-nav'>
        <ul class='menu-nav-list'>
          <li class="menu-nav-item"><a href='<?php echo esc_url(home_url( '#sobre-o-projeto' )) ?>'>Sobre o projeto</a></li>
          <li class="menu-nav-item menu-nav-item--highlight"><a href='<?php echo esc_url(home_url( '#participe' )) ?>'>Participe da Pesquisa</a></li>
          <li class="menu-nav-item"><a href='<?php echo esc_url(home_url( '#artigos-e-notícias' )) ?>'>Artigos e Notícias</a></li>
          <li class="menu-nav-item"><a href='<?php echo esc_url(home_url( '#quem-somos' )) ?>'>Quem Somos</a></li>
        </ul>
      </nav>

      <footer class='menu-footer'>
        <p><span class='menu-footer-copyright'>©</span> 2016 - comoanda.org</p>
        <p>desenvolvido por <a class='menu-footer-developer' href='http://oitentaedois.com'><span class='oitentaedois'>oitenta<span class='oitentaedois-e'>e</span><span class='oitentaedois-dois'>dois</span></span></a></p>
      </footer>

    </div>

    <div class='menu-closed'>
      <div class='menu-closed-logo'>
        <p class='menu-closed-logo-title'>como anda</p>
        <p class='menu-closed-logo-image'>
          <img class='svgimg' data-src='<?php echo get_bloginfo('template_directory'); ?>/assets/svg/logo-comoanda-horizontal.svg' />
        </p>
      </div>
    </div>

    <button
      type='button'
      alt='toggle menu'
      class='menu-toggleButton hamburger'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>
</div>

<div class='wrapper'>

  <article class='menu menu--isClosed'>
    <div class='wrapper'>
    
    <div class='menu-left'>
      
      <header class='menu-header'>
        <div class='menu-logo'>
          <h1 class='menu-logo-title'>como anda</h1>
          <p class='menu-logo-image'><?php oed_helpers::echo_file_contents('/assets/svg/logo-comoanda-vertical.svg'); ?></p>
          <h2 class='menu-logo-tagline'>quem promove mobilidade a pé?</h2>
        </div>
      </header>

      <div class='menu-characters'
           data-animate-background-image
           data-animate-background-image-speed='250'
           data-animate-background-image-frames='11'
           data-animate-background-image-base-url='<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char${frame}.png'></div>
    </div>

    <div class='menu-right'>
      <nav class='menu-nav'>
        <button
          type='button'
          alt='close menu'
          class='menu-close hamburger hamburger--isOpen'
          onclick='App.menu.close()'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class='menu-nav-list'>
          <li class='menu-nav-item'><a href='#o-projeto'>O que é</a></li>
          <li class='menu-nav-item'><a href='#quem-faz-parte'>Quem faz parte</a></li>
          <li class='menu-nav-item'><a href='#participe'>Participe</a></li>
          <li class='menu-nav-item'><a href='#noticias'>Últimas notícias</a></li>
          <li class='menu-nav-item'><a href='#quem-somos'>Quem somos</a></li>
        </ul>
      </nav>
    </div>

    <footer class='menu-footer'>
      <p><span class='menu-footer-copyright'>©</span> 2016 - comoanda.org</p>
      <p>desenvolvido por <a class='menu-footer-developer' href='http://oitentaedois.com'><span class='oitentaedois'>oitenta<span class='oitentaedois-e'>e</span><span class='oitentaedois-dois'>dois</span></span></a></p>
    </footer>

    </div>
  </article>

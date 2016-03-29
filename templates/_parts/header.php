<div class='wrapper'>

  <article class='menu'>
    <div class='wrapper'>
    
    <div class='menu-left'>
      <header class='menu-header'>
        <div class='logo logo--style-vertical logo--size-large'>
          <h1 class='logo-title'>como anda</h1>
          <h2 class='logo-tagline'>quem promove mobilidade a pé?</h2>
        </div>
      </header>
      <div class='menu-characters'
           data-animate-background-image
           data-animate-background-image-speed='250'
           data-animate-background-image-frames='10'
           data-animate-background-image-base-url='<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char${frame}.jpg'></div>
    </div>

    <div class='menu-right'>
      <nav class='menu-nav'>
        <button
          type='button'
          alt='close menu'
          class='menu-close hamburger'
          onclick='App.menu.close()'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class='menu-nav-list'>
          <li class='menu-nav-item'><a href='#'>O que é</a></li>
          <li class='menu-nav-item'><a href='#'>Quem faz parte</a></li>
          <li class='menu-nav-item'><a href='#'>Participe</a></li>
          <li class='menu-nav-item'><a href='#'>Últimas notícias</a></li>
          <li class='menu-nav-item'><a href='#'>Quem somos</a></li>
        </ul>
      </nav>
    </div>

    <footer class='menu-footer'>
      <p><span class='menu-footer-copyright'>©</span> 2016 - comoanda.org</p>
      <p>desenvolvido por <a class='menu-footer-developer' href='http://oitentaedois.com'><span class='oitentaedois'>oitenta<span class='oitentaedois-e'>e</span><span class='oitentaedois-dois'>dois</span></span></a></p>
    </footer>

    </div>
  </article>

  <button type='button' alt='close menu' class='menu-close' onclick='App.menu.open()'></button>

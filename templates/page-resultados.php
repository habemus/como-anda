<?php oed_helpers::get_template_parts( array('_parts/html-header') ); ?>

<?php get_template_part('_parts/landing/menu'); ?>

<div id="stats">
  <h1><span data-bind="percentage"></span>%</h1>
  <h3>
    <strong data-bind="filteredCount"></strong> das <strong data-bind="totalCount"></strong>
  </h3>
  <h3>organizações mapeadas<br>atendem a esses critérios de seleção</h3>
</div>

<dialog id="entity-details">
  <header>
    <h1 data-bind="Qual o nome da organização da qual faz parte?"></h1>
  </header>
  <section>
    <header>
      <h3>Localização da sede:</h3> <span data-bind="Cidade:"></span> | <span data-bind="Estado:"></span>
      <p data-bind="Mobilidade a pé é o foco principal da sua organização?"></p>

    </header>
    <h3>O que move a organização</h3>
    <p data-bind="O que move sua organização?"></p>
    
    <h3>Aspectos da mobilidade a pé</h3>
    <p data-bind="Com quais aspectos da mobilidade a pé sua organização trabalha ou como o tema está inserido na sua atuação?"></p>
  </section>
  
  <form method="dialog">
    <footer>
      <span data-bind="Facebook da organização:"></span>
      <span data-bind="Site da organização:"></span>
      
      <button type="submit">fechar</button>
    </footer>
  </form>
</dialog>

<a target="_blank" id="timeline-link" href="../marcos-da-mobilidade">+ linha do tempo</a>
<a id="know-more-link" href="../pesquisa">saiba mais</a>

<!-- intro -->

<div id="intro-overlay">
  
</div>

<div id="intro-image-container">
  <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-0.svg">
  <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-1.svg">
  <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-2.svg">
  <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-3.svg">
  <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-4.svg">
  <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-5.svg">
  <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-6.svg">
  <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-7.svg">
  <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-8.svg">
  <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/ilustracoes/ilustracoes-home-9.svg">
  
  <div class="floor"></div>
</div>

<div id="intro-container">
  <img class="intro-control previous" src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/arrow-right.svg" alt="previous">
  <img class="intro-control next" src="<?php echo get_bloginfo('template_directory'); ?>/assets/svg/arrow-right.svg" alt="next">
  <a href="#" class="intro-skip">pular intro</a>
  
  <div id="intro-text-container">
    <div id="intro-text-scroller">
      <!-- 1 -->
      <p>
        A pé é a forma mais democrática, sustentável, saudável e econômica de se deslocar pela cidade
      </p>
      <!-- 2 -->
      <p>
        apesar disso, pouco foi feito pela mobilidade a pé nas cidades brasileiras
      </p>
      <!-- 3 -->
      <p>
        de maneira <strong>descentralizada</strong>, nascem organizações com o objetivo de colocar a questão em pauta.
      </p>
      <!-- 4 -->
      <p>
        A partir de <strong>2013</strong>, estimuladas pelo contexto político, social e econômico do país, proliferam inúmeras iniciativas levantando a bandeira da mobilidade a pé.
      </p>
      <!-- 5 -->
      <p>
        mas a falta de uma visão integrada do cenário ainda é uma barreira para que o movimento ganhe força e espaço
      </p>
      <!-- 6 -->
      <p>
        neste contexto surge a pesquisa <strong>COMO ANDA</strong>
      </p>
      <!-- 7 -->
      <p>
        que quer compreender o movimento pela <strong>mobilidade a pé</strong> no Brasil: quem são, onde estão e como atuam os agentes que a promovem
      </p>
      <!-- 8 -->
      <p>
        Até agora, foram mapeadas <span data-bind="totalCount"></span> organizações, localizadas em 12 estados pelo Brasil
      </p>
      <!-- 9 -->
      <p>
        descubra a situação das organizações mapeadas, entenda organização, identifique atuações, viabilize parcerias e potencialize o posicionamento da sua suas ações
      </p>
      <!-- 10 -->
      <p>
        entenda o posicionamento da sua organização, identifique atuações, viabilize parcerias e potencialize suas ações
      </p>
      <!-- 11 -->
      <p>
        navegue e entenda mais sobre o cenário da mobilidade a pé
      </p>
      <!-- 12 -->
      <p>
        venha caminhar com a gente!
      </p>
    </div>
  </div>
</div>

<!-- intro -->

<?php oed_helpers:: get_template_parts( array('_parts/html-footer') ); ?>

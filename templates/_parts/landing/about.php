<section
  id='<?php echo slugify(get_field('about_title', 'options')); ?>'
  class='section section--style-centered'
  data-color-point='224, 224, 224'>
  <h1 class='section-title'><?php the_field('about_title', 'options'); ?></h1>
  <article class='about'>

    <?php if (get_field('team_photo', 'options')) : $image = get_field('team_photo', 'options'); ?>
      <div class='about-picture'>
        <img src='<?php echo $image['sizes']['medium']; ?>' />
      </div>
    <?php endif; ?>
    
    <div class='about-content'>

      <div class='about-text'>
        <?php the_field('team_description', 'options'); ?>
      </div>

      <?php if ( have_rows('organizations', 'options') ) : ?>

        <section class='about-members'>
          <h1 class='about-members-title'>realizadores</h1>
          <ul>

            <?php while ( have_rows('organizations', 'options') ) : the_row(); ?>
            <?php $logo = get_sub_field('logo'); ?>
              <li class="about-members-item">
                <?php if ($logo) : ?>
                  <img 
                    class='about-members-item-logo'
                    src='<?php echo $logo['sizes']['medium']; ?>'
                    title='<?php the_sub_field('name', false, false); ?>'
                    alt='<?php the_sub_field('name', false, false); ?>' />
                <?php endif; ?>
                <p class='about-members-item-description'><?php the_sub_field('description', false, false); ?></p>
                <p class='about-members-item-link'><a target='_blank' href='<?php the_sub_field('url', false, false); ?>'><?php the_sub_field('url', false, false); ?></a></p>
              </li>
            <?php endwhile; ?>

          </ul>
        </section>

      <?php endif; ?>

      <?php if ( have_rows('backers', 'options') ) : ?>

        <section class='about-members'>
          <h1 class='about-members-title'>apoio</h1>
          <ul>

            <?php while ( have_rows('backers', 'options') ) : the_row(); ?>
            <?php $logo = get_sub_field('logo'); ?>
              <li class="about-members-item about-members-item--inline">
                <a target='_blank' href='<?php the_sub_field('url', false, false); ?>'>
                  <img 
                    class='about-members-item-logo'
                    src='<?php echo $logo['sizes']['medium']; ?>'
                    title='<?php the_sub_field('name', false, false); ?>'
                    alt='<?php the_sub_field('name', false, false); ?>' />
                </a>
              </li>
            <?php endwhile; ?>

          </ul>
        </section>

      <?php endif; ?>

    </div>

    <div class='about-character section-character' style='background-image: url("<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char4.png")'></div>

  </article>
</section>

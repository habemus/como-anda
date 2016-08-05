<section
  id='quem-somos'
  class='section section--style-centered location-anchor'
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
          <h1 class='about-members-title'>quem faz</h1>
          <ul>

            <?php while ( have_rows('organizations', 'options') ) : the_row(); ?>
              <?php $logo = get_sub_field('logo'); ?>
              <li class="about-members-item">
                <?php if ($logo) : ?>
                  <a class='about-members-item-logo' target='_blank' href='<?php the_sub_field('url', false, false); ?>'>
                    <img 
                      src='<?php echo $logo['sizes']['medium']; ?>'
                      title='<?php the_sub_field('name', false, false); ?>'
                      alt='<?php the_sub_field('name', false, false); ?>' />
                  </a>
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
          <h1 class='about-members-title'>quem apoia</h1>
          <ul>

            <?php while ( have_rows('backers', 'options') ) : the_row(); ?>
              <?php $logo = get_sub_field('logo'); ?>
              <li class="about-members-item">
                <?php if ($logo) : ?>
                  <a class='about-members-item-logo' target='_blank' href='<?php the_sub_field('url', false, false); ?>'>
                    <img 
                      src='<?php echo $logo['sizes']['medium']; ?>'
                      title='<?php the_sub_field('name', false, false); ?>'
                      alt='<?php the_sub_field('name', false, false); ?>' />
                  </a>
                <?php endif; ?>
                <p class='about-members-item-description'><?php the_sub_field('description', false, false); ?></p>
                <p class='about-members-item-link'><a target='_blank' href='<?php the_sub_field('url', false, false); ?>'><?php the_sub_field('url', false, false); ?></a></p>
              </li>
            <?php endwhile; ?>

          </ul>
        </section>

      <?php endif; ?>

      <?php if ( have_rows('consultants', 'options') ) : ?>

        <section class='about-members'>
          <h1 class='about-members-title'>quem faz junto</h1>
          <ul>

            <?php while ( have_rows('consultants', 'options') ) : the_row(); ?>
              <?php $logo = get_sub_field('logo'); ?>
              <li class="about-members-item">
                <strong><?php the_sub_field('name', false, false); ?></strong>
                <p class='about-members-item-description'><?php the_sub_field('description', false, false); ?></p>
              </li>
            <?php endwhile; ?>

          </ul>
        </section>

      <?php endif; ?>
      <div class='about-social'>
        <a
          class='socialIcon socialIcon--facebook'
          href='<?php the_field('social_facebook', 'options'); ?>'
          target='_blank'>
          <span class='fa fa-facebook'></span>
        </a>

        <a
          class='socialIcon socialIcon--medium'
          href='<?php the_field('social_medium', 'options'); ?>'
          target='_blank'>
          <span class='fa fa-medium'></span>
        </a>

        <a
          class='socialIcon socialIcon--email'
          href='mailto://<?php the_field('social_email', 'options'); ?>'>
          <span class='fa fa-envelope'></span>
        </a>
      </div>

      <div class='about-license'>
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/license_cc.png" alt="creative commons" /></a>
      </div>

    </div>

    <div class='about-character section-character' style='background-image: url("<?php echo get_bloginfo('template_directory'); ?>/assets/images/characters/char4.png")'></div>

  </article>
</section>

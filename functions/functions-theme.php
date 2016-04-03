<?php 

  /**
   * Scripts
   */
  add_action('wp', 'enqueue_scripts');
  function enqueue_scripts() {
    if (!is_admin()) {
      wp_register_script( 'animate-background-image', get_template_directory_uri().'/assets/scripts/lib/animate-background-image.js', array(), '1.0', true );
      wp_enqueue_script( 'animate-background-image' );
      wp_register_script( 'animate-classes', get_template_directory_uri().'/assets/scripts/lib/animate-classes.js', array(), '1.0', true );
      wp_enqueue_script( 'animate-classes' );
      wp_register_script( 'scroll-listener', get_template_directory_uri().'/assets/scripts/lib/scroll-listener.js', array(), '1.0', true );
      wp_enqueue_script( 'scroll-listener' );
      wp_register_script( 'scroll-trigger', get_template_directory_uri().'/assets/scripts/lib/scroll-trigger.js', array( 'scroll-listener' ), '1.0', true );
      wp_enqueue_script( 'scroll-trigger' );
      wp_register_script( 'body-color-blend', get_template_directory_uri().'/assets/scripts/lib/body-color-blend.js', array(), '1.0', true );
      wp_enqueue_script( 'body-color-blend' );
      wp_register_script( 'animate', get_template_directory_uri().'/assets/scripts/lib/animate.js', array(), '1.0', true );
      wp_enqueue_script( 'animate' );
      wp_register_script( 'animate-scroll', get_template_directory_uri().'/assets/scripts/lib/animate-scroll.js', array( 'animate' ), '1.0', true );
      wp_enqueue_script( 'animate-scroll' );
      wp_register_script( 'anchor-scroll', get_template_directory_uri().'/assets/scripts/lib/anchor-scroll.js', array( 'animate-scroll' ), '1.0', true );
      wp_enqueue_script( 'anchor-scroll' );
      wp_register_script( 'nodelist-foreach', get_template_directory_uri().'/assets/scripts/lib/nodelist-foreach.js', array( 'animate-scroll' ), '1.0', true );
      wp_enqueue_script( 'nodelist-foreach' );
      wp_register_script( 'svg-injector', get_template_directory_uri().'/assets/scripts/lib/svg-injector.js', array(), '1.0', true );
      wp_enqueue_script( 'svg-injector' );
      wp_register_script( 'scroll-fade', get_template_directory_uri().'/assets/scripts/lib/scroll-fade.js', array(), '1.0', true );
      wp_enqueue_script( 'scroll-fade' );

      wp_register_script( 'menu', get_template_directory_uri().'/assets/scripts/menu.js', array( 'animate-background-image', 'animate-classes', 'animate-scroll', 'scroll-fade' ), '1.0', true );
      wp_enqueue_script( 'menu' );
      wp_register_script( 'svg', get_template_directory_uri().'/assets/scripts/svg.js', array( 'svg-injector' ), '1.0', true );
      wp_enqueue_script( 'svg' );

      if (is_home()) {
          wp_register_script( 'home', get_template_directory_uri().'/assets/scripts/home.js', array( 'animate-classes', 'animate-scroll', 'nodelist-foreach' ), '1.0', true );
          wp_enqueue_script( 'home' );
      }
    }
  }

  /**
   * Theme colors
   */
  
  function get_theme_color($colorName) {

    $theme_colors = array(
      'grey' => array( 191, 191, 191 ),
      'lightgrey' => array( 224, 224, 224 ),
      'bluegrey' => array( 177, 194, 195 ),
      'blue' => array( 56, 128, 189 ),
      'green' => array( 177, 214, 152 ),
      'orange' => array( 239, 135, 59 ),
      'red' => array( 236, 50, 51 ),
      'black' => array( 0, 0, 0 ),
      'white' => array( 255, 255, 255 )
    );

    if ($theme_colors[$colorName]) {
      $theme_color_string = $theme_colors[$colorName][0];
      $theme_color_string .= ', ' . $theme_colors[$colorName][1];
      $theme_color_string .= ', ' . $theme_colors[$colorName][2];
      echo $theme_color_string;
    }
  }

  /**
   * Querys
   */
  
  function getNewsQuery($limit = '-1', $queryString) {

    $args = array(
        'post_type' => array( 'news' ),
        'posts_per_page' => $limit
      );

    if ($queryString) {
      $args['s'] = $queryString;
    }

    $query = new WP_Query($args);

    if (function_exists('relevanssi_do_query') && $queryString) {
      relevanssi_do_query($query);
    }

    return $query;

  }
    
?>

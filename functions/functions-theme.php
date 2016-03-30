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
        wp_register_script( 'scroll-trigger', get_template_directory_uri().'/assets/scripts/lib/scroll-trigger.js', array(), '1.0', true );
        wp_enqueue_script( 'scroll-trigger' );
        wp_register_script( 'body-color-blend', get_template_directory_uri().'/assets/scripts/lib/body-color-blend.js', array(), '1.0', true );
        wp_enqueue_script( 'body-color-blend' );

        wp_register_script( 'menu', get_template_directory_uri().'/assets/scripts/menu.js', array( 'animate-classes' ), '1.0', true );
        wp_enqueue_script( 'menu' );
      }
    }
    
?>

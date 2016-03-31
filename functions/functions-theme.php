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

        wp_register_script( 'menu', get_template_directory_uri().'/assets/scripts/menu.js', array( 'animate-classes', 'animate-scroll' ), '1.0', true );
        wp_enqueue_script( 'menu' );

        if (is_home()) {
            wp_register_script( 'home', get_template_directory_uri().'/assets/scripts/home.js', array( 'animate-classes', 'animate-scroll', 'nodelist-foreach' ), '1.0', true );
            wp_enqueue_script( 'home' );
        }
      }
    }
    
?>

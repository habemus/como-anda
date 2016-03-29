<?php 

    /**
     * Scripts
     */
    add_action('wp', 'enqueue_scripts');
    function enqueue_scripts() {
      if (!is_admin()) {
        wp_register_script( 'animate-background-image', get_template_directory_uri().'/assets/scripts/animate-background-image.js', array(), '1.0', true );
        wp_enqueue_script( 'animate-background-image' );
      }
    }
    
?>

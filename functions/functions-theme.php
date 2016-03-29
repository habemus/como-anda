<?php 

    /**
     * Scripts
     */
    add_action('wp', 'enqueue_scripts');
    function enqueue_scripts() {
      if (!is_admin()) {
        wp_register_script( 'logo', get_template_directory_uri().'/assets/scripts/logo.js', array() );
        wp_enqueue_script( 'logo' );
      }
    }
    
?>

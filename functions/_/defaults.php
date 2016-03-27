<?php 

// Remove WP-Views
if (is_admin()) :
    function my_remove_meta_boxes() {
        remove_meta_box('wpcf-marketing', 'articles', 'side');
        remove_meta_box('wpcf-marketing', 'projects', 'side');
    }
    add_filter('add_meta_boxes', 'my_remove_meta_boxes');
endif;

?>

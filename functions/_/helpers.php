<?php
   
class oed_helpers {

  // require multiple template parts at once.
  public static function get_template_parts( $parts = array() ) {
    foreach( $parts as $part ) {
      get_template_part( $part );
    };
  }

}

?>

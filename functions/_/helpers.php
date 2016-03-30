<?php
   
class oed_helpers {

  // require multiple template parts at once.
  public static function get_template_parts( $parts = array() ) {
    foreach( $parts as $part ) {
      get_template_part( $part );
    };
  }

  // echo file contents (e.g. inline svgs)
  public static function echo_file_contents( $path ) {
    if ($path) {
      echo file_get_contents( get_template_directory_uri() . $path );
    }
  }

}

?>

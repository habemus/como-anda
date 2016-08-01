<?php 

  /**
   * Scripts
   */
  add_action('wp', 'enqueue_scripts');
  function enqueue_scripts() {



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
    wp_register_script( 'nodelist-foreach', get_template_directory_uri().'/assets/scripts/lib/nodelist-foreach.js', array( 'animate-scroll' ), '1.0', true );
    wp_enqueue_script( 'nodelist-foreach' );
    wp_register_script( 'svg-injector', get_template_directory_uri().'/assets/scripts/lib/svg-injector.js', array(), '1.0', true );
    wp_enqueue_script( 'svg-injector' );
    wp_register_script( 'scroll-fade', get_template_directory_uri().'/assets/scripts/lib/scroll-fade.js', array(), '1.0', true );
    wp_enqueue_script( 'scroll-fade' );
    wp_register_script( 'marked', get_template_directory_uri().'/assets/scripts/lib/marked.js', array(), '1.0', true );
    wp_enqueue_script( 'marked' );
    wp_register_script( 'chartist.tooltip', get_template_directory_uri().'/assets/scripts/lib/chartist.tooltip.min.js', array(), '1.0', true );
    wp_enqueue_script( 'chartist.tooltip' );


    if (is_page('pesquisa')) {

      wp_enqueue_script('jquery');
      wp_register_script( 'survey', get_template_directory_uri().'/assets/scripts/survey.js', array( 'jquery', 'animate-classes', 'animate-scroll', 'scroll-trigger', 'svg-injector', 'nodelist-foreach' ), '1.0', true );
      wp_localize_script( 'survey', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
      wp_enqueue_script( 'survey' );

      wp_register_script( 'comoanda-pesquisa', get_template_directory_uri().'/assets/scripts/comoanda-pesquisa.js', array( 'survey', 'animate-classes', 'animate-scroll', 'scroll-trigger', 'svg-injector', 'nodelist-foreach' ), '1.0', true );
      wp_enqueue_script( 'comoanda-pesquisa' );

      wp_register_script('comoanda-menu', get_template_directory_uri().'/assets/scripts/comoanda-menu.js', array('nodelist-foreach', 'animate-scroll'), '1.0', true );
      wp_enqueue_script( 'comoanda-menu' );

      wp_register_script( 'd3.v4', get_template_directory_uri().'/assets/scripts/lib/d3.v4.min.js', array(), '1.0', true );
      wp_enqueue_script( 'd3.v4' );

      wp_register_script( 'comoanda-legis', get_template_directory_uri().'/assets/scripts/comoanda-legis.js', array(), '1.0', true );
      wp_enqueue_script( 'comoanda-legis' );

      wp_register_script( 'location', get_template_directory_uri().'/assets/scripts/location.js', array( 'scroll-trigger', 'nodelist-foreach' ), '1.0', true );
      wp_enqueue_script( 'location' );

    } else if (is_page('resultados')) {

      // styles
      wp_register_style('comoanda-resultados', get_template_directory_uri().'/assets/styles/pages/resultados.css');
      wp_enqueue_style( 'comoanda-resultados' );

      // scripts
      wp_register_script('comoanda-menu', get_template_directory_uri().'/assets/scripts/comoanda-menu.js', array('nodelist-foreach', 'animate-scroll'), '1.0', true );
      wp_enqueue_script( 'comoanda-menu' );

      wp_register_script('comoanda-resultados', get_template_directory_uri().'/assets/scripts/comoanda-resultados.js', array(), '1.0', true );
      wp_localize_script('comoanda-resultados', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
      wp_enqueue_script( 'comoanda-resultados' );

      wp_register_script('comoanda-d3-viz', get_template_directory_uri().'/assets/scripts/comoanda-d3-viz.js', array('comoanda-resultados'), '1.0', true );
      wp_enqueue_script( 'comoanda-d3-viz' );

    } else if (is_page('marcos-da-mobilidade')) {

      // styles
      wp_register_style('comoanda-marcos-da-mobilidade', get_template_directory_uri().'/assets/styles/pages/marcos-da-mobilidade.css');
      wp_enqueue_style( 'comoanda-marcos-da-mobilidade' );
      
      // menu
      wp_register_script('comoanda-menu', get_template_directory_uri().'/assets/scripts/comoanda-menu.js', array('nodelist-foreach', 'animate-scroll'), '1.0', true );
      wp_enqueue_script( 'comoanda-menu' );
      
      // timelinejs
      wp_register_script('timelinejs', 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js', array(), '1.0', true );
      wp_enqueue_script( 'timelinejs' );

      wp_register_script('comoanda-marcos-da-mobilidade', get_template_directory_uri().'/assets/scripts/comoanda-marcos-da-mobilidade.js', array('timelinejs', 'svg-injector'), '1.0', true );
      wp_enqueue_script( 'comoanda-marcos-da-mobilidade' );

    } else if (is_home()) {
      // styles
      wp_register_style('comoanda-home', get_template_directory_uri().'/assets/styles/pages/home.css');
      wp_enqueue_style( 'comoanda-home' );

      wp_register_script( 'comoanda-home', get_template_directory_uri().'/assets/scripts/comoanda-home.js', array( 'animate-scroll', 'scroll-trigger', 'nodelist-foreach', 'svg-injector' ), '1.0', true );
      wp_enqueue_script( 'comoanda-home' );
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
   * Slugify
   */
  function slugify($text) {
    // replace non letter or digits by -
    $text = preg_replace('~[^\pL\d]+~u', '-', $text);

    // transliterate
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

    // remove unwanted characters
    $text = preg_replace('~[^-\w]+~', '', $text);

    // trim
    $text = trim($text, '-');

    // remove duplicate -
    $text = preg_replace('~-+~', '-', $text);

    // lowercase
    $text = strtolower($text);

    if (empty($text))
    {
      return 'n-a';
    }

    return $text;
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

  /**
   * Ajax requests for retrieving typeform responses.
   */
  function get_typeform_results() {

    $typeformAPIKey = '1863a4d5bcae1d13d3d7ec231e18e5e12c5e30f0';
    $typeformFormId = 'RoOGoD';
    $typeformQueryString = '&completed=true&order_by[]=date_submit,desc';
    $url = 'https://api.typeform.com/v1/form/' . $typeformFormId . '?key=' . $typeformAPIKey . $typeformQueryString;

    echo file_get_contents($url);

    die;

  }
  add_action("wp_ajax_get_typeform_results", "get_typeform_results");
  add_action("wp_ajax_nopriv_get_typeform_results", "get_typeform_results");

  /**
   * Ajax requests for retrieving legislation data.
   */
  function get_legis() {

    $filepath = get_template_directory().'/assets/data/comoanda-legis.csv';

    echo file_get_contents($filepath);

    die;

  }
  add_action("wp_ajax_get_legis", "get_legis");
  add_action("wp_ajax_nopriv_get_legis", "get_legis");

  /**
   * Ajax request for retrieving geo json data of Brazil map.
   */
  function get_states_geo_json() {
    $filepath = get_template_directory().'/assets/data/br-states-simplified.json';

    echo file_get_contents($filepath);

    die;
  }
  add_action("wp_ajax_get_states_geo_json", "get_states_geo_json");
  add_action("wp_ajax_nopriv_get_states_geo_json", "get_states_geo_json");
    
?>

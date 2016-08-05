<html>
<head>
  <title></title>

  <link href='https://fonts.googleapis.com/css?family=News+Cycle:400,700' rel='stylesheet' type='text/css'>

  <style type="text/css">

    body {
      font-family: 'News Cycle', sans-serif;
    }

    ul {
      list-style: none;

      width: 50vw;

      margin-left: auto;
      margin-right: auto;
    }

    li {
      list-style: none;

      padding-top: 30px;
      padding-bottom: 30px;

      border-bottom: 2px solid black;
    }

    a.org-facebook, a.org-website {
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <?php

  $typeformAPIKey = '1863a4d5bcae1d13d3d7ec231e18e5e12c5e30f0';
  $typeformFormId = 'RoOGoD';
  $typeformQueryString = '&completed=true&order_by[]=date_submit,desc';
  $url = 'https://api.typeform.com/v1/form/' . $typeformFormId . '?key=' . $typeformAPIKey . $typeformQueryString;

  $mobilidade_a_pe_texts = array(
    'Não, mas uma das principais iniciativas da organização trata do tema' => 'A mobilidade a pé não é o foco principal da organização, mas uma das principais iniciativas da organização trata do tema.',
    'Sim' => 'Mobilidade a pé é o foco principal da organização.',
    'Não, a mobilidade a pé é apenas um dos temas abordados, mas aparece sempre em um contexto mais amplo' => 'A mobilidade a pé não é o foco principal da organização. É apenas um dos temas abordados, mas aparece sempre em um contexto mais amplo.'
  );


  $raw_data = file_get_contents($url);

  $parsed_data = json_decode($raw_data);
  $orgs = $parsed_data->responses;

  ?>

  <ul>

    <?php
    foreach ($orgs as $org) {

      $aspectos_key_re = '/^list_19882940/';

      $aspectos = array();

      foreach ($org->answers as $key => $value) {
        if (preg_match($aspectos_key_re, $key) && $value !== '') {
          array_push($aspectos, $value);
        }
      }

      echo '<li>';
      echo   '<h1>' . $org->answers->textfield_19881669 . '</h1>';
      echo   '<h3>localização da sede: ' . $org->answers->dropdown_20020978 . '</h3>';
      echo   '' . $mobilidade_a_pe_texts[$org->answers->list_19881916_choice];
      echo   '<h3>O que move a organização</h3>';
      echo   '' . $org->answers->textarea_19881942;
      echo   '<h3>Aspectos da mobilidade a pé</h3>';
      echo   '' . join(', ', $aspectos);

      if ($org->answers->website_24252115) {
        echo '<a class="org-facebook" href="' . $org->answers->website_24252115 . '">facebook da organização</a>';
      }
      if ($org->answers->website_24252104) {
        echo '<a class="org-website" href="' . $org->answers->website_24252104 . '">website da organização</a>';
      }

      echo '</li>';
    }
    ?>

  </ul>


</body>
</html>
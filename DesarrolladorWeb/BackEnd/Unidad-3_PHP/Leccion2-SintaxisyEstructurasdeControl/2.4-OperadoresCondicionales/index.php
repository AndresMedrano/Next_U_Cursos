<!DOCTYPE html>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Prueba Condicionales</title>
  </head>
  <body>
    <?php
      $a = 2;
      $b = 4;
      $c = 6;
      if ($a < $b) {
        ?>
        <h1>La Variable a es menor que b</h1>
      <?php
    }elseif ($a < $c) {
      ?>
      <h1>La Variable a es menor que c</h1>
      <?php
    }else {
      ?>
      <h1>La variable es mayor que b y c</h1>
      <?php
    } ?> 
  </body>
</html>
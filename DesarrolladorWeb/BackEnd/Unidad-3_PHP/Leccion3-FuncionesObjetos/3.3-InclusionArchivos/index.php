<?php

  include "operaciones.php";
  include "vista/tablero.php";

  $a = 5;
  $b = 8;
  $imp = new Visualizador("La suma de ".$a." mas ".$b." Es igual a:".sumar($a,$b));
  $imp->mostrarMensaje();
?>

<?php

include "excepciones2.php";

function dividir($num1, $num2){
  if ($num2 == 0) {
    throw new DivisionEntreCero();
  }
  if ($num1 < 0 || $num2 < 0) {
    throw new numeroNegativo();
  }

  return $num1/$num2;
}

try {
  echo dividir(6,2);
} catch (DivisionEntreCero $ecero) {
  echo "Se presento un error: ".$ecero->mensajeError();
} catch (NumeroNegativo $enegativo){
  echo "Se presento un error: ".$enegativo->mensajeError();
}finally{
  echo "<p>Se realizó una división </p>";
}

?>

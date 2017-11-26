<?php

function dividir($num1, $num2){
  if ($num2 == 0) {
    throw new Exception("No puedes hacer una division entre cero")
  }
  return $num1/$num2;
}

try {
  echo dividir(6,0);
} catch (Exception $e) {
  echo "Se presento un error: ".$e->getMessage();
}

?>

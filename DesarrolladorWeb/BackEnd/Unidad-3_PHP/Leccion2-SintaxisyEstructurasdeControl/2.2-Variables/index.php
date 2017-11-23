<?php

  $persona1 = 'Pedro';
  $Persona2 = 'Juan';
  $_Persona3 = 'Maria';


  function saludar(){
    global $persona1;
    echo "hola ".$persona1;
  }


  saludar();


  $a = true;
  $b = 2;
  $c = 2.76;
  $d = 'a';
  $e = [3,5,6];
  $f = new stdClass();
  $g = NULL;
  
  echo "<br>a. ".gettype($a);
  echo "<br>b. ".gettype($b);
  echo "<br>c. ".gettype($c);
  echo "<br>d. ".gettype($d);
  echo "<br>e. ".gettype($e);
  echo "<br>f. ".gettype($f);
  echo "<br>g. ".gettype($g);


 ?>

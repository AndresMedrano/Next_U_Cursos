<?php
	$titulo = $_POST["titulo"];
	$file = fopen("./uploaded-files/".$titulo."r"); //Abre el archivo
	$reponse["contenido"] = fread($file, filesize("./uploaded-files/".$titulo)); // Leemos el archivo
	$response["titulo"] = $titulo;
	echo json_encode($response);
	fclose($file); //Cerramos el archivo
?>

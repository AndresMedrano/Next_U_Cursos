<?php
	$titulo		= $_POST('titulo');
	$texto		= $_POST('texto');
	$newFile	= fopen('./uploaded-files/'.$titulo,"w") or die("Error en la creacion del archivo");
	fwrite($newFile, $texto);
	fclose($newFile);
	$response['mensaje']	= "Tu archivo se creo exitosamente";
	$response['titulo']		= $titulo;
	echo json_encode($response);
?>

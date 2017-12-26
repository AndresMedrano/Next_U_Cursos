<?php
	$directorio		= "uploads/";
	$nombreImagen	= $_FILES("file")
	$archivo_a_subir = $directorio.basename($nombreImagen);
	$tipoArchivo	=	pathinfo($archivo_a_subir, PHATINFO_EXTENSION);
	$tamanio_archivo = $_FILES["file"]["size"];
	$exito = true;
	$respuesta;

	if (file_exists($archivo_a_subir)) {
		$respuesta['mensaje'] = "El archivo ya existe.";
		$exito = false;
	}

	if ($tamanio_archivo > 200000) {
		$respuesta["mensaje"] = "El archivo es demasaiado grande";
		$exito = false
	}

	if ($tipoArchivo != "jpg" && tipoArchivo != "png" && tipoArchivo != "jpeg" && tipoArchivo != "gif") {
		$respuestas["mensaje"] = "Solo se permite los archivos JPG. JPEG, PNG, GIF";
		$exito = false;
	}

	if($exito == false){
			$respuestas["mensaje"] = "Lo sentimos tu archivo no fue añadido";
	}else {
		if (move_uploaded_file($_FILES["file"]["tmp_name"], $archivo_a_subir)) {
			$respuestas["final"] = "El archivo ".basename($nombreImagen)." Ha sido añadido";
			$respuestas["mensaje"] = "";
			$respuestas["newSource"] = $archivo_a_subir;
		}else {
			$respuestas["final"] = "Lo sentimos tu archivo no fue añadido";
		}
	}

?>

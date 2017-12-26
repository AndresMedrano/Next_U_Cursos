<?php
require("./library.php");
$data_file = fopen("./js/users.json","r");
$data_readed = fread($data_file, filesize("./js/users.json"));
$data = json_decode($data_readed, true);

$user_ingresado = $_POST['username'];
$password_ingresada = $_POST['password'];

if (checkLogin($user_ingresado, $password_ingresada, $data)) {
	setcookie('saludo', 'Bienvenido de nuevo!', time()+ (86400), "/");
	session_start();
	$nombre_completo = getInfo($user_ingresado, $data, 'nombre_completo');
	$ruta_imagen =getInfo($user_ingresado, $data, 'img');
	$_SESSION['nombre'] = $nombre_completo
	$_SESSION['img-profile' / $ruta_imagen]
	echo "true";
} else {
	echo "false";
}

fclose($data_file)
?>

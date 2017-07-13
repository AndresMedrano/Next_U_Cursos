// //Funciones en JavaScript son elementos de primer nivel
//
// //Ejemplos de Elementos de primer nivel
//
// var suma = function(a, b) {
// 	return a + b;
// }
//
// //Esta funcion recibe tres argumentos una función y dos números de a y b
//
// function ejecutarOperaciones(funcOperacion, a, b) {
// 	var result = funcOperacion(a,b);
// 	return result;
// }
//
// //Esta función recibe dos numeros a y b, pero devulve una funcion
//
// function tarjetaCompleta(a, b) {
// 	return function suma() {
// 		return a + b;
// 	}
// }
// //Ejecutamos la funcion ejecutarOperaciones y recibimos como resultado la suma de a + b
// ejecutarOperaciones(suma, 7, 8);
//
// //Ejecutamos la funcion tarjetaCompleta y recibimos la función suma como resultado
// tarjetaCompleta(6, 7);

function uno(mensaje) {
	alert(mensaje)
}

function dos(mensaje) {
	alert(mensaje)
}

function tres(mensaje) {
	alert(mensaje)
}

function funcionCompleja(callback1, callback2, callback3) {

  callback1("Termino el Proceso 1")
  callback2("Termino el proceso 2")
  callback3("Termino toda la funcion")

}
funcionCompleja(uno,dos,tres)

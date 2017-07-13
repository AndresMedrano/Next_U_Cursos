//
// // Funciones
//
// function nombreFuncion() {
//   // Bloque de código
// }
//
// // Llamado a la funcion :
//
// nombreFuncion()  // Recordar los parentesis para ejecutarla ;

// // Parametros
//
// function nombreFuncion(nombre, apellido, edad, peso, .... paramN) {
//     // Bloque de código
// }
//
// // Llamado al a funcion con parametros
//
// nombreFuncion('Edward', 'Monsalve', '24', '80', ...)


function alertarMensaje(nombre, edad, estatura) {
  alert('Mi nombre es : '+ nombre +' , tengo ' + edad + ' años y mi estatura es: ' + estatura + ' CM')
}

alertarMensaje('Edward', 24, '1.88')

function alertarMensaje2(nombre, edad, estatura) {
  var mensaje = 'Mi nombre es : '+ nombre +' , tengo ' + edad + ' años y mi estatura es: ' + estatura + ' CM'
  return mensaje
}
var Mensaje = alertarMensaje2('Andres', 28, '1.60')
console.log(alertarMensaje2('Andres', 28, '1.60'))
//Funcion Sumar
function Sumar() {
  if (arguments.length > 0) {
    alert(arguments[0] + arguments[1])
  }else {
    alert('No se enviaron parametros a ala function')
  }
}

Sumar(4,8)

// Respuestas

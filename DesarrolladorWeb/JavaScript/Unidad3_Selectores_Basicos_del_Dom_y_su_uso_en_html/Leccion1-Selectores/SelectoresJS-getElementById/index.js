//Variables
var nombre;
var apellido;
var email;
var usuario;
var password;
var boton;
//Asignación
nombre = document.getElementById("nombre");
apellido  = document.getElementById("apellido");
email = document.getElementById("email");
usuario = document.getElementById("usuario");
password = document.getElementById("password");
boton = document.getElementById("btn-guardar");
//Mostrar el Obejto Seleccionado
console.log(password);
//Función que se ejecuta en el evento
function mostrarAlerta(mensaje) {
  alert('El Usuario realizó click sobre el boton envío');
}
//Asignación del evento boton
boton.addEventListener('click',mostrarAlerta)

function mostrar_tecla(event) {
  var tecla = event.which || event.keyCode;
  document.querySelector("#tarjeta_muestra_tecla #texto_tarjeta")
  .innerHTML="Presionaste la tecla:"+String.fromCharCode(tecla);
}
//document.onkeypress=mostrar_tecla;

function cambiarTituloVerde() {
  document.querySelector("#tarjeta_cambia_color .card-image span").className="card-title green";
}
//document.onkeydown=cambiarTituloVerde;


function cambiarTituloNegro() {
    document.querySelector("#tarjeta_cambia_color .card-image span").className="card-title black";
}
//document.onkeyup=cambiarTituloNegro;

function teclaTextBox(event) {
  var tecla = event.which || event.keyCode;
  document.querySelector("#tarjeta_presiona_input_text .card-action a").innerHTML="Presionaste:"+String.fromCharCode(tecla);
}
//document.querySelector("#tarjeta_presiona_input_text #tecla_texto").onkeypress=teclaTextBox;

//Mas eventos por teclado
//Añadir un evento que detecte cuando se presione la tecla enter en el campo de texto comentario.
var cadena_caracteres="";
function asociarEvento(){
 var elementoWeb=document.querySelector("textarea");
 elementoWeb.onkeyup=funcionEvento;
}
function funcionEvento(event){
 var tecla=event.which || event.keyCode;
 if(tecla==13){
   document.querySelector("form"). submit();
 }
 cadena_caracteres=cadena_caracteres+String.fromCharCode(tecla);
 console.log("Has ingresado los siguinetes caracteres: "+cadena_caracteres);
}
asociarEvento();

//Añadir un evento que almacene los caracteres ingresados en una variable global a medida que se va presionando cada tecla en el campo de texto comentario

var cadena_caracteres="";
function asociarEvento(){
 var elementoWeb=document.querySelector("textarea");
 elementoWeb.onkeyup=funcionEvento;
}
function funcionEvento(event){
 var tecla=event.which || event.keyCode;
 cadena_caracteres=cadena_caracteres+String.fromCharCode(tecla);
 console.log("Has ingresado los siguinetes caracteres: "+cadena_caracteres);
}
asociarEvento();

//Añadir un evento que escuche cuando se deja de presionar una tecla en el campo de email y muestre el valor de la tecla presionada en consola.

function asociarEvento(){
 var elementoWeb=document.querySelectorAll("input")[1];
 elementoWeb.onkeyup=funcionEvento;
}
function funcionEvento(event){
 var tecla=event.which || event.keyCode;
 console.log("Presionaste la tecla: " + String.fromCharCode(tecla));
}
asociarEvento();

//Añadir un evento que escuche cuando el usuario presiona una tecla en el campo de texto del nombre y muestre el valor de la tecla presionada en consola.

function asociarEvento(){
	var elementoWeb=document.querySelector("input");
	elementoWeb.onkeypress=funcionEvento;
}
function funcionEvento(event){
	var tecla=event.which || event.keyCode;
	console.log("Presionaste la tecla: " + String.fromCharCode(tecla));
}
asociarEvento();

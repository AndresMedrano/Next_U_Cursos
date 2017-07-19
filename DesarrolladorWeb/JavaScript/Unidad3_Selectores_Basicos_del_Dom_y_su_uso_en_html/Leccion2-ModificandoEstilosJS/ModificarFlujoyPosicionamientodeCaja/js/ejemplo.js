//Seleccionar elementos de clase card
var tarjetas = document.getElementsByClassName('card');

//Cambiar propiedad order a 4 y a la primera 1
tarjetas[3].style.order = "1"

//Cambiar orden que aparecen las tarjetas en el contenedor
document.getElementById("contenedor_tarjetas").style.flexflow = 'row-reverse nowrap'

//Alinear verticalmente
document.getElementById("contenedor_tarjetas").style.flexflow = 'column nowrap'

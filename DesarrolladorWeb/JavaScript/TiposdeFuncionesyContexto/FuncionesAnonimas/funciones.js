//Funciones Anonimas

setInterval(function(){console.log('Mensaje Repetitivo');},2000)
setTimeout(function(){console.log('Mensaje luego de una espera');},2000)


function Personalizada(numero1, numero2, funcion2){
  var resultado = numero1 + numero2;
  funcion2(resultado);
}

Personalizada(4,8, function(resultado){alert (resultado);});

//Funciones Autoejecutables

(function(){
  console.log(this); // Aqui el comando this es igual a windows
})();



(function(nombre,apellido){
  console.log(nombre + ' ' +apellido);
})('Andres', 'Medrano');

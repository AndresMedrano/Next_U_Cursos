// Se imprime un arreglo con los nombres de las variables como cadena de caracteres
function imprimirAlerta(mensaje){
 	alert(mensaje);
}

imprimirAlerta('Mensaje 1');
imprimirAlerta.defer('Mensaje 2');
imprimirAlerta('Mensaje 3');

//Muestra una alerta con valor undifined
var persona=Class.create({
	 	 initialize: function (nom){
	 	 	 this.nombre=nom;
	 	},
	 	 mostrarNombreClick: function(event){
	 	 	 event.stop();
	 	 	 alert(this.msj);
	 	}
});
var persona1=new persona('Yeison');
$('boton1').observe('click', persona1.mostrarNombreClick);

//Aplaza el llamado a una funcion
function imprimirAlerta(mensaje){
 	alert(mensaje);
}

imprimirAlerta('Mensaje 1');
imprimirAlerta.defer('Mensaje 2');
imprimirAlerta('Mensaje 3');

//Muestra una laerta con el nombre de una persona
var persona=Class.create({
	 initialize: function (nom){
	 	this.nombre=nom;
	},
	 mostrarNombreClick: function(event){
	 	event.stop();
	 	alert(this.msj);
	}
});
var persona1=new persona('Yeison');
$('boton1').observe('click', persona1.mostrarNombreClick.bind(persona1));

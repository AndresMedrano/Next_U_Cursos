var persona = {
	nombre: '',
	edad: 0,
	peso: 0,
	estatura: 0,
	IMC: function calIMC (pes, est) {
		var imc = pes / (est ^ 2);
		return imc;
	}
}
persona.nombre = prompt("Ingrese el nombre.");
persona.edad = Number(prompt("Ingrese la edad."));
var pesoPersona = Number(prompt("Ingrese el peso en Kg."));
var estaturaPersona = Number(prompt("Ingrese la estatura en m."));

alert(persona.nombre + ' tiene ' + persona.edad + ' años, pesa ' + persona.peso + 'kg y mide '+
persona.estatura + 'm y su IMC es ' + persona.IMC(pesoPersona, estaturaPersona))

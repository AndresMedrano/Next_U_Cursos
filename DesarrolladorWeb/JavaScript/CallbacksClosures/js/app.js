// function inicializa() {
// 	var prop = 42
// 	function mostrarProp() {
// 		alert(prop)
// 	}
// 	mostrarProp()
// }
// inicializa()

var calculadora = (function(num1, num2) {
	var resultado = 0
	function actualizarResultado(nuevoresultado) {
		resultado = nuevoresultado
	}
	return{
		sumar: function() {
			var resultado = num1 + num2
			actualizarResultado(resultado)
		},
		restar: function() {
			var resultado = num1 - num2
			actualizarResultado(resultado)
		},
		multiplicar: function() {
			var resultado = num1 * num2
			actualizarResultado(resultado)
		},
		dividir: function() {
			var resultado = num1 / num2
			actualizarResultado(resultado)
		},
		resultado: function () {
			return resultado
		}
	}
})

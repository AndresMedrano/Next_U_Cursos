var lista_nombres = ["Camilo", "Eduardo", "Natalia", "Juan", "Milton", "Guillermo", "Mateo", "Maria", "Pedro", "Andres"]

var resultado = "Las personas aceptadas a la conferencia son: \n";

for (var i = 0; i < 10; i++) {
  if (i == 6) {
    break;
  }
  resultado = resultado + lista_nombres[i] + "\n";
}
  alert(resultado);

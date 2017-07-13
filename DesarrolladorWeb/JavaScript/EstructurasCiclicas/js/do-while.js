var lista_nombres = ["Camilo", "Eduardo", "Natalia", "Juan", "Milton", "Guillermo", "Mateo", "Maria", "Pedro", "Andres"]

var i = 5;

var resultado = "";

do {
  resultado = resultado + lista_nombres[i] + "\n";
  i = i + 1;
} while (i < 10);

alert(resultado);

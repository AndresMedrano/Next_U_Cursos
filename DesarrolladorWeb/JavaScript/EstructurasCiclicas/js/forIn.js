var lista_nombres = ["Camilo", "Eduardo", "Natalia", "Juan", "Milton", "Guillermo", "Mateo", "Maria", "Pedro", "Andres"]

var resultado = "";

for(nombre_temp in lista_nombres){
    resultado = resultado + lista_nombres[nombre_temp] + "\n";
}

alert(resultado);

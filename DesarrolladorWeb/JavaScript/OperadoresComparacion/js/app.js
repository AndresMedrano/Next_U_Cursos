
//Operadores Aritméticos
var Suma = 4 + 6
var Resta = 54 - 33
var Multiplicacion = 8 * 4
var Division = 48 / 4
console.log("Suma:",Suma,"Resta:",Resta,"Multiplicacion:",Multiplicacion,"Division:",Division)

//Operadores Adicionales
var Modulo = 9 % 3
console.log("Resto:",Modulo)
var Num = 20
var Incremento = ++Num
var Decremento = --Num
var Unary = -Num
console.log("Numero Original",Num, "Incremento:",Incremento,"Decremento",Decremento,"Negativo de Num",Unary);

//Operadores Lógicos
  //Operador Negación
  var X = true
  var Not = (!X)
  console.log("Negación",Not)
  //Operador AND
  var Z = true
  var Y = false
  console.log("Operador AND",(Z && Y))
    //Trabajando con Operador AND
    function evaluarPares(numero1,numero2) {
      if((numero1 % 2)==0 &&(numero2 % 2)==0){
        alert('Los Numeros son Pares')
      }
    }
    evaluarPares(2,2)
  //Operador OR
  var M = true
  var N = true
  console.log("Operador OR",(M || N))
  //Trabajando con Operador OR
  function evaluarPares2(numero1,numero2) {
    if((numero1 % 2)==0 || (numero2 % 2)==0){
      alert('Algunos de los dos números es Par')
    }else{
      alert('Ninguno de los dos números es Par')
    }
  }
  evaluarPares2(1,3)

  

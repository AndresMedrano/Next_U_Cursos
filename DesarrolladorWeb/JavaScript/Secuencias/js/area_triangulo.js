function areaTriangulo() {
  var a = 0, b = 0, h = 0;
  b = prompt("Ingrese la Base (b) del triángulo.");
  h = prompt("Ingrese la altura (h) del triángulo");
  a = (b * h) / 2
  alert("El área del triángulo es:"+a);
}

areaTriangulo();

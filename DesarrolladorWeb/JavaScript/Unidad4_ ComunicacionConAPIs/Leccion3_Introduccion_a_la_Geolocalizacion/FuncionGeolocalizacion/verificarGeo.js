//Verificamos si el objeto navigator tiene la propiedad "Geolocation"

if (navigator.geolocation){
  //Obtenemos los datos de la ubicacion del usuario
  navigator.geolocation.getCurrentPosition(function position() {
    var positionInfo = position;
  })
}else {
  alert("El navagador no soporta la caracteristica de Geolocalización de HTML5")
}

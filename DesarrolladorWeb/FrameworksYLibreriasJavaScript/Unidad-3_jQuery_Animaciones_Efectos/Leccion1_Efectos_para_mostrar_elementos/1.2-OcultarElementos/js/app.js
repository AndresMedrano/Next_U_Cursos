
$(function(){



});

$("#vaca").hide();

$("#cerdo").hide('4500','linear',function(){$("#mensaje").text("Cerdo")});

$("#gallina").toggle();

$("#oveja").toggle('500',function(){$("#mensaje").text("Oveja")});

//Actividad 2
/*$(function(){
  $("#nombre").blur(function (){validarNombre($("#nombre").value);});
  $("#fecha").change(function (){validarFecha($("#fecha").value);});
  $("#email").blur(function(){
    validarEmail($("#email").value);});
  $("form").submit(function(){
    alert("Ingresaste la siguiente información:"+"
"+
    "Nombre: "+$("#nombre").value+"
"+
    "Fecha: "+$("#fecha").value+"
"+
    "Email: "+$("email").value+"
")
  });
});*/

/*
function validarNombre(nombre){
  //...Procedimiento para validar si es una cadena de caracteres.
  alert("El valor "+nombre+" validado.");
};
function validarFecha(fecha){
  //...Procedimiento para si el valor es una fecha correcta
  alert("El valor "+nombre+" validado.");
};
function validarEmail(email){
  //... Procedimiento para validar si el valor es un email apropiado
  alert("El valor "+nombre+" validado.");
};
*/


$(function(){
  $("#nombre").focus(function(){
      $(".escondido").css("display", "block");
      $("#mensaje").text("En este campo debes escribir tu nombre completo");
  });

  $("#nombre").blur(function(){
      $(".escondido").css("display", "none");
  });

  $("#elementoSelector").change(function(){
      $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
      $("#mensaje").text("Cambiaste la opcion del select");
  });

  $("#texto").select(function(){
    $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
    $("#mensaje").text("Seleccionaste un texto!");
  });

  $("form").submit(function(){
    $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
    $("#mensaje").text("Enviaste el formulario!");
    event.preventDefault();
  });

});


// Otros Eventos del DOM

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


$(function(){
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
});

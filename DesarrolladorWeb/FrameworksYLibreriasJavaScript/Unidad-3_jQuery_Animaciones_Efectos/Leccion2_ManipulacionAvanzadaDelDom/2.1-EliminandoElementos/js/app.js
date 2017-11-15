$(function(){
  $(".card").mouseover(function(){
    $(this).removeClass("blue");
    $(this).addClass("yellow");
  });
  $(".card").mouseout(function(){
    $(this).removeClass("yellow");
    $(this).addClass("blue");
  });

})

/*
//Para ver el contenido HTML
$("#c1").html()

//Para remover el titulo de c1
$("#c1 div :first-child").remove()

//Almacena en variable y elimina la segunda tarjeta con sus atributos
var tmp= $("#c2").remove()

//Vuelve a colocar la tarjeta en la pagina sin jquery
$("#r1col2").append(tmp)

//Almacena variable y elimina la segunda su tarjeta sin sus atributos
var tmp= $("#c2").detach()

//Vuelve a colocar la tarjeta en la pagina con jquery
$("#r1col2").append(tmp)

//Elimina el contenido interno de la tarjeta
$("#c3 .card-content").empty()

//Elimina el contenedor de la tarjeta
$("#c4 .card-content").unwrap()

*/

//Cambia de Color a las tarjetas
$(function eventos(){
  $(".card").mouseover(function(){
    $(this).removeClass("blue");
    $(this).addClass("yellow");
  });
  $(".card").mouseout(function(){
    $(this).removeClass("yellow");
    $(this).addClass("blue");
  });
})


$(function remplazaElementos() {
  $("button").on("click",function() {
    //Reemplaza Titulo por un icono
    $("#c1").find("span").replaceWith("<i class='material-icons medium'>thumb_up</i>");
    //Remplaza los Parrafos por un nuevo texto en formato H5
    $(".card").find("p").replaceWith("<h5> nuevo texto </h5>");
    //Reemplaza el titulo de las tarjetas
    $("#c3").replaceWith($("#c8"));
    //Remplaza las tarjetas por una imagen
    $("<img src='image/s7.png'/>").replaceAll($(".card"));
  })
})

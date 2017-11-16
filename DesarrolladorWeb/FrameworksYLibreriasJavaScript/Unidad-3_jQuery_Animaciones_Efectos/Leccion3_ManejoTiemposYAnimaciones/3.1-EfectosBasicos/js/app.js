

$(function(){

  $("body").dblclick(function(){
    $(".oculto").fadeIn(4000,function(){alert("Animación terminada")});
  })

  //Codigo para la captura
  //Desaparecen elementos presionado la letra O
  // $(document).keypress(function(event){
  //   if (event.which == 111) {
  //     $(".oculto").fadeOut('slow','linear');
  //   }
  // })

  //Aparece y oculta con la letra O
  // $(document).keypress(function(event){
  //   if (event.which == 111) {
  //     $(".oculto").fadeToggle('slow','linear');
  //   }
  // })

  //Codigo para la captura - Muestra Estadisticas de Partido con letra P
  // $(document).keypress(function(event){
  //   if (event.which == 111) {
  //     $(".oculto").fadeToggle('slow','linear');
  //   }
  //   if (event.which == 112) {
  //     $(".panel-estadisticas").slideDown(500);
  //   }
  // })

  //Codigo para la captura - Muestra y Oculta Estadisticas de Partido con letra P
  $(document).keypress(function(event){
    if (event.which == 111) {
      $(".oculto").fadeToggle('slow','linear');
    }
    if (event.which == 112) {
      $(".panel-estadisticas").slideToggle('fast');
    }
  })

})

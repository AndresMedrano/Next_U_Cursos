$(function(){

  $("#btn-vaca").click(function(){

    $("#vaca").show("slow");

  });

$(function cerdo () {
    $("#btn-cerdo").click(function() {

      $("#cerdo").show('4500','linear',function(){

        $("#mensaje").text("Cerdo")});

    })
})


  //CODIGO PARA LA CAPTURA
  //
  // $("selectorDisparador").evento(function(){
  //
  //   $("selectorObjetivo").show();
  //
  // });
  //
  //
  // function funcionDefinida(){
  //   $("selectorObjetivo").show();
  // };
  //
  // $("selectorDisparador").evento(funcionDefinida());
  //


  // $("selectorDisparador").evento(function(){
  //
  //   $(this).show();
  //
  // });



})

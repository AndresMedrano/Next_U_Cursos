var contenedores = $(".contenedor");
var titulos = $("h1");
var titulosN = [];
titulos.each(
  function(index,value){
    titulosN[index]=$(value).text();
});

titulosN = titulosN.sort();

$(".contenedor").detach();

$.each(titulosN, function(i, valor){
  $.each(contenedores, function(j, contTemp){
    if($(contTemp).find("h1").text()==valor){
      $("body").append(contTemp);
    }
  });
});

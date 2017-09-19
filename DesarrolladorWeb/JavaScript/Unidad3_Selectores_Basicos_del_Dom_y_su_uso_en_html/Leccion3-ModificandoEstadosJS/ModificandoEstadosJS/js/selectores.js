var resultados = document.getElementsByClassName('btn_red');

for(i=0;i<resultados.length;i++){
  resultados[0].innerHTML=texto="Nuevo texto";
}

//Selectores de Formularios
document.getElementById('animales').checked="true"
document.getElementById('sel_animales').disabled="true"

document.getElementById('sel_postres').querySelector("option[value='helado']").selected="true"

document.getElementById('sel_postres').querySelector("option[value='torta_chocolate']").selected="true"

$(document).ready(function()
 {$('select').material_select();});

 //innerHTML
 document.getElementsByTagName("h5")[2].innerhtml="Selecciona tu animal favorito y tus postres preferidos.";

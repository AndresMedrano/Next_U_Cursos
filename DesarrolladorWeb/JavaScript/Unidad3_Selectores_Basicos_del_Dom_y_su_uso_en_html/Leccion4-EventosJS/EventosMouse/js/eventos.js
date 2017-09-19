function cambioFotoAstronauta() {
  document.getElementById('astronauta').style="width:50%;";
}
//document.getElementById('astronauta').onclick=cambioFotoAstronauta;

function cambioFotoExtraterrestre() {
  document.getElementById('extraterrestre').style="-webkit-filter:blur(5px);filter:blur(5px);";
}
//document.getElementById('extraterrestre').ondblclick=cambioFotoExtraterrestre;

function cambioFotoPlanetas() {
  document.getElementById('planetas').style="filter:hue-rotate(90deg);-webkit-filter:hue-rotate(90deg);";
}
//document.getElementById('planetas').onmouseover=cambioFotoPlanetas;

function cambioFotoNave() {
  document.getElementById('nave_espacial').style="filter:sepia(100%);-webkit-filter:sepia(100%);";
}
//document.getElementById('nave_espacial').onmouseout=cambioFotoNave;

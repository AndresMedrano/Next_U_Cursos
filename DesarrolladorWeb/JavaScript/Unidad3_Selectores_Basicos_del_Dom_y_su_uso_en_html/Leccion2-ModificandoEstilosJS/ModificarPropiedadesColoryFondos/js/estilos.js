//Insertamos Imagen con JS
document.getElementsByClassName("encabezado")[0].style.background="url('img/logoNextU.png')no-repeat left top";

//Modificando Tamaño de imagen
document.getElementsByClassName("encabezado")[0].style.backgroundSize="250px";

//Modificando Color de Fondo
document.getElementsByClassName('promoNextU')[0].style.background="#33CCCC";

//Modificando Color de Texto
document.getElementsByClassName('promoNextU')[0].style.color="#000";

//Modificando bordes de Caja Contenedora
document.getElementsByClassName('promoNextU')[0].style.borderRadius="20px";

//Sombra a Caja
document.getElementsByClassName('promoNextU')[0].style.boxShadow="2px 3px 5px 7px rgba(0,0,0,0.3)";

//Cambiar Imgen de Fondo en footer
document.getElementsByTagName('footer')[0].style.background="url('img/papel_doblado.jpg')repeat right";

//Cambiar tamaño de fondo de footer
document.getElementsByTagName('footer')[0].style.backgroundSize="100px";

//Modificar desde consola los bordes de menus
 var hojaEstilos = document.createElement('style');
 hojaEstilos.innerHTML="nav ul li{border-radius:10px}";
 document.head.appendChild(hojaEstilos);

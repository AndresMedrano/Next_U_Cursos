var canvas = document.getElementById('miCanvas'),
    context = canvas.getContext('2d');

//Linea
/*context.beginPath();
context.moveTo(100, 30);
context.lineTo(200,150);
context.stroke();*/

//Rectangulo
/*context.beginPath();
context.rect(100, 50, 50, 100); //X, Y, ancho, alto
context.fillStyle = 'blue';
context.fill();
context.lineWidth = 5;
context.strokeStyle = 'black';
context.stroke();*/

//Rectangulo 2
/*context.beginPath();
context.fillStyle = 'blue';
context.strokeStyle = 'black';
context.lineWidth = 5;
context.fillRect(100, 50, 50, 100);   //X, Y, ancho, alto
context.strokeRect(100, 50, 50, 100);*/

//Arco
//X, Y, radio, angulo de inicio , angulo de fin , dirección, ir sentido de las manecillas del reloj(false)
/*context.arc(100, 100, 50, Math.PI, Math.PI*1.5, false);
context.stroke();*/

//Circulo
/*context.arc(120, 120, 70, 0, 2 * Math.PI, false);
context.fillStyle = '#ff8800';
context.fill();*/

//Texto
/*context.font = 'bold 30pt, Arial, san-serif'; // Estilo, Tamaño Familia
context.fillText('¡Hola!',20, 50);*/            //Texto y Posición

//Imagen
var imageObj = new Image();
imageObj.onload = function() {
  context.drawImage(imageObj, 50, 50, 200, 150); //x, y, ancho, alto
};

imageObj.src = 'imagenes/yoga.png'

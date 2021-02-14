/**
 * ****************************************************************************
 * Name: Samer El-Murr*********************************************************
 * Date: 3/6/2020*************************************************************
 * Course: Computer Graphics***************************************************
 * Intructor: Dr Danni Nini****************************************************
 * Project: Drawing Shapes*****************************************************
 * ****************************************************************************
 * This project is to draw some shapes ****************************************
 * ****************************************************************************
 */

 //declaring the canvas 
var canvas = document.querySelector('#mainGame');

canvas.width = 600;
canvas.height = 500;
canvas.style = "position:absolute; left: 50%; margin-left: -300px;";

var context = canvas.getContext('2d');

//square
context.fillStyle='grey';
context.fillRect(10, 10, 100, 100);

//rectangle
context.fillStyle='red';
context.fillRect(540, 10, 50, 100);

//circle
context.fillStyle='blue';
context.beginPath();
context.arc(300, 250, 50, 0, 2 * Math.PI, false);
context.fill();
context.stroke();

//triangle
context.fillStyle='green';
context.beginPath();
//bottom left corner
context.moveTo(10, 490)
//bottom right corner
context.lineTo(110, 490)
//top corner
context.lineTo(60, 400)
context.fill()

//oval
context.fillStyle='yellow';
context.beginPath();
context.ellipse(560, 440, 30, 50, 0, 0, 2 * Math.PI);
context.fill();
context.stroke();

//diamond
context.fillStyle='pink';
context.rotate(Math.PI / 4);
context.fillRect(490, 70, 65, 65);



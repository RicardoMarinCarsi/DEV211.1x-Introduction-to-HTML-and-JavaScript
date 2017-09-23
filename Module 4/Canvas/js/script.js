var canvas = document.getElementById("demoCanvas");
var context = canvas.getContext("2d")

context.fillStyle = '#A9B0B3'
context.strokeStyle = '#746C73'
context.lineWidth = 5

context.moveTo(0,0);
context.lineTo(700, 350);
context.stroke();

context.beginPath();
context.arc(160,80,70,0,2*Math.PI);
context.fill();
context.stroke();


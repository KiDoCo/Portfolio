var canvas =	document.getElementById("glcanvas");
const gl = canvas.getContext("2d");

render();
var x = -150;
var y = -200;
var testx = 0;
var testy = 0;
function main()
{	
	gl.rotate(5*Math.PI/180);
draw();	
x += 1;
y += 1;
}

function render()
{
	
	main();
	requestAnimationFrame(render);
}

function draw()
{

	gl.strokeStyle = "#FF0000";
	gl.strokeRect(x,x,y,y);
}



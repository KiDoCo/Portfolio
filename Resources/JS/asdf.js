var canvas =	document.getElementById("glcanvas");
const gl = canvas.getContext("2d");
save();
render();
var x = 40;
var y = 50;
var startx = 0;
function main()
{	
	gl.translate(canvas.width/2,canvas.height/2);
	gl.rotate(15 * Math.PI / 180)
	draw();	
}

function render()
{
	main();
	requestAnimationFrame(render);
	startx += 1;
	gl.translate(-canvas.width/2,-canvas.height/2);
	if(startx % 100 == 0 && startx != 0)
	{
		startx = 0;
		gl.clearRect(0,0,canvas.width,canvas.height);
			gl.resetTransform();
	}

}

function draw()
{

	gl.strokeStyle = "#00FF00";
	gl.strokeRect(100,100,x,y);
}

function save()
{
	gl.save();
}


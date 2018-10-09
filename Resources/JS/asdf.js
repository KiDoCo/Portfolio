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
	
	if(startx % 200 == 0 && startx != 0)
	{
		startx = 0;
		gl.clearRect(0,0,canvas.width,canvas.height);
			gl.resetTransform();
	}

}

function draw()
{

if(startx < 25)
{
	gl.strokeStyle = "#00FFFF"
}

if(startx > 25 && startx < 50)
{
	gl.strokeStyle = "#FFFF00";
}

if(startx > 50 && startx < 75)
{
	gl.strokeStyle = "#FF00FF";
}
if(startx > 75)
{
	gl.strokeStyle = "#00FF00";
}
	gl.strokeRect(100 + startx,100 + startx,x,y);
}

function save()
{
	gl.save();
}


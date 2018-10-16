var canvas =	document.getElementById("glcanvas");
const gl = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
save();
render();
var x = 40;
var y = 50;
var startx = 0;

function readTextFile(file)
{
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET",file,false);
	rawFile.onreadystatechange = function()
	{
		if(rawFile.readyState == 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				var para = document.createElement("p");
				var node = document.createTextNode(allText);
				para.appendChild(node);
				var element = document.getElementById("test");
				element.appendChild(para);
			}
		}
	}
	rawFile.send(null);
}
$('#test').load("https://drive.google.com/uc?export=view&id=1lf-0t0x2F1JPqp33PZOQGiQDDewB-8p8");

function main()
{	
	//readTextFile("../Text/soos.xml");
	gl.translate(canvas.width/2,canvas.height/2);
	gl.rotate(15 * Math.PI / 180)
	draw();	
}

//event when resizes occurs
$(window).resize(function()
{
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
});

function render()
{
	main();
	requestAnimationFrame(render);
	startx += 1;
	gl.translate(-canvas.width/2,-canvas.height/2);
	
	if(startx % 120 == 0 && startx != 0)
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
	gl.strokeRect(100 ,100,x,y);
}

function save()
{
	gl.save();
}


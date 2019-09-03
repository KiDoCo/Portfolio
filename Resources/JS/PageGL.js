
var startx = 0;
var increase = false;
var boxarray = [];
var style = 16;
var initvalue = parseFloat(style);
ChangeHTMLOf('#textWindow','MainPage.html');
var G_gl = document.querySelector("#glcontainer").getContext("webgl");
main();

function main()
{



	G_gl.clearColor(0.0,0.0,0.0,1.0);
	G_gl.clear(G_gl.COLOR_BUFFER_BIT);
}


function readTextFile(file)
{
	var rawFile = new XMLHttpRequest();
	rawFile.open('GET',file,true);
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



function resize(canvas)
{
	var displayWidth = canvas.clientWidth;
var displayHeight = canvas.clientHeight;
if(canvas.width != displayWidth || canvas.height != displayHeight)
{
	canvas.width = displayWidth;
	canvas.height = displayHeight;
}
}





//event when resizes occurs
$(window).resize(function()
{

	G_gl.height = canvas.clientHeight;
	G_gl.width = canvas.clientWidth;

	});

function ChangeHTMLOf(source,target)
{
	console.log("Load different");
	$(source).load(target);
}


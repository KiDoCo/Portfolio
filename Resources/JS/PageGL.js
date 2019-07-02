
var startx = 0;
var increase = false;
var boxarray = [];
var style = 16;
var initvalue = parseFloat(style);
var G_gl;
main();

function main()
{
	ChangeHTMLOf('#textWindow','MainPage.html');
	const canvas = document.querySelector("#glcontainer");
	const gl = canvas.getContext("webgl");
	if(gl == null)
	{
		alert("Unable to initialize WebGL");
		return;
	}
	G_gl = gl;
	gl.clearColor(0.5,0.0,0.0,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
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
	$(source).load(target);
}


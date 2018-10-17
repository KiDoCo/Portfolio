var canvas = document.getElementById("glcanvas");
const gl = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
gl.resetTransform();
gl.fillStyle = '#FF0000';
gl.fillRect(0,0, 1920,1080);
var style = window.getComputedStyle(document.getElementById('bleh'),null).getPropertyValue('font-size');
var initvalue = parseFloat(style);
document.getElementById("bleh").style.fontSize = (initvalue + window.innerWidth / 150) + 'px';



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
$.ajax({url: "../Text/bleh.txt", success: function(result){
$("#test").html(result);
}});
//$('#test').load('https://drive.google.com/uc?export=view&id=1lf-0t0x2F1JPqp33PZOQGiQDDewB-8p8');

//$('#test').load("../Text/bleh.txt");

//event when resizes occurs
$(window).resize(function()
{
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	//Calculate the font size
	document.getElementById("bleh").style.fontSize = (initvalue + window.innerWidth / 150) + 'px';
});

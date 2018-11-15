var camera, scene, renderer;
var geometry, material, mesh;
var startx = 0;
var increase = false;
var boxarray = [];
var canvas = document.getElementById("glcontainer");
canvas.style.width = window.innerWidth + "px";
canvas.style.height = window.innerHeight + "px";
var style = 16;
var initvalue = parseFloat(style);
$("span").css("font-size" ,(initvalue + window.innerWidth / 150) + 'px');
init();
render();


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
	document.getElementById("dropdown").width = window.innerWidth;
	//Calculate the font size
	if((initvalue + window.innerWidth /150) <= 32)
	{
		$('span').css("font-size" , (initvalue + window.innerWidth / 150) + 'px');
	}
	else
	{
		$('span').css("font-size" , 24 + 'px');
	}

});



function init()
{
	renderer = new THREE.WebGLRenderer();
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 1000 );
	camera.position.z = 27;


	var light = new THREE.PointLight( 0xffffff);
	light.position.copy(camera.position);


	mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 0x00ffff}));
	scene = new THREE.Scene();

	scene.add(mesh);

	renderer.setSize( window.innerWidth, window.innerHeight );	

	
	canvas.appendChild(renderer.domElement);
}


function render()
{
	requestAnimationFrame( render );

	if(startx < -1.0)
	{
		increase = true;
	}
	
	if(startx > 1.0)
	{
		increase = false;
	}
	
	if(increase)
	{
		startx += 0.01;
	}
	else
	{
		startx -= 0.01;
	}
	

	renderer.render( scene, camera );

}


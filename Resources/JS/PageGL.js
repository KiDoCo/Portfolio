var camera, scene, renderer;
var geometry, material, mesh;

var canvas = document.getElementsByClassName("glcontainer");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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
	//Calculate the font size
	if((initvalue + window.innerWidth /150) <= 32)
	{
		$('span').css("font-size" , (initvalue + window.innerWidth / 150) + 'px');
	}
	else
	{
		$('span').css("font-size" , 32 + 'px');
	}

});

function init()
{
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );


	renderer = new THREE.WebGLRenderer( { antialias: true } );

	renderer.setSize( window.innerWidth, window.innerHeight );
	$(".glcontainer").append(renderer);


}


function render()
{

	requestAnimationFrame( render );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	renderer.render( scene, camera );

}


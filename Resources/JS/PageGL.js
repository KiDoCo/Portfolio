var camera, scene, renderer;
var geometry, material, mesh;
var Kmesh;
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
	camera.position.z = 4;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();
	
	//K starts here
	var car = new THREE.BufferGeometry();

var vertices = [];
	var normals = [];
	var indices = []; 
	var segments = 9;
	var size = 20;
	var halfSize = size / 2;
	var ass = new THREE.BufferGeometry();
	var segmentSize = size / segments;

	for ( var i = 0; i <= segments; i ++ ) 
	{
		var y = ( i * segmentSize ) - halfSize;
				
		for ( var j = 0; j <= segments; j ++ )
		{
			var x = ( j * segmentSize ) - halfSize;
			vertices.push( x, - y, 0 );
			normals.push( 0, 0, 1 );
			var r = ( x / size ) + 0.5;
			var g = ( y / size ) + 0.5;
			colors.push( r, g, 1 );
		}
	}

					for ( var i = 0; i <= segments; i ++ ) {
					var y = ( i * segmentSize ) - halfSize;
					for ( var j = 0; j <= segments; j ++ ) {
						var x = ( j * segmentSize ) - halfSize;
						vertices.push( x, - y, 0 );
						normals.push( 0, 0, 1 );
						var r = ( x / size ) + 0.5;
						var g = ( y / size ) + 0.5;
						colors.push( r, g, 1 );
					}
				}

	ass.setIndex(indices);
				geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
				geometry.addAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ) );
				geometry.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );

	car.addAttribute('position', new THREE.BufferAttribute( vertices, 3));
	var arr = new THREE.MeshBasicMaterial({color : 0xff0000});
	Kmesh = new THREE.Mesh(ass, arr);

	
	mesh = new THREE.Mesh( geometry, material );	
	scene.add( Kmesh );
	scene.add (mesh);

	renderer = new THREE.WebGLRenderer( { antialias: false } );

	renderer.setSize( window.innerWidth, window.innerHeight );		
	
	canvas.appendChild(renderer.domElement);
}


function render()
{

	requestAnimationFrame( render );
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	Kmesh.rotation.x += 0.01;

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


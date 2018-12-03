var camera, scene, renderer;
var geometry, material, mesh;
var startx = 0;
var increase = false;
var boxarray = [];
var style = 16;
var initvalue = parseFloat(style);
var canvas = document.getElementsByClassName("glcontainer");
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
	canvas[0].height = window.innerHeight;
	canvas[0].width = window.innerWidth;
});

function K()
{
	var geometry = new THREE.Geometry();

	geometry.vertices.push
	(
		//straight palkki
		new THREE.Vector3(-5,20,0), //mid left 0
		new THREE.Vector3(-5,-10,0), //down left 1
		new THREE.Vector3(10,-10,0), //down right 2
		
		new THREE.Vector3(10,20,0),  //mid right 3
		new THREE.Vector3(10,50,0),	 //Top right 4
		new THREE.Vector3(-5,50,0),  //top left 5
		//two side palliki
		new THREE.Vector3(30,50,0), //top 6
		new THREE.Vector3(40,50,0), //top 7
		new THREE.Vector3(20,20,0),  //mid 8
		
		new THREE.Vector3(40,-10,0), //down 9
		new THREE.Vector3(30,-10,0),  //down 10
		new THREE.Vector3(10,25,0),   //mid section 11
		
		new THREE.Vector3(10,15,0),   //12
		
	);

	geometry.faces.push
	(
		new THREE.Face3(0,1,2), //down square
		new THREE.Face3(0,2,3), 

		new THREE.Face3(1,3,5), //upper square
		new THREE.Face3(3,4,5),

		new THREE.Face3(12,8,11), //mid point intersect points


		new THREE.Face3(11,8,6), //up
		new THREE.Face3(7,6,8),

		new THREE.Face3(10,9,8), //down
		new THREE.Face3(8,12,10),
		//backface
		new THREE.Face3(2,1,0),
		new THREE.Face3(3,2,0),
		new THREE.Face3(5,3,1),
		new THREE.Face3(5,4,3),
		new THREE.Face3(11,8,12),
		new THREE.Face3(6,8,11),
		new THREE.Face3(8,6,7),
		new THREE.Face3(8,9,10),
		new THREE.Face3(10,12,8),
	);

	geometry.computeBoundingSphere();

	return geometry;
}

function i()
{
	//the base of i
	var geom = new THREE.Geometry();

	geom.vertices.push
	(
		//straight palkki
		new THREE.Vector3(-5,20,0), //mid left 0
		new THREE.Vector3(-5,-10,0), //down left 1
		new THREE.Vector3(10,-10,0), //down right 2
		new THREE.Vector3(10,20,0),  //mid right 3
		new THREE.Vector3(10,50,0),	 //Top right 4
		new THREE.Vector3(-5,50,0),  //top left 5
	);

	geom.faces.push
	(

		new THREE.Face3(0,1,2), //down square
		new THREE.Face3(0,2,3), 

		new THREE.Face3(1,3,5), //upper square
		new THREE.Face3(3,4,5),
	);

	//create point for i
	var geom2 = new THREE.CircleGeometry(8,32);
	geom2.translate(2.5,65,0);
	//adding meshes so we can use matrix calculations
	var mesh = (geom, new THREE.MeshBasicMaterial({color:0x0f0f0f}));
	var mesh2 = (geom2, new THREE.MeshBasicMaterial({color:0x0f0f0f}));

	var singleGeometry = new THREE.Geometry();

	singleGeometry.merge(geom,mesh.matrix);
	singleGeometry.merge(geom2,mesh2.matrix);

	return singleGeometry;

}

function init()
{
	renderer = new THREE.WebGLRenderer();
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 1000 );
	camera.position.z = 130;
	camera.position.x = 20;
	camera.position.y = 30;


	mesh = new THREE.Mesh(K(), new THREE.MeshBasicMaterial({color: 0x00ffff}));
	scene = new THREE.Scene();

	scene.add(mesh);
	renderer.setSize( window.innerWidth, window.innerHeight );	

	
	canvas[0].appendChild(renderer.domElement);
}


function render()
{
	requestAnimationFrame( render );
	mesh.rotation.y = startx * 5;
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


//Canvas references
var G_gl = document.querySelector("#glcontainer").getContext("webgl");

var headerGL = document.querySelector("#glcontainerheader").getContext("webgl");

//Three js modules load
var scene = new THREE.Scene();
var loader = new THREE.GLTFLoader();
var camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,1,2000);
camera.position.z = 100;
scene.add(camera);
var sword;
var renderer = new THREE.WebGLRenderer(headerGL);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight * 0.25);

var directionalLight = new THREE.DirectionalLight( 0xffffff ,100.0);
directionalLight.position.set( 0, 0, 0 );
camera.add( directionalLight);		

//Page initial loads
ChangeHTMLOf('#textWindow', 'HTML/MainPage.html');


loader.load("./Resources/Models/scene.gltf",function(gltf)
{
	console.log(gltf.scene);
	gltf.scene.position.x = 0;
	gltf.scene.position.y = 0;
	gltf.scene.position.z = 50;
	sword = gltf.scene.children[0];
    scene.add(gltf.scene);
},
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log('  An error happened' );

	}
);

window.setInterval(function(){
    
	sword.rotation.x += 0.01;
	sword.rotation.y += 0.05;
    renderer.render(scene,camera);

    
},10);

function readTextFile(file) {
	var rawFile = new XMLHttpRequest();
	rawFile.open('GET', file, true);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState == 4) {
			if (rawFile.status === 200 || rawFile.status === 0) {
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

function Download(url)
{
    document.getElementById("testFrame").src = url;
}

function resize(canvas) {
	var displayWidth = window.innerWidth;
	var displayHeight = window.innerHeight;
	if (canvas.width != displayWidth || canvas.height != displayHeight) {
		canvas.width = displayWidth;
		canvas.height = displayHeight;
	}
}


//event when resizes occurs
$(window).resize(resize);

function ChangeHTMLOf(source, target) {
	$(source).load(target);
}


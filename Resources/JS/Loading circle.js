var canvas = document.getElementById("glcanvas");
const gl = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
save();
render();
var x = 40;
var y = 50;
var startx = 0;

function main() {
	//readTextFile("../Text/soos.xml");
	gl.translate(canvas.width / 2, canvas.height / 2);
	gl.rotate(15 * Math.PI / 180)
	draw();
}

//event when resizes occurs
$(window).resize(function () {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
});

function render() {
	main();
	requestAnimationFrame(render);
	startx += 1;
	gl.translate(-canvas.width / 2, -canvas.height / 2);

	if (startx % 120 == 0 && startx != 0) {
		startx = 0;
		gl.clearRect(0, 0, canvas.width, canvas.height);
		gl.resetTransform();
	}

}

function draw() {

	if (startx < 25) {
		gl.strokeStyle = "#00FFFF"
	}

	if (startx > 25 && startx < 50) {
		gl.strokeStyle = "#FFFF00";
	}

	if (startx > 50 && startx < 75) {
		gl.strokeStyle = "#FF00FF";
	}
	if (startx > 75) {
		gl.strokeStyle = "#00FF00";
	}
	gl.strokeRect(100, 100, x, y);
}

function save() {
	gl.save();
}

function getLocation() {
	var x = document.getElementById("XD");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
		return true;
	}
	else {
		x.innerHTML = "U browser no support geo, plz gime munnie";
		return false;
	}
}

function showPosition(position) {
	var mapOptions = {

		center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.HYBRID
	}
	var map = new google.maps.Map(document.getElementById("XD"), mapOptions);
	return true;
}


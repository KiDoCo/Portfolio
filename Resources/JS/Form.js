
var x = document.getElementById("XD");

function validateForm()
{
	var items = document.getElementById("Examble").elements;
	for(var i = 0,element;element = items[i++];)
	{
		if(element.value === "")
		{
			alert("Form error");
			return false;
		}
	}
	return true;
}

function getLocation()
{
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition);
		return true;
	}
	else
	{
		x.innerHTML = "U browser no support geo, plz gime munnie";
		return false;
	}
}

function showPosition(position)
{
    var mapOptions = {
		
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
	var map = new google.maps.Map(document.getElementById("XD"), mapOptions);
	return true;
}

//Drag N drop

function allowDrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("text",ev.target.id);
}

function drop(ev)
{
		ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}
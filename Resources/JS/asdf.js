main();

function main()
{
	var canvas = document.getElementById("glcanvas");
	
	const gl = canvas.getContext("webgl");
	
	
	if(gl == null)
	{
		alert("DAFUQ DUUUDE");
		return;
	}
	
	gl.clearColor(0.0,255.0,0.0,1.0);
	
	gl.clear(gl.COLOR_BUFFER_BIT);
}

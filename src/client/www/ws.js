document.getElementById('id_business_version').innerHTML = "2018.05.21.4"

var websocket;
var button_connect = document.getElementById("id_button_connect");
var button_get_picture = document.getElementById("id_button_get_picture");
//----------------------------------------
function connect_to_ws()
{
	
	if (button_connect.innerHTML == "Connect"){
		var addr = "wss://" + document.location.host;
		websocket = new WebSocket(addr, "data");
		websocket.onopen = ws_on_open;
		websocket.onmessage = ws_on_message;
		websocket.onerror = ws_on_error;
		websocket.onclose =ws_on_close;
	}
	else{
		websocket.close(1000, "Normal closure");
	}
}

//----------------------------------------
function ws_on_open()
{
	button_connect.innerHTML = "Disconect";
	button_get_picture.disabled = false;
}

//----------------------------------------
function ws_on_message(e)
{
	var reader = new FileReader();
	reader.onload = function(){
		alert(reader.result);
	}
	reader.readAsText(e.data);
}

//----------------------------------------
function ws_on_error()
{
	alert("Web Socket error");
}

//----------------------------------------
function ws_on_close()
{
	button_connect.innerHTML = "Connect";
	button_get_picture.disabled = true;
}

//----------------------------------------
function get_picture()
{
	websocket.send("Salut");
}


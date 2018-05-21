document.getElementById('id_business_version').innerHTML = "2018.05.21.0"

var websocket;
var button_connect = document.getElementById("id_button_connect");
//----------------------------------------
function connect_to_ws()
{
	
	if (button_connect.innerHTML == "Connect"){
		var addr = "wss://" + document.location.host;
		websocket = new WebSocket(addr);
		websocket.onopen = ws_on_open();
		websocket.onmessage = ws_on_message();
		websocket.onerror = ws_on_error();
		websocket.onclose =ws_on_close();
	}
	else{
		websocket.close(1000, "Normal closure");
	}
}

//----------------------------------------
function ws_on_open()
{
	button_connect.innerHTML("Disconect");
}

//----------------------------------------
function ws_on_message()
{

}

//----------------------------------------
function ws_on_error()
{

}

//----------------------------------------
function ws_on_close()
{
	button_connect.innerHTML("Connect");
}

//----------------------------------------
function get_picture()
{

}


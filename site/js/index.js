var selectedRoom;

$(document).ready(function() {
	console.log("Page loaded.")
});

$(document).on("click", "#submit", function(){
	var building = $("#b-building").val();
	var floor = $("#b-floor").val();
	var room = $("#b-room").val();

	//If all values are set back to default value
	if(building==="Any" && floor==="Any" && room==="Any"){
		//console.log("Values are default");
		$("#bathroom-list").empty();
		$("#bathroom-list").hide();
	} else {
		selectedRoom = building + " " + floor + " " + room;
		console.log(selectedRoom);
	}
});
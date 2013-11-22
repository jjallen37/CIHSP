var cu
var buildings = new Array();

$(document).ready(function() {
	console.log("Page loaded.")

	$.ajax()
});

$(document).on("click", "#submit", function(){
	var building = $("#b-building").val();
	var floor = $("#b-floor").val();

	//If all values are set back to default value
	if(building==="None Selected" && floor==="None Selected"){
		console.log("Values are default");
		$("#bathroom-list").empty();
		$("#bathroom-list").toggleClass("hidden");
	} else {
		selectedRoom = building + " " + floor;
		console.log(selectedRoom);
	}
});

$(document).on("change", "#b-building", function(){

});
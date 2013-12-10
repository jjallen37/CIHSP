var base_url = "http://wwwp.cs.unc.edu/Courses/comp426-f13/jamesml/site";
var clear = true;

var bathrooms = new Array();

$(document).ready(function() {

    $.ajax(base_url + "/php/bathrooms.php/", {
        type: "GET",
        dataType: "json",
        success: function(bath_ids, status, jqXHR) {
            //console.log(bath_ids.length)
            for (var i = 0; i < bath_ids.length; i++) {
                addBathroom(bath_ids[i]);
            }
        }
    });
    console.log("Array loaded: ");
    console.log(bathrooms[0]);
});

$(document).on("click", "#submit", function() {

});

$(document).on("change", "#building", function() {
    var building = $("#building").val();
    populateBasedOnBuilding(building);
});

$(document).on("change", "#floor", function() {
	var floor = $("#floor").val();
});

$(document).on("change", "#gender", function() {

});

var addBathroom = function(bid) {

    //console.log("in addBathroom: " + bid)
    // $.ajax(url_base + "/todo.php/" + id,
    // {type: "GET",
    //  dataType: "json",
    //  success: function(todo_json, status, jqXHR) {
    // 	var t = new Todo(todo_json);
    // 	$('#todo_list').append(t.makeCompactDiv());
    //     }
    // });

    $.ajax(base_url + "/php/bathrooms.php/" + bid, {
        type: "GET",
        dataType: "json",
        success: function(bathroom_json, status, jqXHR) {
            var b = new Bathroom(bathroom_json);
            console.log(b);
            bathrooms.push(bathroom_json);
        }

    });
}

var populateBasedOnBuilding = function(building) {
	var hidden = $("#bathroom-list").is(":hidden");
	if(hidden){
		$("#bathroom-list").toggleClass("hidden");
	}
	$("#bathroom-list").empty();

    var floor = $("#floor").val();
    var gender = $("#gender").val();

    if (floor != "None Selected" && gender != "None Selected") {
        for (var i = 0; i < bathrooms.length; i++) {
            if (bathrooms[i].building === building && bathrooms[i].floor === floor && bathrooms[i].gender === gender) {
                $("#bathroom-list").append(bathrooms[i].makeCompactDiv());
            }
        }
    }else if (floor === "None Selected" && gender != "None Selected"){
    	for (var i = 0; i < bathrooms.length; i++) {
            if (bathrooms[i].building === building && bathrooms[i].gender === gender) {
                $("#bathroom-list").append(bathrooms[i].makeCompactDiv());
            }
        }
    }else if (floor != "None Selected" && gender === "None Selected"){
    	for (var i = 0; i < bathrooms.length; i++) {
            if (bathrooms[i].building === building && bathrooms[i].floor === floor) {
                $("#bathroom-list").append(bathrooms[i].makeCompactDiv());
            }
        }
    }else {
    	for (var i = 0; i < bathrooms.length; i++) {
            if (bathrooms[i].building === building) {
                $("#bathroom-list").append(bathrooms[i].makeCompactDiv());
            }
        }
    }
}
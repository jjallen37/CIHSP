var base_url = "http://wwwp.cs.unc.edu/Courses/comp426-f13/jamesml/site";
var clear = true;

var bathrooms = new Array();

$(document).ready(function() {
	$.ajax(base_url + "/php/bathrooms.php",
	       {type: "GET",
		       dataType: "json",
		       success: function(bath_ids, status, jqXHR) {
		       console.log(bath_ids.length)
		       for (var i=0; i<bath_ids.length; i++) {
			   		addBathroom(bath_ids[i]);
		       }
		   }
	       });
	//console.log("Array loaded: ");
	//console.log(bathrooms)
});

$(document).on("click", "#submit", function(){
	var building = $("#building").val();
	var floor = $("#floor").val();
	var gender = $("#gender").val();
});

$(document).on("change", "#building", function(){

});

$(document).on("change", "#floor", function(){

});

$(document).on("change", "#gender", function(){

});

var addBathroom = function(bid){

console.log("in addBathroom: " + bid)
// $.ajax(url_base + "/todo.php/" + id,
// {type: "GET",
//  dataType: "json",
//  success: function(todo_json, status, jqXHR) {
// 	var t = new Todo(todo_json);
// 	$('#todo_list').append(t.makeCompactDiv());
//     }
// });

	$.ajax(base_url + "/php/bathrooms.php" + bid,{
		type: "GET",
		dataType: "json",
		success: function(bathroom_json, status, jqXHR) {
			var b = new Bathroom(bathroom_json);
			bathrooms.push(bathroom_json);
		}

	});
}


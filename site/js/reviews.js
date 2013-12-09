var url_base = "http://wwwp.cs.unc.edu/Courses/comp426-f13/jjallen/site/php";

$(document).ready(function () {
	var TEMP_BID = 1; //Hardcoded bathroom in the db
	
	// Load review list and display it
	$.ajax(url_base + "/bathrooms.php/"+TEMP_BID+"/reviews/",
		{type: "GET",
		dataType: "json",
		success: function(review_ids, status, jqXHR) {
			alert("success");
			for (var i=0; i<review_ids.length; i++) {
				console.log(review_ids[i]);
				load_review_item(review_ids[i]);
			}
		},
		error: function(jqXHR, status, error) {
			alert("faliure:"+jqXHR.responseText);
		}});
});

//Append Specific Review to list
var load_review_item = function (id) {
	$.ajax(url_base + "/review.php/" + id,
		{type: "GET",
		dataType: "json",
		success: function(contact_json, status, jqXHR) {
			var t = new Review(contact_json);
			$('#review_list').append(t.makeCompactDiv());
		}
	});
};

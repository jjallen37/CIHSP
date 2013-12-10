var url_base = "http://wwwp.cs.unc.edu/Courses/comp426-f13/jjallen/site/php";

$(document).ready(function () {
	bid = $('#bid').val();

	// Load review list and display it
	$.ajax(url_base + "/bathrooms.php/"+bid+"/reviews/",
		{type: "GET",
		dataType: "json",
		success: function(review_ids, status, jqXHR) {
			alert("success");
			if (review_ids===null) {
				$('#review_list').html("No Reviews yet");
			}else{
				for (var i=0; i<review_ids.length; i++) {
					console.log(review_ids[i]);
					load_review_item(review_ids[i]);
				}
			}
		},
		error: function(jqXHR, status, error) {
			alert("faliure:"+jqXHR.responseText);
		}});
});

//Append Specific Review to list
var load_review_item = function (id) {
	$.ajax(url_base + "/reviews.php/" + id,
		{type: "GET",
		dataType: "json",
		success: function(review_json, status, jqXHR) {
			console.log(review_json.subject);
			var t = new Review(review_json);
			$('#review_list').append(t.makeCompactDiv());
		},
		error: function(jqXHR, status, error) {
			alert("faliure:"+jqXHR.responseText);
		}});
};
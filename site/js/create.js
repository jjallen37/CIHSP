var url_base = "http://wwwp.cs.unc.edu/Courses/comp426-f13/jjallen/site/php";

$(document).ready(function () {
	// Add new review 
	$('#new_review_form').on('submit',
		function (e) {
			e.preventDefault();
			$.ajax(url_base + "/reviews.php/",
				{type: "POST",
				dataType: "json",
				data: $(this).serialize(),
				success: function(review_json, status, jqXHR) {
					alert("Success!");
					window.location.href = "http://wwwp.cs.unc.edu/Courses/comp426-f13/jjallen/site/reviews.php";
				},
				error: function(jqXHR, status, error) {
					alert("faliure:"+jqXHR.responseText);
				}});
		});
});


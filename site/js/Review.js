var Review = function(review_json) {
	console.log("JS Review :"+review_json);
    this.id = review_json.idl;
    this.bid = review_json.bid;
    this.name = review_json.name;
    this.subject = review_json.subject;
    this.reviewText = review_json.reviewText;
    this.overall = review_json.overall;
};

Review.prototype.makeCompactDiv = function() {
    var reviewDiv = $("<div></div>");
    reviewDiv.addClass('review');

    var leftDiv = $("<div></div>");
    leftDiv.addClass('col-md-6');
    leftDiv.html("<h4>" + this.name + "<br> <small>"+this.overall+"</small></h4>");
    reviewDiv.append(leftDiv);

    var rightDiv = $("<div></div>");
    rightDiv.addClass('col-md-6');
    rightDiv.html("<b>"+this.reviewText+"</b>");
    reviewDiv.append(rightDiv);

    reviewDiv.data('review', this);
    
    return reviewDiv;
};

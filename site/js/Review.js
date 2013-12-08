var Review = function(review_json) {
	console.log("JS Review :"+review_json);
    this.id = review_json.idl;
    this.bid = review_json.bid;
    this.name = review_json.name;
    this.subject = review_json.subject;
    this.reviewText = review_json.reviewText;
    this.overall = review_json.overall;
};


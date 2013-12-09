var Review = function(review_json) {
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
    leftDiv.addClass('span6');
    leftDiv.html(this.subject+"-- <b>" + this.name + "<br><small>"+this.overall+"</small></b>");
    reviewDiv.append(leftDiv);

    var rightDiv = $("<div></div>");
    rightDiv.addClass('span6');
    rightDiv.html("<b>"+this.reviewText+"</b>");
    reviewDiv.append(rightDiv);

    reviewDiv.data('review', this);
    
    return reviewDiv;
};

var Bathroom = function(bathroom_json) {
    this.bid = bathroom_json.bid;
    this.building = bathroom_json.building;
    this.floor = bathroom_json.floor;
    this.roomNumber = bathroom_json.roomNumber;
    this.desc = bathroom_json.description;
    this.gender = bathroom_json.gender;
};

Bathroom.prototype.makeCompactDiv = function() {
    var bathroomDiv = $("<div></div>");
    bathroomDiv.addClass("bathroom well well-sm");

    var titleDiv = $("<div></div>");
    titleDiv.html("<b>" + this.building + " Floor: " + this.floor + "</b>");
    bathroomDiv.append(titleDiv);

    var roomAndGender = $("<div></div>");
    roomAndGender.html("Room: " + this.roomNumber + "<br>Gender: " + this.gender);
    bathroomDiv.append(roomAndGender);

    var descrip = $("<div></div>");
    descrip.html("<small>Description: " + this.desc + "</small>");
    //console.log(this.desc);
    bathroomDiv.append(descrip);

    bathroomDiv.data("bathroom", this);

    return bathroomDiv;
};

Bathroom.prototype.makeHeader = function() {
    var cdiv = $("<div></div>");
    cdiv.addClass('bathroom');

    var left_div = $("<div></div>");
    left_div.addClass("col-sm-6");
    left_div.html("<h3>"+this.roomNumber + "<br><small>" +
             this.building+"</small><br><small>Floor " + this.floor + "</small></h3>");
    cdiv.append(left_div);

    var right_div = $("<div></div>");
    right_div.addClass("col-sm-6");
    right_div.html("<h3>Oh god the rating is calculated"+"</h3>");
    cdiv.append(right_div);

    return cdiv;
};
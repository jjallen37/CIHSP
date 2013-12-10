var Bathroom = function(bathroom_json) {
    this.bid = bathroom_json.bid;
    this.building = bathroom_json.building;
    this.floor = bathroom_json.floor;
    this.roomNumber = bathroom_json.roomNumber;
    this.description = bathroom_json.description;
    this.gender = bathroom_json.gender;
};

Bathroom.prototype.makeCompactDiv = function() {
    var building_div = $("<div></div>");
    building_div.addClass("result");
    building_div.html(this.building + " Floor: " + this.floor + " Room: " + this.roomNumber + " Gender: " + this.gender);
   
    building_div.data("result", this);

    return building_div;
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
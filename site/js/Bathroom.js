
var Bathroom = function(contact_json) {
    this.bid = contact_json.bid;
    this.building = contact_json.building;
    this.floor = contact_json.floor;
    this.roomNumber = contact_json.roomNumber;
    this.description = contact_json.description;
    this.gender = contact_json.gender;
};

Bathroom.prototype.makeCompactDiv = function() {
    var building_div = $("<div></div>");
    building_div.addClass("result");
    building_div.html(this.building + " Floor: " + this.floor + " Room: " + this.roomNumber + " Gender: " + this.gender);
   
    building_div.data("result", this); 

    return building_div;
};
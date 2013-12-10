
var Bathroom = function(contact_json) {
    this.bid = contact_json.id;
    this.building = contact_json.building;
    this.floor = contact_json.floor;
    this.roomNumber = contact_json.roomNumber;
    this.description = contact_json.description;
    this.gender = contact_json.gender;
};

Bathroom.prototype.makeCompactDiv = function() {
    var cdiv = $("<div></div>");
    cdiv.addClass('bathroom');

    var building_div = $("<div></div>");
    building_div.addClass('building');
    building_div.html(this.building + " Floor: " + this.floor + " Room: " + this.roomNumber + " Gender: " + this.gender);
    cdiv.append(building_div);

    cdiv.data('building_div', this);

    return cdiv;
};
<?php

class Bathroom
{
	private $bid;
	private $building;
	private $floor;
	private $roomNumber;
	private $description;
	public static function create($building, $floor, $roomNumber, $description){
		$mysqli = new mysqli("localhost", "jjallen", "password", "cihsp");
		$result = $mysqli->query("insert into Bathroom (bid,building,floor,roomNumber,description)
											values (0, . $building . ', ' . $floor . ',' . $roomNumber . ', ' . $description . ')''");

		if($result) {
			$new_id = $mysqli->insert_id;
			return new Bathroom($new_id, $building, $floor, $roomNumber, $description);
		}
		return null;
	}

	public static function findByID($bid) {
	$mysqli = new mysqli("localhost", "jjallen", "password", "cihsp");
		$result = $mysqli->query("select * from Bathroom where bid = " . $bid);
		if ($result) {
			if ($result->num_rows == 0){
				return null;
			}
			$review_info = $result->fetch_array();
			return new Bathroom(intval($review_info['bid']),
					       $review_info['building']),
					       intval($review_info['floor']),
					       $review_info['roomNumber'],
					       $review_info['description']);		
		}
		return null;
	}

  	public static function getAllIDs() {
    	$mysqli = new mysqli("classroom.cs.unc.edu", "kmp", "comp426", "kmpdb");

    	$result = $mysqli->query("select id from Todo");
    	$id_array = array();

    	if ($result) {
     	 while ($next_row = $result->fetch_array()) {
			$id_array[] = intval($next_row['id']);
    		}
    	}
    	return $id_array;
  	}

	private function __construct($bid, $building, $floor, $roomNumber, $description){
		$this->bid = $bid;
		$this->building = $building;
		$this->floor = $floor;
		$this->roomNumber = $roomNumber;
		$this->description = $description;
	}

	public function getBathroomID() {
		return $this->bid;
	}

	public function getBuilding() {
		return $this->building;
	}

	public function getFloor() {
		return $this->floor;
	}

	public function getRoomNumber() { 
		return $this->roomNumber;
	}

	public function getDescription() {
		return $this->description;
	}

	public function getJSON() {
		$json_rep = array();
		$json_rep['bid'] = $this->bid;
		$json_rep['building'] = $this->building;
		$json_rep['floor'] = $this->floor;
		$json_rep['roomNumber'] = $this->roomNumber;
		$json_rep['description'] = $this->description;
		return $json_rep;
	}
}

?> 
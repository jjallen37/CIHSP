<?php

$conn = new mysqli("classroom.cs.unc.edu", "jjallen", "classroomjja", "jjallendb");

if(mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysql_connect_error();
}

  // private $bid;
  // private $building;
  // private $floor;
  // private $roomNumber;
  // private $description;
  // private $gender;


for($i=0; $i<50; $i++) {
  // $title = $title_part1[rand(0,5)] . " " .
  //   $title_part2[rand(0,5)] . " " .
  //   $title_part3[rand(0,5)] . " " .
  //   $title_part4[rand(0,5)] . ".";
  // $project = $project_names[rand(0,4)];
  // $complete = 0;
  // if (rand(0,99) < 10) {
  //   $complete = 1

  mysqli_query($conn, "INSERT INTO Bathroom (bid, building, floor, roomNumber, description, gender) 
    VALUES (0,'$building','$floor','$roomNumber','$description', '$gender')");

  echo "Query Complete <br>";
}


?>
<html>
 <head>
   <title>Contact List Example Setup</title>
 <head>
 <body>
   <h1>Database Setup Complete</h1>
 </body>
</html>
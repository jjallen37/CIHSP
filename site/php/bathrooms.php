<?php

require_once('orm/Bathroom.php');

$path_components = explode('/', $_SERVER['PATH_INFO']);

// Note that since extra path info starts with '/'
// First element of path_components is always defined and always empty.
// Note that we only retreive bathrooms, never update or add new ones.

if ($_SERVER['REQUEST_METHOD'] == "GET") {

    if ((count($path_components) >= 2) &&
      ($path_components[1] != "")) {

    // Interpret <id> as integer
    $bath_id = intval($path_components[1]);

    // Look up object via ORM
    $bathroom = Bathroom::findByID($bath_id);

    if ($todo == null) {
      // Todo not found.
      header("HTTP/1.0 404 Not Found");
      print("Todo id: " . $bath_id . " not found.");
      exit();
    }
    // Normal lookup.
    // Generate JSON encoding as response
    header("Content-type: application/json");
    print($todo->getJSON());
    exit();

  }
  // ID not specified, then must be asking for index
  header("Content-type: application/json");
  print(json_encode(Todo::getAllIDs()));
  exit();
  // GET means either instance look up, index generation, or deletion

}

// If here, none of the above applied and URL could
// not be interpreted with respect to RESTful conventions.

header("HTTP/1.0 400 Bad Request");
print("Did not understand URL");

?>
<?php
require_once('orm/Review.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  // if (is_null($_SERVER['PATH_INFO'])) {
  //   $range_start = -1;
  //   $range_end = -10;

  //   // if (!is_null($_GET['range_start'])) {
  //     $range_start = intval($_GET['range_start']);
  //   } 
  //   if (!is_null($_GET['range_end'])) {
  //     $range_end = intval($_GET['range_end']);
  //   }
    
  //   $transactions = Review::getRange($range_start, $range_end);

  //   if (is_null($transactions)) {
  //     // Something went wrong. Return error.
  //     header("HTTP/1.1 400 Bad Request");
  //     print("Error in range specification");
  //     exit();
  //   }

  //   $transaction_ids = array();
  //   foreach ($transactions as $t) {
  //     $transaction_ids[] = $t->getID();
  //   }
  //   header("Content-type: application/json");
  //   print(json_encode($transaction_ids));
  //   exit();
  // } else {
  //   $transaction_id = intval(substr($_SERVER['PATH_INFO'], 1));
  //   $Review = Review::findByID($transaction_id);
    
  //   if (is_null($Review)) {
  //     header("HTTP/1.1 404 Not Found");
  //     print("Review id specified either not found or not legal");
  //     exit();
  //   }
  //   if (is_null($_GET['delete'])) {
  //     header("Content-type: application/json");
  //     print(json_encode($Review->getJSON()));
  //     exit();
  //   } else {
  //     $Review->delete();
  //     header("Content-type: application/json");
  //     print(json_encode(true));
  //     exit();
  //   }
  // }
} else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  //
  // if (is_null($_SERVER['PATH_INFO'])) {
    //Review is being added
    //POST review.php 
    //
    // $price = floatval($_POST['price']);
    // if ($price <= 0) {
    //   header("HTTP/1.1 400 Bad Request");
    //   print("Price is illegal");
    //   exit();
    // }
    // XXX - Still need to validate with regard to player's availability and owner's budget.

    $Review = Review::create(1,'James A','Toilet too high', 'Stall is very raised', 3);
    if (is_null($Review)) {
      header("HTTP/1.1 400 Bad Request");
      print("Review failed at database");
      exit();
    }

    header("Content-type: application/json");
    print(json_encode($Review->getJSON()));
    exit();
  // } else {//review.php/<bid>
  //   // print(intval(substr($_SERVER['PATH_INFO'], 1)));
  //   $transaction_id = intval(substr($_SERVER['PATH_INFO'], 1));
  //   $Review = Review::findByID($transaction_id);
  //   if ($Review == null) {
  //     header("HTTP/1.1 404 Not Found");
  //     print("Review id specified either not found or not legal");
  //     exit();
  //   }

  //   $Review->setPrice($price);
  //   header("Content-type: application/json");
  //   print(json_encode($Review->getJSON()));
  //   exit();
  // }
}
  
header("HTTP/1.1 400 Bad Request");
print("URL did not match any known action.");
?>
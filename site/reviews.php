<?php

if (!isset($_GET['bid'])) {
    header("Location: http://wwwp.cs.unc.edu/Courses/comp426-f13/jjallen/site/index.html");
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">

<!-- NOTE: We use Twitter Bootstrap for layout and responsiveness. We want this application to be largely based in the mobile environment. -->

<head>
    <meta charset="utf-8">
    <title>&middot; C I H S P &middot;</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="reviews.css" rel="stylesheet">
    <!-- <script src="js/jquery-1.10.2.min.js"></script> -->
    <script src="/Courses/comp426-f13/jquery-1.10.2.js"></script>
    <script src="js/reviews.js"></script>
    <script src="js/Review.js"></script>
    <script src="js/Bathroom.js"></script>
</head>

<body>
    <div class="container-narrow">
        <div class="masthead">
            <h3 class="muted">Can't I Have Some Privacy?</h3>
        </div>

        <hr>

        <!-- bathroom info -->
        <div id='bathroomHeader' class="row">
        </div>

        <form style="text-align:right;" action="create.php">
            <input type='hidden' id='bid' name='bid' value=<?php echo $_GET["bid"]; ?>>
            <button type="submit" id="newReview" class="btn btn-large btn-success">Write a Review</button>
        </form>

        <p></p>

        <div id="review_list">
        </div>
        <hr>

        <div class="footer">
            Building, floor, or bathroom missing? Email us at: CIHSP@gmail.com.
            <p>&copy; Allen/Martin 2013</p>
        </div>

    </div>
    <!-- /container -->

</body>

</html>
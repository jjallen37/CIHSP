<?php
session_start();

if (!isset($_SESSION['bid'])) {
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
</head>

<body>
    <div class="container-narrow">
        <form> <input type='hidden' id='bid' value=<?php echo $_SESSION["bid"]; ?>></form>
        <div class="masthead">
            <h3 class="muted">Can't I Have Some Privacy?</h3>
        </div>

        <hr>

        <!-- bathroom info -->
        <div class="row">
            <div class="col-sm-6">
                <h3>SN008<br>
                    <small>Sitterson</small><br>
                    <small>0th Floor</small>
                </h3>
            </div>
            <div class="col-sm-6">
                <h3>Overall - 5/5<br>
                    <small>Cleanliness - 5/5</small><br>
                    <small>Congestion - 5/5</small><br>
                    <small>Convenience - 5/5</small>
                </h3>
            </div>
        </div>

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
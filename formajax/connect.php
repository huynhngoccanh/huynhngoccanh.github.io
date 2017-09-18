<?php
    // connection to the database
    $conn = mysql_connect("localhost", "root", "") or die("Unable to connect to MySQL");
    // select a database to work with
    mysql_select_db("cakephp") or die("Could not select examples");
?>
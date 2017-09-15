<?php
include "connect.php";
include "checkvalidate.php";
$checkValidate = new CheckValidate();
if (isset($_GET['username'])) {
	$checkUser = $checkValidate->checkUsername($_GET['username']);
	if ($checkUser == 1) {
		echo "<span style = 'color: red' >username is exits </span>";
	} else {
		echo "username is already";
	}
}
<?php
include "connect.php";
include "checkvalidate.php";
$checkValidate = new CheckValidate();
if (isset($_GET['username']) && isset($_GET['password']) && 
	isset($_GET['email']) && isset($_GET['date'])) {
	$checkUsername = $checkValidate->checkUsername($_GET['username']);
    $checkFormatUser = $checkValidate->checkFormatUsername($_GET['username']);
    $checkFormatPassword = $checkValidate->checkFormatPassword($_GET['password']);
    $checkFormatEmail = $checkValidate->checkFormatEmail($_GET['email']);
    $checkFormatDate = $checkValidate->checkFormatDate($_GET['date']);
    if ($checkUsername == false && $checkFormatUser == true && 
    	$checkFormatPassword == true && $checkFormatEmail == true && 
    	$checkFormatDate == true) {
        echo "Send data is successfull";
    } else {
    	echo "Send data is failed";
    }
}
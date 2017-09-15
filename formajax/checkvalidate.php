<?php 
class CheckValidate
{
	/*
	* Check username is exist or not
	* @param username string 
	*/
	public function checkUsername($username)
	{
		$sql = "SELECT * FROM users WHERE username = '".$username."'";
		$sql_result = mysql_query($sql) or die (mysql_error());
		$row = mysql_fetch_row($sql_result);
		// Check database have username
		if ($row === false) {
		    return false;
		} else {
		    return true;
		}
	}

	/*
	* Check username is correct format
	* @param username string
	*/
	public function checkFormatUsername($username)
	{
		if (strlen($username) < 6) {
			return false;
		}
		if (strlen($username) > 16) {
			return false;
		}
		return true;
	}

	/*
	* Check password is correct format
	* @param password string
	*/
	public function checkFormatPassword($password)
	{
		if (strlen($password) < 8) {
			return false;
		}
		if (strlen($password) > 16) {
			return false;
		}
		return true;
	}

	/*
	* Check Email is correct format
	* @param Email string
	*/
	public function checkFormatEmail($email)
	{
		if (!preg_match("/([\w\-\.]+\@[\w\-]+\.[\w\-]+)/", $email)) {
			return false;
		}
	}

	/*
	* Check Date is correct format
	* @param Date string
	*/
	public function checkFormatDate($date)
	{
		$arr_date  = explode('/', $date);
		return (checkdate($arr_date[1], $arr_date[0], $arr_date[2]));
	}
}
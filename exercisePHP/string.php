<?php 
$array1 = array('2', '1', '3');
$array2 = array('1', '3');
$array3 = 3;
$string1 = "xinchao 123";
$string2 = "xinchao";
$trim = "trim";
// checkArray($array1, $array2, $array3);
// mergeArray($array1,$array2);
// find1($array1);
// devide($array1);
// intersectRSort($array1, $array2);
// printSingleQoute();
// findString($string1, $string2);
// removeM($trim);
/*
* check is array
* @param array1 array
* @param array2 array
* @param array3 array
*/
function checkArray($array1, $array2, $array3) {
    echo is_array($array1) ? 'đây là mảng' : "invalid parameter";
    echo "</br>";
    echo is_array($array2) ? 'đây là mảng' : "invalid parameter";
    echo "</br>";
    echo is_array($array3) ? 'đây là mảng' : "invalid parameter";
    echo "</br>";
}

/*
* find 1 in array
* @param array array
*/
function find1($array) {
    echo in_array("1", $array) ? "found" : "not found";
}

/*
* merge two array and get and delete value repeat
* @param array1 array
* @param array2 array
*/
function mergeArray($array1, $array2) {
	$result = array_merge($array1, $array2);
	$result = array_unique($result);
	echo implode(" ", $result);
}

/*
* get value in array then call sumInt . sumInt return sum of number in this value.
then check mod 2
* @param array array
*/
function devide($array) {
    $result = array_filter($array, function ($value) {
        $sum = sumInt($value);
        if (fmod($sum,2) == 0) {
        	return $value;
        } else {
        	return 0;
        }
    });
    echo implode(" ", $result);
}

/*
* sumInt return sum of number in this value.
* @param number int
* return sum
*/
function sumInt ($number) {
	$sum = 0;
	while ( $number > 0) {
		$temp = $number % 10;
        $sum += $temp;
        $number = $number / 10;
	}
	return $sum;
}

/*
* get general value then sort asc
* @param array1 array
* @param array2 array
*/
function intersectSort($array1, $array2) {
    $result = array_intersect($array1, $array2);
    sort($result);
    echo implode(" ", $result);
}

/*
* get general value then sort desc
* @param array1 array
* @param array2 array
*/
function intersectRSort($array1, $array2) {
    $array = array_diff($array1, $array2);
    $resultDiff = array_keys($array);
    echo implode(" ", $array);
}
/*
* Print string with single qoute
*/
function printSingleQoute() {
    echo 'singgle quote Money $__$ money';
}
/*
* Print string with double qoute
*/
function printDoubleQoute() {
    echo "double quote Money \$__\$money";
}
function findString($string1, $string2) {
    if(strpos($string1,$string2) !== false) {
        return 1;
    } else {
        return 21;
    }
}
function removeM($trim) {
    $trim = trim($trim,"m");
    echo $trim;
}
?>

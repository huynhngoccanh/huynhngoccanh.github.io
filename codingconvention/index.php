<?php
include 'me/XinChao.php';
use me\controller\Hello;

$connguoi = new Hello();
$listname = $connguoi->listName();
$listday = $connguoi->listDay();

//Thực hành for quy chuẩn ----
foreach ($listname as $list => $value) {
	echo $value;
	echo '<br>';
}
//Thực hành switch quy chuẩn ----
foreach ($listday as $day => $value) {
    switch ($value) {
	case 2:
	    echo '<br>';
		echo "hôm nay là thứ hai";
		break;
	case 3:
	    echo '<br>';
		echo "hôm nay là thứ ba";
		break;
	case 4:
	    echo '<br>';
		echo "hôm nay là thứ tư";
		break;
	case 5:
	    echo '<br>';
		echo "hôm nay là thứ năm";
		break;
	case 6:
	    echo '<br>';
		echo "hôm nay là thứ sáu";
		break;
	case 7:
	    echo '<br>';
		echo "hôm nay là thứ bảy";
		break;
	default:
	    echo '<br>';
		echo "hôm nay là Chủ Nhật";
		echo '<br>';
		break;
    }
}
//Thực hành if quy chuẩn ----
foreach ($listday as $key => $value) {
	if ($value==2) {
		echo '<br>';
		echo "Hôm nay là thứ hai";
	} elseif ($value==3) {
		echo '<br>';
		echo "Hôm nay là thứ ba";
	} elseif ($value==4) {
		echo '<br>';
		echo "Hôm nay là thứ tư";
	} elseif ($value==5) {
		echo '<br>';
		echo "Hôm nay là thứ năm";
	} elseif ($value==6) {
		echo '<br>';
		echo "Hôm nay là thứ sáu";
	} elseif ($value==7) {
		echo '<br>';
		echo "Hôm nay là thứ bảy";
	} elseif ($value==8) {
		echo '<br>';
		echo "Hôm nay là thứ hai";
		echo '<br>';
	}
}
//Thực hành for quy chuẩn ----
for ($i=0; $i < $connguoi->number; $i++) { 
	echo '<br>';
	echo "Chúc bạn may mắn";
}


?>
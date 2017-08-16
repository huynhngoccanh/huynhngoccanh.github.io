<?php 
namespace Me\Controller;

class Hello
{
    public $name = "huynh ngoc canh";
    public $number = 3;
    public $listname = [];
    public function getName()
    {
        return $this->name;
    }
    public function listName()
    {
        $listname =[
        "Huỳnh Ngọc Cảnh",
        "Lê Văn Nam",
        "Nguyễn Văn A", 
        "Lê văn Tài"
        ];
        return $listname;
    }
    public function listDay()
    {
    	$listDay = [2, 3, 4, 5, 6, 7, 8];
    	return $listDay;
    }
}

?>
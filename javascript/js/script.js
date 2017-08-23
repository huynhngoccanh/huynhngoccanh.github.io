
    //tạo mảng ảnh và số thứ tự ảnh
    var anh= [];
    var img_number = 0;
    // hàm khởi tạo ảnh
    function createAnh() {
        for(var i=0; i<4; i++)
        {
            anh[i]= new Image();
            anh[i].src="img"+"/"+"images_"+i+".jpg";
        }
    }
    // hàm dời ảnh sau 5s
    setInterval(next, 5000);
    /*hàm dời ảnh khi click previous
      khi img = 3 thì gán lại img_number =-1 xuống dưới ++ lại thành 0
    */
    function next() {
        if (img_number==3)
        {
            img_number=-1;
        }
        if (img_number<3)
        {
            img_number++;
            document.getElementById('slide-img').src=anh[img_number].src;
        }
        imgActive();
    }
    // hàm dời ảnh lui khi click previous
    function previous() {
        if (img_number==0)
        {
            img_number=4;
        }
        if (img_number>0)
        {
            img_number--;
            document.getElementById('slide-img').src=anh[img_number].src;
        }
        imgActive();
    }
    //hàm thay đổi ảnh khi chọn ảnh
    function changeImg(number,img) {
        img_number = number;
        document.getElementById('slide-img').src=img.src;
        imgActive();
    }
    // hàm imgActive tạo hiệu ứng thẻ được chọn
    function imgActive() {
        get_all_img=document.getElementById('index');
        // setAttribute mờ toàn bộ ảnh
        get_img= get_all_img.getElementsByTagName('img');
        for (var i = 0; i < get_img.length; i++) {
            get_img[i].style.opacity = "0.5";
        }
        // setAttribute cho ảnh mini đang được chọn
        active=get_all_img.getElementsByTagName('img').item(img_number).setAttribute("style", "opacity: 1;");
    }


    //create array 
    var image = [];
    var img_number = 0;
    /**
    * create image
    */
    function createImage() 
    {
        for(var i = 0; i < 4; i++)
        {
            image[i] = new Image();
            image[i].src = "img" + "/" + "images_" + i + ".jpg";
        }
    }
    /**
    *function move image after 5s
    */
    setInterval(next, 5000);
    /**
    *function move image when click next
    */
    function next() 
    {
        if (img_number == 3) {
            img_number =- 1;
        }
        if (img_number < 3) {
            img_number++;
            document.getElementById('slide-img').src = image[img_number].src;
        }
        imgActive();
    }
    /**
    *function move image when click previous
    */
    function previous() 
    {
        if (img_number == 0) {
            img_number = 4;
        }
        if (img_number > 0) {
            img_number--;
            document.getElementById('slide-img').src = image[img_number].src;
        }
        imgActive();
    }
    /**
    *function move image when click image
    */
    function changeImg(number, img) 
    {
        img_number = number;
        document.getElementById('slide-img').src = img.src;
        imgActive();
    }
    /**
    *function create animation when image active
    */
    function imgActive() 
    {
        get_all_img = document.getElementById('index');
        // setAttribute opacity 0.5
        get_img = get_all_img.getElementsByTagName('img');
        for (var i = 0; i < get_img.length; i++) {
            get_img[i].style.opacity = "0.5";
        }
        // setAttribute for image active
        active = get_all_img.getElementsByTagName('img').item(img_number).setAttribute("style", "opacity: 1;");
    }

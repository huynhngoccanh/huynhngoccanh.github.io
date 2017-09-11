// create array 
var image = [];
var NUMBER = 0;
/**
* create image
*/
function createImage() {
    for(var i = 0; i < 4; i++) {
        image[i] = new Image();
        image[i].src = "img" + "/" + "images_" + i + ".jpg";
    }
}

/**
* move image after 5s
* @param {function} next 
* @param {number} time
*/
setInterval(next, 5000);

/**
* move image when click next
*/
function next() {
    if (NUMBER == 3) {
        NUMBER =- 1;
    }
    if (NUMBER < 3) {
        NUMBER++;
        document.getElementById('slide-img').src = image[NUMBER].src;
    }
   imgActive();
}

/**
* move image when click previous
*/
function previous() {
    if (NUMBER == 0) {
        NUMBER = 4;
    }
    if (NUMBER > 0) {
        NUMBER--;
        document.getElementById('slide-img').src = image[NUMBER].src;
    }
    imgActive();
}

/**
* move image when click image
*@param {number} number image
*@param {object} this image
*/
function changeImg(number, thisImage) {
   NUMBER = number;
    document.getElementById('slide-img').src = thisImage.src;
    imgActive();
}

/**
* create animation when image active
*/
function imgActive() {
    Element = document.getElementById('index');
    // setAttribute opacity 0.5 for all image in div
    ImageName = Element.getElementsByTagName('img');
    for (var i = 0; i < ImageName.length; i++) {
        ImageName[i].style.opacity = "0.5";
    }
    // setAttribute for image active
    active = Element.getElementsByTagName('img')
    .item(NUMBER).setAttribute("style", "opacity: 1;");
}


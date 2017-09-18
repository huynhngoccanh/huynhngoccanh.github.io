function ajax() {
    if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //document.getElementById(id_show).innerHTML = this.responseText;
                $notification = this.responseText;
                alert($notification);
            }

        };
    var url = "ajax.php";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
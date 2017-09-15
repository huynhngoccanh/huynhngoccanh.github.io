/*
* Check input username
*/      
function checkInputUser() {
    var username = document.getElementsByName("Username")[0].value;// get value username
    var errUserName = document.getElementById("errUser");// get element notification
    if (username.length < 6) {
        errUserName.innerHTML = "Username length min 8 letter!";
        return false;
    }
    if (username.length > 16) {
        errUserName.innerHTML = "Username length max 16 letter!";
        return false;
    }
    errUserName.innerHTML = "Valid";
    errUserName.setAttribute("class", "valid");// set attribute notification
    var url = "checkuser.php?username=" + username;
    ajax("errUser", url);// call function ajax check exist username
    return true;
}
/*
* Check input Password
*/      
function checkInputPassword() {
    var password = document.getElementsByName("Password")[0].value;
    var errPassword = document.getElementById("errPassword");
    if (password.length < 8) {
        errPassword.innerHTML = "Password length min 8 letter!";
        return false;
    }
    if (password.length > 16) {
        errPassword.innerHTML = "Password length max 16 letter!";
        return false;
    }
    errPassword.innerHTML = "Valid";
    errPassword.setAttribute("class", "valid");
    return true;
}
/*
* Check input Password
*/
function checkInputEmail() {
    var email = document.getElementsByName("Email")[0].value;
    var errEmail = document.getElementById("errEmail");
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {  
        errEmail.innerHTML = "Email is invalid";
        return false;  
    }  
    errEmail.innerHTML = "Valid";
    errEmail.setAttribute("class", "valid");
    return true;
}
function checkInputDate() {
    var date = document.getElementsByName("Date")[0].value;
    var errDate = document.getElementById("errDate");
    if (!(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(date))) {  
        errDate.innerHTML = "Date is invalid";
        return false;  
    }  
    errDate.innerHTML = "Valid";
    errDate.setAttribute("class", "valid");
    return true;
}
function refresh() {
    document.getElementById("errEmail").innerHTML = "";
    document.getElementById("errPassword").innerHTML = "";
    document.getElementById("errUser").innerHTML = "";
    document.getElementById("errDate").innerHTML = "";
    document.getElementsByName("Username")[0].value = "";
    document.getElementsByName("Password")[0].value = "";
    document.getElementsByName("Email")[0].value = "";
    document.getElementsByName("Date")[0].value = "";
}
function clickSubmit() {
    document.getElementById("txtHint").innerHTML = "";
    // check all input
    if (checkInputUser() && checkInputPassword() &&
        checkInputEmail() && checkInputDate()) {
        var username = document.getElementsByName("Username")[0].value;
        var password = document.getElementsByName("Password")[0].value;
        var email = document.getElementsByName("Email")[0].value;
        var date = document.getElementsByName("Date")[0].value;
        var url = "checkform.php?username=" + username + "&password=" +
        password + "&email=" + email + "&date=" + date;
        ajax("txtHint", url);
    }
}
 /*
  * Function ajax
  */
function ajax(id_show,url_php) {
    if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(id_show).innerHTML = this.responseText;
            }

        };
    xmlhttp.open("GET", url_php, true);
    xmlhttp.send();
}
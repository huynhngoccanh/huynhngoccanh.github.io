
var txtPreYear = document.createTextNode("<<");
var txtPreYear = document.createTextNode("<<");
var txtPreMonth = document.createTextNode("<");
var txtNextMonth = document.createTextNode(">");
var txtNextYear = document.createTextNode(">>");
var nothing = document.createTextNode("");

/*
* Create Calendar when click input
*/
function calendar() {
    var date = new Date();
    currentMonth = date.getMonth() + 1;
    currentYear = date.getFullYear();
    showCalendar (currentMonth, currentYear);
}

/*
* Create Calendar when click input
*@param month int
*@param year int
*/
function showCalendar(month,year) {
    //remove calendar after create
    var mydiv = document.getElementById('calendar');
    if (mydiv) {
        mydiv.remove();
    }
    // create <div> calendar
    createElement("DIV", "block", "calendar", nothing);
    // create <div> chose date
    createElement("DIV", "calendar", "choseDate", nothing);
    // create <button> pre, next, select month year
    for (var i = 0; i < 6; i++) {
        if (i == 0) {
            createElement("button", "choseDate", "button1", txtPreYear);
            document.getElementById("button1").setAttribute("onclick","pre('year')");
        } 
        if (i == 1) {
            createElement("button", "choseDate", "button2", txtPreMonth);
            document.getElementById("button2").setAttribute("onclick","pre('month')");
        }
        if (i == 2) {
             var number = document.createTextNode(i);
            createElement("select", "choseDate", "button3", nothing);
            createOption(1, 12, "button3"); // cretea option select month
            document.getElementById("button3").setAttribute("onchange","choseMY()");
        }
        if (i == 3) {
            createElement("select", "choseDate", "button4", nothing);
            createOption(1995, 2040, "button4"); // cretea option select year
            document.getElementById("button4").setAttribute("onchange","choseMY()");
        }
        if (i == 4) {
            createElement("button", "choseDate", "button5", txtNextMonth);
            document.getElementById("button5").setAttribute("onclick","next('month')");
        }
        if (i == 5) {
            createElement("button", "choseDate", "button6", txtNextYear);
            document.getElementById("button6").setAttribute("onclick","next('year')");
        }
    }
    createElement("DIV", "calendar", "date", nothing); // create <div> list day in week
    createDate(1, 7, "date"); // create day in week
    createElement("DIV", "calendar", "listDate", nothing); // create <div> listDate 
    createDate(0, 41, "listDate", month, year); 
    chosenDate(month,year);
}

/*
* Create Element when click input
*@param nameElement string
*@param nameParent string
*@param nameAttribute string
*@param contain Dom
*/
function createElement(nameElement, nameParent, nameAttribute, contain) {
    var addElement = document.createElement(nameElement);
    addElement.appendChild(contain);
    document.getElementById(nameParent).appendChild(addElement)
    .setAttribute("id", nameAttribute);
}

/*
* Create option in select
*@param first int
*@param last int
*@param nameElement string
*/
function createOption(first, last , nameElement) {
    for (var i = first; i <= last; i++) {
        var containOption = document.createTextNode(i)
        var option = createElement("option", nameElement, "", containOption);
    }
}

/*
* Create day in week and date in month 
*@param first int
*@param last int
*@param nameParent string (date or day)
*@param month int
*@param year int
*/
function createDate(first, last, nameParent, month, year) {
    var flag = 1;
    var endDayOfMonth = new Date(year, month, 0).getDate();// end day of month || total day
    var firstDayOfMonth = new Date(year, month - 1, 1).getDay();// firt day of month
    for (var i = first; i <= last; i++) { // Set content for date in week
        if (nameParent == "date") {
            switch (i) {
                case 1:
                    var containOption = document.createTextNode("Sun");
                    break;
                case 2:
                    var containOption = document.createTextNode("Mon");
                    break;
                case 3:
                    var containOption = document.createTextNode("Tue");
                    break;
                case 4:
                    var containOption = document.createTextNode("Wed");
                    break;
                case 5:
                    var containOption = document.createTextNode("Thu");
                    break;
                case 6:
                    var containOption = document.createTextNode("Fri");
                    break;
                default:
                    var containOption = document.createTextNode("Sat");
                    break;
            }
            createElement("button", nameParent, "button1", containOption); // create date in week
        } else {
            if (i >= firstDayOfMonth && i < (firstDayOfMonth + endDayOfMonth) ) { // create list date
                var containOption = document.createTextNode(flag);
                flag = flag + 1;
            } else { 
                var containOption = document.createTextNode(".");
            }
            var currentDate = new Date();
            if (flag == (currentDate.getDate() + 1) 
                && month == (currentDate.getMonth() + 1) 
                && year == currentDate.getFullYear()
                ) { // check curentdate add attribute
                createElement("button", nameParent, "button7", containOption);
            } else {
                createElement("button", nameParent, "button8", containOption);
            }
        }
    }
}

/*
* chose month , year on select
*/
function choseMY() {
    var month = document.getElementById("button3").value;
    var year = document.getElementById("button4").value;
    showCalendar(month, year);
}

/*
* previous month or year
*@param month string
*/
function pre(month) {
    if (month == "month") {
        var month = parseInt(document.getElementById("button3").value) - 1;
        var year = document.getElementById("button4").value;
    } else {
        var month = document.getElementById("button3").value;
        var year = parseInt(document.getElementById("button4").value - 1);
    }
    check(month, year);
}

/*
* next month or year
*@param month string
*/
function next(month) {
    if (month == "month") {
        var month = parseInt(document.getElementById("button3").value) + 1;
        var year = document.getElementById("button4").value;
    } else {
        var month = document.getElementById("button3").value;
        var year = parseInt(document.getElementById("button4").value) + 1;
    }
    check(month, year);
}

/*
* check month or year when click next, pre
*@param month int
*@param year int
*/
function check(month, year) {
    if(month <= 0) {
        month = 12;
        year = parseInt(year) - 1;
    }
    if (year <= 1995) {
        year = 1995;
    }
    if(month > 12) {
        month = 1;
        year = parseInt(year) + 1;
    }
    if (year > 2040) {
        year = 2040;
    }
    showCalendar(month, year);
}

/*
* chose date when click date in month
*@param month int
*@param year int
*/
function chosenDate(month, year) {
    var listDate = document.getElementById("listDate");//get element
    var date = listDate.getElementsByTagName("button");//get list bbutton on listDate
    document.getElementById("button3").value = month;
    document.getElementById("button4").value = year;
    var showDate;
    for (var i = 0; i < date.length; i++) {// when click date, get value date 
        date[i].addEventListener("click", function() {
            var day = this.innerHTML;
            if (month < 10) {// if month < 10 add 0 after month
                month = "0" + parseInt(month);
            }
            if (day < 10) {// if month < 10 add 0 after day
                day = "0" + parseInt(day);
            }
            showDate = (day + "/" + month + "/" + year);
            if (day == ".") {// check is date valid
                showDate = "";
                // set date for element input
                document.getElementById("Date").value = showDate;
                deleteCalendar()// delete calendar
                return 0;
            } else {
                document.getElementById("Date").value = showDate;
                deleteCalendar()
                return 0;
            }
        });
    }
}

/*
*delete calendar
*/
function deleteCalendar() {
    var mydiv = document.getElementById('calendar');
    if (mydiv) {
        mydiv.remove();
    }
}
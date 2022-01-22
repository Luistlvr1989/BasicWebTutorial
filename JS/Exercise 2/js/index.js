//alert("Bienvenido a mi sitio");
const SATURDAY = 6
const SUNDAY = 0

var txtName = document.getElementById("txt-name")
var txtAlarm = document.getElementById("txt-alarm")
var btnDatetime = document.getElementById("btn-datetime")
var btnCalendar = document.getElementById("btn-calendar")
var pDateTime = document.getElementById("p-datetime")
var pAction = document.getElementById("p-action")

btnDatetime.onclick = function() { 
    //validateAlarm(txtAlarm.value, txtName.value)
    doAction()

    /*var message = ""

    if (txtName.value.length == 0) {
        message = Date() 
    } else {
        message = "Wake up " + txtName.value + "!! " + Date()  
    }
    pDateTime.innerHTML = message*/
};

btnCalendar.onclick = function() {
    showCalendarForToday()
}

function validateAlarm(alarmTime, username) {
    var alarm = getDateTime(alarmTime)
    var notTooLate = getDateTime(alarmTime + 1)
    var currentTime = new Date()
    var day = currentTime.getDay()

    if (day == 6 || day == 0) {
    //if (day == SATURDAY || day == SUNDAY) {
        alert("It is ok " + username + " You can wake up late today.")
    } else if (notTooLate.getTime() > currentTime.getTime()) {
        alert("Just one time " + username)
    } else if (alarm.getTime() < currentTime.getTime()) {
        alert("Wake up " + username + "!! It is too late!!!")
    } else {
        pDateTime.innerHTML = "You can sleep a little bit more"
    }
}

function getDateTime(hour) {
    var date = new Date();
    date.setHours(hour, 0, 0)
    return date
}

function doAction() {
    var age = prompt("What is your age?");
    var message = ""
    if (age < 10) {
        message = "It is playtime"
    } else if (age > 10 && age <= 14) {
        message = "Let's do some home duties"
    } else if (age < 24) {
        message = "School/university homework"
    } else {
        message = "Too tired from work, let's just sleep"
    }

    pAction.innerHTML = message
}

function showCalendarForToday() {
    // 0 Sunday, 1 Monday, 2 Tuesday, 3 Wednesday, 5 Thursday, 6 Saturday
    var weekCalendar = [ "Play", "Work", "Work", "Work", "Work", "Work", "Rest" ]
    var currentTime = new Date()
    var day = currentTime.getDay()

    alert(weekCalendar[day])
}
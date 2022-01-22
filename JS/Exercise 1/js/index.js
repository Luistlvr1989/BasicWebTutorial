 //alert("Bienvenido a mi sitio");

 var txtName = document.getElementById("txt-name")
 var txtAlarm = document.getElementById("txt-alarm")
 var pDateTime = document.getElementById("p-datetime")
 var btnDatetime = document.getElementById("btn-datetime")

 btnDatetime.onclick = function() { 
     //validateAlarm(txtAlarm.value, txtName.value)
     if (txtName.value.length == 0) {
         pDateTime.innerHTML = Date() 
     } else {
         pDateTime.innerHTML = "Wake up " + txtName.value + "!! " + Date()  
     }
 };

 function validateAlarm(alarmTime, username) {
     var alarm = getDateTime(alarmTime)
     var currentTime = new Date()

     if (alarm.getTime() < currentTime.getTime()) {
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
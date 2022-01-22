var txtName = document.getElementById("txt-name")
var pDateTime = document.getElementById("p-datetime")
var btnDatetime = document.getElementById("btn-datetime")

btnDatetime.onclick = function() { 
    if (txtName.value.length == 0) {
        pDateTime.innerHTML = Date() 
    } else {
        pDateTime.innerHTML = "Wake up " + txtName.value + "!! " + Date()  
    }
};
// var moment = require('moment');
// moment.format();

var currentDay = $("#currentDay")

function startTime() {
    document.getElementById('currentDay').innerHTML = moment().format("MMM Do YY") 
        + "<br>"
        + moment().format(" hh : mm : ss");
    var t = setTimeout(startTime, 500);
};

$( ".hour" ).ready(function() {
    var hours = document.getElementsByClassName('hour');
    var currentHour = moment().format("k");
    
    for(var i = hours.length ; i < hours.length+9 ; i++){
        if(i < currentHour){
            hours.namedItem(i).style.backgroundColor = "#FF99CC";
        }
        else if(i == currentHour){
            hours.namedItem(i).style.backgroundColor = "#FFCC00";
        }
        else{
            hours.namedItem(i).style.backgroundColor = "#66CC00";
        }
    }

    $( ".saveEvent").click(function(){
        var hour = this.id;
        var event = document.getElementById(hour.replace("save","") + 'hourEvent');
          localStorage.setItem(hour, event.value);
          console.log(localStorage.getItem(hour));
        if(event){
            event.parentElement.innerHTML = event.value;
            event.display = "none";
        }
    });
 
});

$( ".hourEvent" ).ready(function() {
    
    
    var events = document.getElementsByClassName('hourEvent');
    for(var i = 0; i < events.length; i++){
        events.item(i).innerHTML = "Click to edit...";
    }

    $( ".hourEvent" ).click(function() {
        $( this ).display = "none";
        if( this.innerHTML != ""){
            var newInput = document.createElement("INPUT");
            newInput.id = "" + this.parentElement.id + this.className;
            newInput.style = "display: inline-block";
            this.innerHTML = "";
            this.appendChild(newInput);
            newInput.focus();
        }
    });

});


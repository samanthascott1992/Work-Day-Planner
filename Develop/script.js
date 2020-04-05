// var moment = require('moment');
// moment.format();

var currentDay = $("#currentDay")

console.log(moment().format("MMM Do YY"));
console.log(moment().format("hh : mm :  ss"));


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
        var hour = $(this).attr('id');
        console.log("Hour: " + hour);
    });
});

$( ".hourEvent" ).ready(function() {
    var events = document.getElementsByClassName('hourEvent');
    for(var i = 0; i < events.length; i++){
        events.item(i).innerHTML = "Click to edit...";
    }

    $( ".hourEvent" ).click(function() {
        console.log("In click event...");
        $( this ).display = "none";
        console.log("this" + this);
        console.log("this.innerHTML" + this.innerHTML);
        if( this.innerHTML == "Click to edit..."){
            var newInput = document.createElement("INPUT");
            newInput.attributes("id=" + $(this).attr('id'));
            $( this ).append(newInput);
        }
    })
});
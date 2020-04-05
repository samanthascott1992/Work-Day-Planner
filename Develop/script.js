// var moment = require('moment');
// moment.format();

var currentDay = $("#currentDay")

console.log(moment().format("MMM Do YY"));
console.log(moment().format("hh : mm :  ss"));


$( ".saveEvent" ).click(function() {
    var hour = $(this).attr('id');
    console.log("hour: " + hour);
});

function startTime() {
    document.getElementById('currentDay').innerHTML = moment().format("MMM Do YY") 
        + "<br>"
        + moment().format(" hh : mm : ss");
    var t = setTimeout(startTime, 500);
};

// function timePassed(item){
//     if(item.attr('id').replace("save","") < currentHour){ item.style = 'background-color: #h44444'; }
// }  

$( ".hour").ready(function() {
    var hours = document.getElementsByClassName('hour');
    var currentHour = moment().format("k");
    console.log("hours: " + hours);
    
    for(var i = hours.length ; i < hours.length+9 ; i++){
        console.log("hours.namedItem(" + i +"):" + hours.namedItem(i).innerText);
        console.log("Comparing i: " + i + " to currentHour: " + currentHour);
        if(i <= currentHour){
            hours.namedItem(i).style.backgroundColor = "teal";
            //hours.namedItem(i).
        }
        else{
            hours.namedItem(i).style.backgroundColor = "green";
        }
    }
    //     if(hours[i].attr('id').replace("save","") < currentHour) {
    //         hours[i].style = "background-color: 000";
    //     }
    // }
});

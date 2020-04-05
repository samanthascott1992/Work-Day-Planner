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
    document.getElementById('currentDay').innerHTML = moment().format("MMM Do YY hh : mm : ss");
    var t = setTimeout(startTime, 500);
};

// function timePassed(item){
//     if(item.attr('id').replace("save","") < currentHour){ item.style = 'background-color: #h44444'; }
// }  

$( ".hour").ready(function() {
    var hours = document.getElementsByClassName('hours');
    var currentHour = moment().format("hh");
    console.log("hours[i]: " + hours);
    for(var i = 0 ; i < hours.length; i++){
        if(hours[i].attr("id") < currentHour){
        }
    }
    //     if(hours[i].attr('id').replace("save","") < currentHour) {
    //         hours[i].style = "background-color: 000";
    //     }
    // }
});

// var moment = require('moment');
// moment.format();

var currentDay = $("#currentDay")

console.log(moment().format("MMM Do YY"));
console.log(moment().format("hh : mm"));


$( ".saveEvent" ).click(function() {
    var hour = $(this).attr('id');
    console.log("hour: " + hour);
});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("currentDay").innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 09) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }



// $('.saveEvent').on('click', button)




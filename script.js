
/* 

    TODO, v2 should allow users to select a holiday (or custom date?) and have
    their selection stored in local storage

*/

// default selection
var selectedHoliday = "New Years Day";


const holidaysMap = {
    "New Years Day": "",
    "New Years Eve": "",
    "Christmas": "",
}


const holidayNames = Object.keys(holidaysMap);




function countdown() {
    const currDate = new Date();
    Document.write(currDate);
}


function initializeHolidaySelection() {
    // todo store user input in local storage
    document.getElementById('holiday-input').value = selectedHoliday;
}

// v2, suggest holidays while typing
function typeahead(e) {
    console.log(holidayNames)
}

function updateClock() {

    var now = new Date(); // current date

    // date hardcoded to newyears day
    target = `1/1/${now.getFullYear() + 1}`
    var targetDate = new Date(target);

    // get total seconds between the times
    var delta = Math.abs(targetDate - now) / 1000;

    // calculate (and subtract) whole days.. 86400 = seconds in 24 hours
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = Math.floor(delta % 60);  // in theory the modulus is not required

    // set the content of the element with the ID time to the formatted string
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('hours').innerHTML   = hours;
    document.getElementById('days').innerHTML    = days;
    // document.getElementById('months').innerHTML    = 0;

}

updateClock();
setInterval(updateClock, 1000);

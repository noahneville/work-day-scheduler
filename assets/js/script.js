

var date = moment().format("dddd, MMM Do YYYY");



function setDate() {
    $("#currentDay").append(date);
}

setDate();

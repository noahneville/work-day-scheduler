// uses momentJS to store both the full day+date and the hour
var date = moment().format("dddd, MMM Do YYYY");
var hour = moment().hour();

// wrapped everything in a ready function so that all functions can run as soon as the page loads
$(document).ready(function () {
  //   uses jQuery to target currentDay id in HTML and add the date variable created above
  function setDate() {
    $("#currentDay").append(date);
  }

  //   event listener for all saveBtns. Uses jQuery sibling/parent methods of DOM traversal to store text and timeblock hour as variables, then sets them to localStorage.
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();

    var key = $(this).parent().attr("id");

    localStorage.setItem(key, value);
  });

  // uses jQuery to target text area and set its value to the text previously saved in localStorage
  $("#tb-9 .description").val(localStorage.getItem("tb-9"));
  $("#tb-10 .description").val(localStorage.getItem("tb-10"));
  $("#tb-11 .description").val(localStorage.getItem("tb-11"));
  $("#tb-12 .description").val(localStorage.getItem("tb-12"));
  $("#tb-13 .description").val(localStorage.getItem("tb-13"));
  $("#tb-14 .description").val(localStorage.getItem("tb-14"));
  $("#tb-15 .description").val(localStorage.getItem("tb-15"));
  $("#tb-16 .description").val(localStorage.getItem("tb-16"));
  $("#tb-17 .description").val(localStorage.getItem("tb-17"));

  // function that splits the number off the end of the the timeblock id and converts it from a string to an Int.
  // then runs if/else statements to compare that value to the time, defined at the top as var 'hour' and assigns classes to the timeblock accordingly.
  function checkTime() {
    $(".time-block").each(function () {
      var timeBlockHr = parseInt($(this).attr("id").split("-")[1]);

      if (timeBlockHr < hour) {
        $(this).addClass("past");
      } else if (timeBlockHr === hour) {
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  // calls checkTime and setDate function
  checkTime();
  setDate();
});

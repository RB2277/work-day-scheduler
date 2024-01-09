//Reads the current hour of the day
var currentHour = dayjs().hour();
//Selects each hour block
var timeblocks = $(".time-block");

//Uses jquery to detect when browser has fully loaded with document.ready. Upon using the save button, any text entered within the chosen time-block will be saved to local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    // Get the id of the time-block div
    var timeBlockId = $(this).parent().attr("id");

    // Get the user input from the textarea
    var userInput = $(this).siblings(".description").val();

    // Save the user input to local storage
    localStorage.setItem(timeBlockId, userInput);
  });
});

//Function that will run for each time block div there is. Applying past, present, or future classes based off of the time of day.
timeblocks.each(function () {
  var hour = parseInt($(this).attr("id").split("-")[1]);
  var timeBlockId = $(this).attr("id");
  if (hour < currentHour) {
    $(this).addClass("past");
  } else if (hour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
  //retrieves the users saved inputs from local storage and applies it to the page
  var userInput = localStorage.getItem(timeBlockId);
  savedText = $(this).find(".description").val(userInput);
});

//Uses dayjs to set the current date within the header
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMM DD"));

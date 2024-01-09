//Uses jquery to detect when browser has fully loaded with document.ready. It then will run a function upon the user pressing the save button
//which will then save whatever the user input into the local storage as the time slot chosen, and whatever was wrote.
$(document).ready(function () {
  $(".saveBtn").on('click', function() {
    // Get the id of the time-block div
    var timeBlockId = $(this).parent().attr('id');

    // Get the user input from the textarea
    var userInput = $(this).siblings('.description').val();

    // Save the user input to local storage
    localStorage.setItem(timeBlockId, userInput);
    console.log(timeBlockId, userInput)
  });
});

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user inp ut that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

var today = dayjs()
$("#currentDay").text(today.format('dddd, MMM DD'))
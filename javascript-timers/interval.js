/*
Get the textContent in the .countdown-display
Convert it to a number and store it as the start of our countdown
setInterval for every one second, store the interval id
  Function will decrement the stored number and update the textContent to
    show that number
  If the number is 0, show the final message and clear the interval
*/

var $display = document.querySelector('.countdown-display');
var counter = Number($display.textContent);

function countdown() {
  counter--;
  if (counter === 0) {
    clearInterval(intervalId);
    $display.textContent = '~Earth Beeeelooowww Us~';
  } else {
    $display.textContent = counter;
  }
}

var intervalId = setInterval(countdown, 1000);

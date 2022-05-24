/*
Modify two things with an event listener for a click:
  body element
    Background color
  .light-bulb class
    Background color

  Check state, one of two states
    isOn = true
    click function sets isOn = !isOn
    if isOn {
      yellow light bulb
      white background
    } else {
      grey light bulb
      black background
    }
*/

var $background = document.querySelector('body');
var $lightbulb = document.querySelector('.light-bulb-on');
var isOn = true;

function hitTheSwitch(event) {
  isOn = !isOn;
  if (isOn) {
    $lightbulb.className = 'light-bulb ' + 'light-bulb-on';
    $background.className = 'room-on';
  } else {
    $lightbulb.className = 'light-bulb ' + 'light-bulb-off';
    $background.className = 'room-off';
  }
}

$lightbulb.addEventListener('click', hitTheSwitch);

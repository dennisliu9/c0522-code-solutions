var buttonClicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function incrementCounter(event) {
  buttonClicks++;
  $clickCount.textContent = 'Clicks: ' + buttonClicks;

  if (buttonClicks > 16) {
    $hotButton.className = 'hot-button nuclear';
  } else if (buttonClicks > 13) {
    $hotButton.className = 'hot-button hot';
  } else if (buttonClicks > 10) {
    $hotButton.className = 'hot-button warm';
  } else if (buttonClicks > 7) {
    $hotButton.className = 'hot-button tepid';
  } else if (buttonClicks > 4) {
    $hotButton.className = 'hot-button cool';
  } else {
    $hotButton.className = 'hot-button cold';
  }
}

$hotButton.addEventListener('click', incrementCounter);

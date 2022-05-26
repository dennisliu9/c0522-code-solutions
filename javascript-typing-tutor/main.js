/*
Get array of all the span elements
Get the DOM node for the hidden dialog for displaying a message to the player
Keep track of the index the user is on with an number variable
Set the end point (the last index of the phrase that the user can type to)
Create a variable to count how many user keystrokes are registered on this attempt

function for checking user input
  Take user input and lowercase to eliminate issues between typing A vs a (if desired)
  Check if the currentIndex has exceeded the maxIndex
    If it has
      Check if key was pressed was 'enter'
        If it was
          Set all span elements in array to have class 'fresh-char'
          Set the 0 index span element in the arry to also have 'current-char'
          Add 'hide' to the class list for the dialog text
          set currentIndex back to 0
        If it wasn't
          Do nothing
    If it has not
      Get the current character (span node) at the current index from the game's phrase and assign to variable $currentChar
      Check if user input === $currentChar.textContent
        If it does
          Set the className of $currentChar = 'correct-char'
          increment currentIndex
          Check if currentIndex has exceeded maxIndex
            If not
              Set the char's class to current-char and fresh-char
            If so
              Set and reveal dialog
        If it does not
          set the char's class to current-char and incorrect-char

Add an event listener on the document to check for keypresses
*/
// Put phrase to type here
var typePhrase = 'please go check mdn first';
typePhrase = typePhrase.toLowerCase();

// Create span elements for the phrase
var $gameArea = document.querySelector('div#game-area');

function renderTypePhrase(typePhrase) {
  var $headingContainer = document.createElement('h1');
  $headingContainer.setAttribute('class', 'game-text disp-flex justify-center align-center');
  for (var phrIdx = 0; phrIdx < typePhrase.length; phrIdx++) {
    var $currentSpan = document.createElement('span');
    $currentSpan.setAttribute('class', 'fresh-char');
    if (phrIdx === 0) {
      $currentSpan.className += ' current-char';
    }
    $currentSpan.textContent = typePhrase[phrIdx];
    $headingContainer.appendChild($currentSpan);
  }
  return $headingContainer;
}

var $renderedPhrase = renderTypePhrase(typePhrase);
$gameArea.insertBefore($renderedPhrase, $gameArea.firstChild);

var $phraseChars = document.querySelectorAll('span');
var $dialogText = document.querySelector('#dialog-text');
var currentIndex = 0;
var maxIndex = $phraseChars.length - 1;
var userKeyStrokes = 0;

function checkUserInput(event) {
  userKeyStrokes++;
  var cleanedUserInput = event.key.toLowerCase();
  if (currentIndex > maxIndex) {
    if (cleanedUserInput === 'enter') {
      for (var charIdx = 0; charIdx < $phraseChars.length; charIdx++) {
        $phraseChars[charIdx].className = 'fresh-char';
        if (charIdx === 0) {
          $phraseChars[charIdx].classList.add('current-char');
        }
      }
      $dialogText.classList.add('hide');
      currentIndex = 0;
      userKeyStrokes = 0;
    }
    return;
  }

  var $currentChar = $phraseChars[currentIndex];

  if (cleanedUserInput === $currentChar.textContent) {
    $currentChar.className = 'correct-char';
    currentIndex++;
    if (currentIndex <= maxIndex) {
      $phraseChars[currentIndex].className = 'current-char ' + 'fresh-char';
    } else {
      var accuracy = (($phraseChars.length / userKeyStrokes) * 100).toFixed(1);
      // .innerHTML allows for the inclusion of <br> for line breaks
      $dialogText.innerHTML = 'Nice work!<br><br>You achieved an accuracy of <strong>' + accuracy;
      $dialogText.innerHTML += '%</strong> (' + $phraseChars.length + ' correct characters out of ';
      $dialogText.innerHTML += userKeyStrokes + ' typed characters).<br><br>Hit enter to try again.';
      $dialogText.classList.remove('hide');
    }
  } else {
    $currentChar.className = 'current-char ' + 'incorrect-char';
  }
}

document.addEventListener('keydown', checkUserInput);

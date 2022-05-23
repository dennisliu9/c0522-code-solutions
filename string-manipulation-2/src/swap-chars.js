/* exported swapChars */
/*
New Alternative:
Create a variable to hold the character at the first index
Create a variable to hold the character at the second index
Create a variable with an empty string value to hold the result
Loop through the string
  If index === first index
    Concatenate the character at the first index to the final result string
  Else If index === second index
    Concatenate the character at the second index to the final result string
  Otherwise (Else)
    Concatenate the character at that index to the result string
return the result string
*/

function swapChars(firstIndex, secondIndex, string) {
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];
  var swappedString = '';

  for (var charIdx = 0; charIdx < string.length; charIdx++) {
    if (charIdx === firstIndex) {
      swappedString += secondChar;
    } else if (charIdx === secondIndex) {
      swappedString += firstChar;
    } else {
      swappedString += string[charIdx];
    }
  }
  return swappedString;
}

/*
Reminder: slice(index to start slicing at, first index to *exclude* from the slice)

Create a variable to hold the character at string[firstIndex]
Create a variable to hold the character at string[secondIndex]
Create a variable to hold the string of characters before firstIndex (preFirstIndexStr)
  If firstIndex = 0, we are swapping the first character so there is nothing before firstIndex
    preFirstIndexStr = ''
  Otherwise, slice the string from 0 to firstIndex and assign the value to preFirstIndexStr
  (in the code, check for the negative instead)
Create a variable to hold the string of characters between the two indices
  Slice from firstIndex + 1 to secondIndex and assign the value to betweenIndicesStr
Create a variable to hold the string of characters after secondIndex
  If secondIndex = string.length - 1, we are swapping the last character so there is nothing after secondIndex
    postSecondIndexStr = ''
  Otherwise, slice the string from secondIndex + 1 to string.length
  (in the code, check for the negative instead)
Concatenate these variables together
  preFirstIndexStr + secondChar + betweenIndicesStr + firstChar + postSecondIndexStr
return that value
*/
/* First attempt

function swapChars(firstIndex, secondIndex, string) {
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];
  var preFirstIndexStr = '';
  var betweenIndicesStr = '';
  var postSecondIndexStr = '';

  if (firstIndex !== 0) {
    preFirstIndexStr = string.slice(0, firstIndex);
  }

  betweenIndicesStr = string.slice(firstIndex + 1, secondIndex);

  if (secondIndex !== string.length - 1) {
    postSecondIndexStr = string.slice(secondIndex + 1, string.length);
  }

  return preFirstIndexStr + secondChar + betweenIndicesStr + firstChar + postSecondIndexStr;
}
*/

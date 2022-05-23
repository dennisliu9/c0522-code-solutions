/* exported firstChars */
/*
Create a variable with an empty string to hold the concatenation of the characters we want
Create a variable stopPoint to hold which index to stop looping at
  If length > string.length, make stopPoint = string.length
  Otherwise, make stopPoint = length
Loop through the indexes of string until the index reaches stopPoint
  We can use a while loop by initializing an index iterator
  Access the character at that index and concatenate it to the variable we created
return the concatenated string

Alternative:
  return string.slice(0, length)
*/
function firstChars(length, string) {
  var outputString = '';
  var stopPoint = 0;
  if (length > string.length) {
    stopPoint = string.length;
  } else {
    stopPoint = length;
  }

  var charIdx = 0;
  while (charIdx < stopPoint) {
    outputString += string[charIdx];
    charIdx++;
  }
  return outputString;
}

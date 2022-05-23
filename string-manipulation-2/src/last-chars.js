/* exported lastChars */
/*
We can do a similar approach to firstChars, but instead we will set a
  startPoint instead of a stopPoint
Also (and this is applicable to firstChars), if the length >= string.length
  immediately return string since we just want the whole thing (fun!)
If length !> string.length (otherwise)
  Create a variable startPoint = string.length - length to indicate where
    we start grabbing from
  Create an empty string variable to hold the result of concatenations
  Loop through the word starting at the startPoint up until the end of the string
    Access each letter and concatenate to the output string variable
  return concatenation
*/
function lastChars(length, string) {
  if (length >= string.length) {
    return string;
  }
  var startPoint = string.length - length;
  var outputString = '';
  for (var letterIdx = startPoint; letterIdx < string.length; letterIdx++) {
    outputString += string[letterIdx];
  }
  return outputString;
}

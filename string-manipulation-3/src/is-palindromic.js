/* exported isPalindromic */
/*
Note: palindromes don't care about spaces, so remove them in the comparison
Clean spaces from input string and store in new variable noSpacesString
Create an empty string variable (reversedString) to store the reverse
  of cleaned input string
Create a variable stringIndex initialized to value noSpacesString.length - 1
  We want - 1 because this is representing an index
Use a while loop (while stringIndex >= 0) to move down the string,
  concatenating the character at each index to reversedString
return the value of the comparison of reversedString === noSpacesString
*/
function isPalindromic(string) {
  // Using this method, but could also loop over each character and concatenate if
  // the character wasn't a space
  var noSpacesString = string.replaceAll(' ', '');
  var reversedString = '';
  var stringIndex = noSpacesString.length - 1;

  while (stringIndex >= 0) {
    reversedString += noSpacesString[stringIndex];
    stringIndex--;
  }

  return reversedString === noSpacesString;
}

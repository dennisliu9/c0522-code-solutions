/* exported capitalizeWords */
/*
Lower case the entire string and save the result to loweredString
Split loweredString into an array of words, split by separator ' ' and assign to splitString
Create an empty array to hold the properly capitalized words for reconstruction later, reconArray
Create an empty string to hold the reconstructed, properly capitalized string capitalizedString

Loop through the array splitString, where each iteration's index can be used to get a word from
  array splitString
  Create a variable to hold the word at the index (inside the loop so it refreshes every time)
  Capitalize the first letter of each iteration's word
  Concatenate word[0].toUpperCase() with word.slice(1, word.length) and
    push this value into reconArray
    (Since the rest of the word is already properly lowercased, we only need to .slice the rest and add it on)
Loop through the reconstruction array, concatenating the words together
  Check if the loop index === reconArray.length - 1 (meaning the last iteration)
    If it is, do not concatenate with a space after the word
  Otherwise (Else), concatenate with the word + ' '
return the reconstructed word
*/
function capitalizeWords(string) {
  var loweredString = string.toLowerCase();
  var splitString = loweredString.split(' ');
  var reconArray = [];
  var capitalizedString = '';

  for (var wordInSplitStringIdx = 0; wordInSplitStringIdx < splitString.length; wordInSplitStringIdx++) {
    var splitWord = splitString[wordInSplitStringIdx];
    var casedWord = splitWord[0].toUpperCase() + splitWord.slice(1, splitWord.length);
    reconArray.push(casedWord);
  }

  var noSpaceIndex = reconArray.length - 1;
  for (var casedWordIdx = 0; casedWordIdx < splitString.length; casedWordIdx++) {
    if (casedWordIdx === noSpaceIndex) {
      capitalizedString += reconArray[casedWordIdx];
    } else {
      capitalizedString += reconArray[casedWordIdx] + ' ';
    }
  }
  return capitalizedString;
}

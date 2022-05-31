/* exported reverseWords */
/*
Split words into array with .split(' ') and save array to new variable
Create an empty array to hold the reversed words
Loop through array, iterating through each word
  Create a variable with an empty string for the reversed word
  Iterate through word, iterating through each character starting from word.length - 1
    (while loop)
    Concatenate character to the newly created variable in the loop
  Push the word to the reversed words array
Create a new variable with an empty string to hold the output string
Loop through reversed words array
  if iteration index !== array.length - 1
    Concatenate the word with a space
  Else
    concatenate just the word
Return output string
*/
function reverseWords(string) {
  var wordsArray = string.split(' ');
  var reversedWords = [];

  for (var wordIdx = 0; wordIdx < wordsArray.length; wordIdx++) {
    var reversedWord = '';
    var wordLengthIdx = wordsArray[wordIdx].length - 1;
    while (wordLengthIdx >= 0) {
      reversedWord += wordsArray[wordIdx][wordLengthIdx];
      wordLengthIdx--;
    }
    reversedWords.push(reversedWord);
  }

  var outputString = '';
  for (var revIdx = 0; revIdx < reversedWords.length; revIdx++) {
    if (revIdx === reversedWords.length - 1) {
      outputString += reversedWords[revIdx];
    } else {
      outputString += reversedWords[revIdx] + ' ';
    }
  }

  return outputString;
}

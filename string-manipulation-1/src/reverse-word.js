/* exported reverseWord */
/*
Get the last index of the word using string.length - 1
Use a while loop that increments down from string.length - 1 to 0
  Access the string at the index and concatenate with what has already been accessed
Return the result
*/

function reverseWord(word) {
  var wordIdx = word.length - 1;
  var reversedWord = '';
  while (wordIdx >= 0) {
    reversedWord += word[wordIdx];
    wordIdx--;
  }
  return reversedWord;
}

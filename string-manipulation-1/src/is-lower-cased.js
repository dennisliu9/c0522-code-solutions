/* exported isLowerCased */
/*
If lowercasing the word has no change on the word, the word was lower cased.
Return the boolean result of the condition of the word strictly equal to the word lower cased.
*/

function isLowerCased(word) {
  return word === word.toLowerCase();
}

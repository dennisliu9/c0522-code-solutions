/* exported addSuffixToAll */

/*
  create an array to keep track of your new words
  go through each word in the list of words
    add the desired suffix to the word
    keep track of that word
  once you have gone through all the words, show all the words
*/

function addSuffixToAll(words, suffix) {
  var wordsWithSuffixes = [];
  for (var wordIdx = 0; wordIdx < words.length; wordIdx++) {
    wordsWithSuffixes.push(words[wordIdx] + suffix);
  }
  return wordsWithSuffixes;
}

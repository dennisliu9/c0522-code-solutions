/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var wordsWithSuffixes = [];
  for (var wordIdx = 0; wordIdx < words.length; wordIdx++) {
    wordsWithSuffixes.push(words[wordIdx] + suffix);
  }
  return wordsWithSuffixes;
}

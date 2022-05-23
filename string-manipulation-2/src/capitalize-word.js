/* exported capitalizeWord */
/*
Lower case the entire word to standardize what we are working with
  Assign this to a new variable lowerWord
Check if the lowercased word is 'javascript'
  If it is, return 'JavaScript'
If not, concatenate the following
  the uppercased first letter of lowerWord, which we can get by accessing the 0th index of word
  a slice (or loop) of the rest of the letters in lowerWord from index 1 to the end (length, for slice)
return the concatenated result
*/
function capitalizeWord(word) {
  var lowerWord = word.toLowerCase();
  if (lowerWord === 'javascript') {
    return 'JavaScript';
  }
  return lowerWord[0].toUpperCase() + lowerWord.slice(1, lowerWord.length);
}

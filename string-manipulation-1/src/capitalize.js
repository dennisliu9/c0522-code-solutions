/* exported capitalize */
/*
Get the first letter of word and capitalize it
Get the rest of the characters using the slice method, accessing
  index 1 to string.length -1
  Lowercase these letters
Concatenate these two values
return the resulting value
*/

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
}

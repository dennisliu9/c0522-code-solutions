/* exported isVowel */
/*
Lowercase char to eliminate variability of upper or lower casing and store to variable
  Check the condition of if the lowercased char is a, e, i, o, or u
  return the boolean result

  Alternatively:
    Lowercase char to eliminate variability of upper or lower casing and store to variable
    create an array with lowercased vowels
    Check if the lowercased char is in the array with Array.includes()
*/
function isVowel(char) {
  var lowerChar = char.toLowerCase();
  if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    return true;
  }
  return false;
}

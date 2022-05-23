/* exported ransomCase */
/*
Every even letter (odd index, 1,3,5...) is uppercased, while the rest are lowercased
Declare an empty string to store the result
Loop through the indexes of string from 0 to string.length
  If the index % 2 === 0, lowercase the letter at that index and concatenate
    with the result string
  If the index % 2 === 1, uppercase the letter at that index and concatenate
    with the result string
*/
function ransomCase(string) {
  var ransomString = '';
  for (var letterIdx = 0; letterIdx < string.length; letterIdx++) {
    if (letterIdx % 2 === 0) {
      ransomString += string[letterIdx].toLowerCase();
    } else if (letterIdx % 2 === 1) {
      // technically we could just use an else
      ransomString += string[letterIdx].toUpperCase();
    }
  }
  return ransomString;
}

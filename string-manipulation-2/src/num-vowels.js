/* exported numVowels */
/*
Lowercase the string and assign it to a variable, loweredString
  This way we only need to check lowercase vowels, but we could just include
  uppercase vowels in our search criteria too
Create an array with the vowels ['a', 'e', 'i', 'o', 'u'], vowelsArray
Create a variable to hold a count of the vowels in the string, initialized with value 0
Loop through each letter of the string, checking if it is in vowelsArray
  vowelsArray.includes(letter)
  If that is true, increment the counter variable
  Otherwise, do nothing
return the value of the counter variable
*/
function numVowels(string) {
  var loweredString = string.toLowerCase();
  var vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  var vowelsCount = 0;
  for (var letterIdx = 0; letterIdx < loweredString.length; letterIdx++) {
    if (vowelsArray.includes(loweredString[letterIdx])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

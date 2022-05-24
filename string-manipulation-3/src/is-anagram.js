/* exported isAnagram */
/*
Going to go with the definition of anagram that the same number of letters must be used
Clean spaces from both inputs with replaceAll(' ', '') and store in variables
  noSpaceFirst, noSpaceSecond
Check if noSpaceFirst.length === noSpaceSecond.length
  If not, return false
  (maybe unecessary for this test, but could save some checking)

Create a function that takes a string and returns an object with the characters
  of a string as the keys and the number of times the character appears in a string
  Create an empty object to hold the characters and their counts
  Loop through the string
    Add a character as a key with value 1 if it doesnt exist already (object[key] === undefined)
    If it does exist, increment the value by 1
  return object

Check if the lengths of the objects.keys are the same
  If not, one has letters that the other doesn't and therefore are not anagrams
  return false
If they pass, then loop through the keys of one and check if the values at that key
  in both objects contain the same value
  If at any point they do not, return false
*/

function isAnagram(firstString, secondString) {
  var noSpaceFirst = firstString.replaceAll(' ', '');
  var noSpaceSecond = secondString.replaceAll(' ', '');
  if (noSpaceFirst.length !== noSpaceSecond.length) {
    return false;
  }

  function findCharCounts(string) {
    var charCounts = {};
    for (var charIdx = 0; charIdx < string.length; charIdx++) {
      var currentChar = string[charIdx];
      if (charCounts[currentChar] === undefined) {
        charCounts[currentChar] = 1;
      } else {
        charCounts[currentChar] += 1;
      }
    }
    return charCounts;
  }
  var firstChars = findCharCounts(noSpaceFirst);
  var secondChars = findCharCounts(noSpaceSecond);

  if (Object.keys(firstChars).length !== Object.keys(secondChars).length) {
    return false;
  }

  for (var countsChar in firstChars) {
    if (firstChars[countsChar] !== secondChars[countsChar]) {
      return false;
    }
  }

  return true;
}

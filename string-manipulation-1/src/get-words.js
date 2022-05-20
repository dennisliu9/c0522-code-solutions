/* exported getWords */
/*
Check if the string is empty
  If so, return an empty array
Use the .split() method to split the string into an array of words separated by a space
  use ' ' as the separator
*/

function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}

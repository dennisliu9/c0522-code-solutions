/* exported getLastChar */
/*
Because strings are array-like, we can use a length property to find
where the last index of a string is

Using the length property of the string, subtract one to get the last index
and access that index using bracket notation. Return this in the same line.
*/
function getLastChar(string) {
  return string[string.length - 1];
}

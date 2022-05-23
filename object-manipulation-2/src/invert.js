/* exported invert */
/*
Create a variable with an empty object literal to hold the output object
Loop over the object with a for in loop
  For each key, access the value from source with the key
  In the output object, assign the source key as a value to the output objects key,
    which was the source key's value
return output object
*/
function invert(source) {
  var invertedSource = {};
  for (var sourceKey in source) {
    invertedSource[source[sourceKey]] = sourceKey;
  }
  return invertedSource;
}

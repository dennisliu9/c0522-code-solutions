/* exported omit */
/*
Create a variable with an empty object literal to hold the output object
Loop through source using a for in loop
  Check if the current key (the iterator) is not in the keys array using method keys.includes()
    (Alternative loop over the keys array and check one by one to see if any value matches the current key)
    If the current key is not in the array, access source at that key and assign the value to the output object at that key
return output object
*/
function omit(source, keys) {
  var omittedKeys = {};
  for (var sourceKey in source) {
    if (!keys.includes(sourceKey)) {
      omittedKeys[sourceKey] = source[sourceKey];
    }
  }
  return omittedKeys;
}

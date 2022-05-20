/* exported toObject */
/*
The array keyValuePair will always have desired key at index 0 and the desired value at index 1
Create an empty object literal
Specify the key of the new object with array[0] and assign array[1] as the value
return this object
*/
function toObject(keyValuePair) {
  var outputObject = {};
  outputObject[keyValuePair[0]] = keyValuePair[1];
  return outputObject;
}

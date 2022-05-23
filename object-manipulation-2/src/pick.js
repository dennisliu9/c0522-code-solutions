/* exported pick */
/*
Declare a variable and assign an empty object literal as its value to hold our output object (pickedKeys)
Loop through array keys (for loop)
  Create a variable keyValue to store the string value in keys that we are considering (the potential key value)
  If trying to access that keyValue key in the source object is not undefined (we get a defined value)
    Assign the value of source at that keyValue to the pickedKeys object at the same keyValue
return pickedKeys
*/
function pick(source, keys) {
  var pickedKeys = {};
  for (var keysIdx = 0; keysIdx < keys.length; keysIdx++) {
    var keyValue = keys[keysIdx];
    if (source[keyValue] !== undefined) {
      pickedKeys[keyValue] = source[keyValue];
    }
  }
  return pickedKeys;
}

/* exported getKeys */
/*
Create an empty array to store the output keys
Using a for in loop with an object will enumerate the keys
  Each iteration of our condition variable (iterator?) will be a key
  Push each key into the output array
return the output array
*/
function getKeys(object) {
  var objectKeys = [];
  for (var key in object) {
    objectKeys.push(key);
  }
  return objectKeys;
}

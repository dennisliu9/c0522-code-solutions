/* exported getValues */
/*
Create an empty array to store the output values
Use the for in loop to loop over the object
  Using the key in the iterator variable in each iteration, access the value using
    bracket notation
  Push this value into the output array
return the output array
*/
function getValues(object) {
  var objectValues = [];
  for (var key in object) {
    objectValues.push(object[key]);
  }
  return objectValues;
}

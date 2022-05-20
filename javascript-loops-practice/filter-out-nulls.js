/* exported filterOutNulls */

/*
  create a new array that will hold the values that are not null
  go through each value in the array values
    check if the value is null
      if it isn't, put it in our output array
      if it is, don't do anything with it and move on to the next value
  once we have looked at and compared every value, we are done and can return our output array
*/

function filterOutNulls(values) {
  var noNullValues = [];
  for (var valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
    if (values[valuesIdx] !== null) {
      noNullValues.push(values[valuesIdx]);
    }
  }
  return noNullValues;
}

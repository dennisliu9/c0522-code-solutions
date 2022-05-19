/* exported filterOutNulls */
function filterOutNulls(values) {
  var noNullValues = [];
  for (var valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
    if (values[valuesIdx] !== null) {
      noNullValues.push(values[valuesIdx]);
    }
  }
  return noNullValues;
}

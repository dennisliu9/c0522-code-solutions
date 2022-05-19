/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStrings = [];
  for (var valueIdx = 0; valueIdx < values.length; valueIdx++) {
    if (typeof values[valueIdx] !== 'string') {
      noStrings.push(values[valueIdx]);
    }
  }
  return noStrings;
}

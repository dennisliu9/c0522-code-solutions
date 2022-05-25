/* exported intersection */
/*
Create a variable with an empty to store the output, holding the values
  that are in common between the two arrays
Loop through the first array
  Loop through the second array
    Compare the current value from the first array === the current value from the second array
      If they are ===, push the word to the output array
return the output array
(Because we are looking for the ones in common, we only need to do the comparisons one way!)

Technically, function below won't account for a value being repeated in one of the lists
  first has value 'hello' once, second has value 'hello' twice, output would have 'hello' twice
  This can be avoided with a check using output.includes(repeatedValue)
*/

function intersection(first, second) {
  var intersectArray = [];
  for (var firstIdx = 0; firstIdx < first.length; firstIdx++) {
    for (var secondIdx = 0; secondIdx < second.length; secondIdx++) {
      if (first[firstIdx] === second[secondIdx]) {
        intersectArray.push(first[firstIdx]);
      }
    }
  }
  return intersectArray;
}

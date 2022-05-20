/* exported sumAll */
function sumAll(numbers) {
  var numbersSum = 0;
  for (var numbersIndex = 0; numbersIndex < numbers.length; numbersIndex++) {
    numbersSum += numbers[numbersIndex];
  }
  return numbersSum;
}

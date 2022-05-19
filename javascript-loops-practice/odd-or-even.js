/* exported oddOrEven */
function oddOrEven(numbers) {
  var numbersOddOrEven = [];
  for (var numbersIdx = 0; numbersIdx < numbers.length; numbersIdx++) {
    if (numbers[numbersIdx] % 2 === 0) {
      numbersOddOrEven.push('even');
    } else {
      numbersOddOrEven.push('odd');
    }
  }
  return numbersOddOrEven;
}

/* exported countdown */

/*
  create an array to hold each number in the countdown in order
  we will be subtracting one from the number repeatedly until we reach 0
    while the number has not reached zero yet
      put the number into our array
      subtract one from the number
  once we have reached zero and put it in the array, our countdown is done
  return the array

*/

function countdown(number) {
  var countdown = [];
  while (number >= 0) {
    countdown.push(number);
    number--;
  }
  return countdown;
}

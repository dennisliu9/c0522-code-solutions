/* exported countdown */
function countdown(number) {
  var countdown = [];
  while (number >= 0) {
    countdown.push(number);
    number--;
  }
  return countdown;
}

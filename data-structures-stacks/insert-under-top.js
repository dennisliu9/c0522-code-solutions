/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const topVal = stack.pop();
  if (topVal === undefined) {
    return;
  }
  stack.push(value);
  stack.push(topVal);
}

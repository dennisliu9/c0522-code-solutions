/* exported maxValue */

function maxValue(stack) {
  let stackMax = stack.pop();
  if (stackMax === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    const popped = stack.pop();
    stackMax = (popped > stackMax) ? popped : stackMax;
  }
  return stackMax;
}

/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const topVal = stack.pop();
  if (topVal === undefined) {
    return undefined;
  }
  const secVal = stack.peek();
  stack.push(topVal);
  return secVal;
}

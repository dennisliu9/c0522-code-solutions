/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  if (typeof first === 'undefined') {
    return;
  }
  const second = queue.dequeue();
  if (typeof second === 'undefined') {
    return first;
  }
  queue.enqueue(Math.max(first, second));
  return Math.min(first, second);
}

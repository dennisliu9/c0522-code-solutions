/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let counter = 0;
  while (counter < index) {
    queue.enqueue(queue.dequeue());
    counter++;
  }
  return queue.dequeue();
}

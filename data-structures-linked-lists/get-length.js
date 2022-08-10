/* exported getLength */

function getLength(list) {
  let counter = 1; // If we have a currentList with no next, then the length is 1
  let currentList = list;
  while (currentList.next) {
    counter++;
    currentList = currentList.next;
  }
  return counter;
}

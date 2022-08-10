/* exported getTail */

function getTail(list) {
  let currentList = list;
  while (currentList.next) {
    currentList = currentList.next;
  }
  return currentList.data;
}

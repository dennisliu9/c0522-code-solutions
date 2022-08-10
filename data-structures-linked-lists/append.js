/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let currentList = list;
  while (currentList.next) {
    currentList = currentList.next;
  }
  currentList.next = new LinkedList(value);
}

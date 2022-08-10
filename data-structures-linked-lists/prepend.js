/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newLinkedList = new LinkedList(value);
  newLinkedList.next = list;
  return newLinkedList;
}

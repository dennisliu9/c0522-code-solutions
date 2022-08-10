/* exported removeTail */

function removeTail(list) {
  if (!list.next) {
    return;
  }
  let currentList = list;
  let nextList = list.next;

  while (nextList.next) {
    currentList = nextList;
    nextList = nextList.next;
  }
  currentList.next = null;
}

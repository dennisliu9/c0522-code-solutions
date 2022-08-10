/* exported includes */

function includes(list, value) {
  let currentList = list;
  while (currentList !== null) {
    if (currentList.data === value) {
      return true;
    }
    currentList = currentList.next;
  }
  return false;
}

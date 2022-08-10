/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }

  const secondLL = list.next;
  const everythingElse = list.next.next;

  secondLL.next = list;
  list.next = everythingElse;

  return secondLL;
}

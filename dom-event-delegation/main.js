var $taskList = document.querySelector('.task-list');

function handleTaskListClick(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $closestTaskListItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', $closestTaskListItem);
    $closestTaskListItem.remove();
  }
  // spacer between clicks
  console.log('----------');
}

$taskList.addEventListener('click', handleTaskListClick);

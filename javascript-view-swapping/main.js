var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

function handleContainerClick(event) {
  // guard
  if (!event.target.matches('.tab')) {
    return;
  }

  for (var tabIdx = 0; tabIdx < $tabs.length; tabIdx++) {
    if ($tabs[tabIdx] === event.target) {
      $tabs[tabIdx].className = 'tab active';
    } else {
      $tabs[tabIdx].className = 'tab';
    }
  }

  /*
  Because the tab's data-view value is the same as its corresponding views'
  data-view value, getting one allows us to know the other. But only because
  they have been labeled properly in the HTML!
  */

  var tabDataView = event.target.getAttribute('data-view');

  for (var vwIdx = 0; vwIdx < $views.length; vwIdx++) {
    if ($views[vwIdx].getAttribute('data-view') === tabDataView) {
      $views[vwIdx].className = 'view';
    } else {
      $views[vwIdx].className = 'view hidden';
    }
  }
}

$tabContainer.addEventListener('click', handleContainerClick);

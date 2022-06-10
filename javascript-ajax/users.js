var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

function onLoad(event) {
  console.log('status code: ', xhr.status);
  console.log('response: ', xhr.response);
  for (var respIdx = 0; respIdx < xhr.response.length; respIdx++) {
    var $respItem = document.createElement('li');
    $respItem.textContent = xhr.response[respIdx].name;
    $userList.append($respItem);
  }
}
xhr.addEventListener('load', onLoad);

xhr.send();

function handleFocus(event) {
  console.log('focus event was fired');
  console.log('  handleFocus event.target.name: ', event.target.name);
  console.log('---');
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('  handleBlur event.target.name: ', event.target.name);
  console.log('---');
}

function handleInput(event) {
  console.log('handleInput event.target.name: ', event.target.name);
  console.log('handleInput event.target.value: ', event.target.value);
  console.log('---');
}

var $formName = document.querySelector('input#user-name');
var $formEmail = document.querySelector('input#user-email');
var $formMessage = document.querySelector('textarea#user-message');

$formName.addEventListener('focus', handleFocus);
$formName.addEventListener('blur', handleBlur);
$formName.addEventListener('input', handleInput);

$formEmail.addEventListener('focus', handleFocus);
$formEmail.addEventListener('blur', handleBlur);
$formEmail.addEventListener('input', handleInput);

$formMessage.addEventListener('focus', handleFocus);
$formMessage.addEventListener('blur', handleBlur);
$formMessage.addEventListener('input', handleInput);

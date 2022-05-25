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

var $docForms = document.forms;
$docForms[0].name.addEventListener('focus', handleFocus);
$docForms[0].name.addEventListener('blur', handleBlur);
$docForms[0].name.addEventListener('input', handleInput);

$docForms[0].email.addEventListener('focus', handleFocus);
$docForms[0].email.addEventListener('blur', handleBlur);
$docForms[0].email.addEventListener('input', handleInput);

$docForms[0].message.addEventListener('focus', handleFocus);
$docForms[0].message.addEventListener('blur', handleBlur);
$docForms[0].message.addEventListener('input', handleInput);

// console.log('$docForms: ', $docForms);
// console.log('$docForms[0]: ', $docForms[0]);

// console.log('$docForms[1]: ', $docForms[1]);

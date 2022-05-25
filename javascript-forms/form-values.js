// Multiple ways to get the same thing
// console.log(document.forms[0]);
// console.log(document.getElementById('contact-form'));
// console.log(document.querySelector('#contact-form'));
// console.log(document.forms[0] === document.getElementById('contact-form'));

var $contactForm = document.querySelector('#contact-form');
function handleSubmit(event) {
  event.preventDefault();
  var formValues = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log(formValues);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);

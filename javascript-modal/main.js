/*
Two event listeners for click
  One on the open modal button
    Sets modal screen class to no longer include disp-none
  One on the close modal button
    Adds disp-none to the modal screen class
*/

var $openButton = document.querySelector('button.open-modal-button');
var $closeButton = document.querySelector('button.close-modal-button');
var $modalScreen = document.querySelector('div.modal-screen');

// alternatively, we could do some string manipulation to add and remove 'disp-none'
var modalScreenClasses = $modalScreen.classList;

function openModal(event) {
  modalScreenClasses.remove('disp-none');
}

function closeModal(event) {
  modalScreenClasses.add('disp-none');
}

$openButton.addEventListener('click', openModal);
$closeButton.addEventListener('click', closeModal);

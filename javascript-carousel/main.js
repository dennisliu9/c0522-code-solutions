var imageNum = 0;
var images = [
  { src: 'images/001.png', alt: 'Bulbasaur' },
  { src: 'images/004.png', alt: 'Charmander' },
  { src: 'images/007.png', alt: 'Squirtle' },
  { src: 'images/025.png', alt: 'Pikachu' },
  { src: 'images/039.png', alt: 'Jigglypuff' },
  { src: 'images/ivysaur.png', alt: 'Ivysaur' },
  { src: 'images/venusaur.png', alt: 'Venusaur' },
  { src: 'images/charmeleon.png', alt: 'Charmeleon' },
  { src: 'images/charizard.png', alt: 'Charizard' },
  { src: 'images/wartortle.png', alt: 'Wartortle' },
  { src: 'images/blastoise.png', alt: 'Blastoise' }
];

var $prevChev = document.querySelector('#prev-chev');
var $nextChev = document.querySelector('#next-chev');

var $imagesContainer = document.querySelector('.images-container');
var $circlesContainer = document.querySelector('.circles-container');

var intervalId;

// Generate empty image element
/*
Having one image element and replacing the src attribute sometimes has a lag,
maybe from loading the image file for the first time? This leads to a generally
unpleasant experience. Will create all image elements ahead of time at the same
time as the circles and selectively show the desired image.
*/
// var $dispImage = document.createElement('img');
// $imagesContainer.appendChild($dispImage);

// Generate images and circles
for (var i = 0; i < images.length; i++) {
  var $image = document.createElement('img');
  var $circle = document.createElement('i');

  $image.setAttribute('src', images[i].src);
  $image.setAttribute('alt', images[i].alt);
  $image.setAttribute('data-view', i);

  $circle.className = 'carousel-indicator fa-circle';
  $circle.classList.add('fa-regular');
  $circle.setAttribute('data-view', i);

  $imagesContainer.appendChild($image);
  $circlesContainer.appendChild($circle);
}

function changeImage(imgView) {
  // imgView is used to determine what image to show
  // imageNum is used to refer to an index in an array

  // Based on argument, determine image to change to
  if (imgView === 'next') {
    imageNum++;
    if (imageNum > images.length - 1) {
      imageNum = 0;
    }
  } else if (imgView === 'previous') {
    imageNum--;
    if (imageNum < 0) {
      imageNum = images.length - 1;
    }
  } else {
    imageNum = Number(imgView);
  }

  // Toggle image and circle
  for (var i = 0; i < images.length; i++) {
    if (i === imageNum) {
      $imagesContainer.children[i].classList.remove('hidden');
      $circlesContainer.children[i].classList.add('fa-solid');
      $circlesContainer.children[i].classList.remove('fa-regular');
    } else {
      $imagesContainer.children[i].classList.add('hidden');
      $circlesContainer.children[i].classList.add('fa-regular');
      $circlesContainer.children[i].classList.remove('fa-solid');
    }
  }
}

function resetImageChangeInterval() {
  // assumes global intervalId
  clearInterval(intervalId);
  intervalId = setInterval(changeImage, 3000, 'next');
}

// Handle chevron clicks
$prevChev.addEventListener('click', function (event) {
  resetImageChangeInterval();
  changeImage('previous');
});
$nextChev.addEventListener('click', function (event) {
  resetImageChangeInterval();
  changeImage('next');
});

// Handle circle clicks
$circlesContainer.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') {
    return;
  }
  var jumpView = event.target.getAttribute('data-view');
  resetImageChangeInterval();
  changeImage(jumpView);
});

// Call changeImage on first load to reset image
changeImage(0);
resetImageChangeInterval();

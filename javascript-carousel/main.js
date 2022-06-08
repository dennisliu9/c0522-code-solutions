var imageNum = 0;

var $prevChev = document.querySelector('#prev-chev');
var $nextChev = document.querySelector('#next-chev');

var $images = document.querySelector('.images-container');
var $circles = document.querySelector('.circles-container');

var lastImageNum = $images.children.length - 1;
var intervalId;

function changeImage(imgView) {
  if (imgView === 'next') {
    imageNum++;
    if (imageNum > lastImageNum) {
      imageNum = 0;
    }
    imgView = imageNum;
  } else if (imgView === 'previous') {
    imageNum--;
    if (imageNum < 0) {
      imageNum = lastImageNum;
    }
    imgView = imageNum;
  }

  for (var imgIdx = 0; imgIdx < $images.children.length; imgIdx++) {
    // Assuming there are equal number of images and circles!
    var $currentImage = $images.children[imgIdx];
    var $currentCircle = $circles.children[imgIdx];

    if ($currentImage.getAttribute('data-view') === String(imgView)) {
      $currentImage.classList.remove('hidden');
    } else {
      $currentImage.classList.add('hidden');
    }

    if ($currentCircle.getAttribute('data-view') === String(imgView)) {
      $currentCircle.classList.remove('fa-regular');
      $currentCircle.classList.add('fa-solid');
    } else {
      $currentCircle.classList.remove('fa-solid');
      $currentCircle.classList.add('fa-regular');
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
$circles.addEventListener('click', function (event) {
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

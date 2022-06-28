const $jokeContainer = document.querySelector('#joke-container');
const $flashImage = document.querySelector('#flash-image');
const $jokeForm = document.querySelector('#joke-form');

const jokester = {
  tellJoke: function (setup, punchline) {
    $jokeForm.classList.add('d-none');
    const $introStatement = this.renderJokePhrase('Hey Flash...');
    this.appendJokePhrase($introStatement);
    // `this` within the anonymous function below needs to refer to the jokester object
    // The anonymous function creates its own `this` because new functions create their own `this`
    // To prevent the anonymous function in the Timeout from setting its own `this`, use an arrow function
    // setTimeout(function () {
    setTimeout(() => {
      const $jokeSetup = this.renderJokePhrase(setup);
      this.appendJokePhrase($jokeSetup);
      // The arrow function in this timeout is not creating a new `this`, nor is it getting it from the parent timeout
      // The parent timeout did not create its own `this` either
      // The only newly created `this` is from the function at the top, the one being assigned to the `tellJoke` property
      setTimeout(() => {
        const $jokePunchline = this.renderJokePhrase(punchline);
        this.appendJokePhrase($jokePunchline);
        flash.laugh();
      }, 2000);
    }, 2000);
  },
  renderJokePhrase: function (phrase) {
    const $phrase = document.createElement('h4');
    $phrase.textContent = phrase;
    $phrase.className = 'fade-in text-center';
    return $phrase;
  },
  appendJokePhrase: function ($phrase) {
    $jokeContainer.append($phrase);
  }
};

const flash = {
  laughingUrl: 'images/flash-laugh.gif',
  laugh: function () {
    // We only set the timeout's function to an arrow function, as the `laugh` method should be creating the `this`
    setTimeout(() => {
      $flashImage.setAttribute('src', this.laughingUrl);
    }, 3000);
  }
};

function handleJokeSubmission(event) {
  event.preventDefault();
  const { setup, punchline } = event.target.elements;
  jokester.tellJoke(setup.value, punchline.value);
}

$jokeForm.addEventListener('submit', handleJokeSubmission);

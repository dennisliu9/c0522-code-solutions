var numOne = 42;
var numTwo = 9001;
var numThree = 3000;
var maximumValue = Math.max(numOne, numTwo, numThree);
console.log('maximumValue: ', maximumValue);

var heroes = ['Ant-Man', 'Spider-Man', 'Batman', 'Mom'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  { title: 'Drive My Car', author: 'Haruki Murakami' },
  { title: 'Moby Dick', author: 'Herman Melville' },
  { title: 'The BFG', author: 'Roald Dahl' }
];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Dennis Liu';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('SAY MY NAME: ', sayMyName);

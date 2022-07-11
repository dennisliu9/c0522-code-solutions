function map(array, transform) {
  const outputArr = [];
  for (let i = 0; i < array.length; i++) {
    outputArr.push(transform(array[i]));
  }
  return outputArr;
}

// Testing function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

// const doubled = numbers.map(number => number * 2);
const doubled = map(numbers, number => number * 2);
console.log('(my function) doubled: ', doubled);

// const prices = numbers.map(number => '$' + number.toFixed(2));
const prices = map(numbers, number => '$' + number.toFixed(2));
console.log('(my function) prices: ', prices);

// const upperCased = languages.map(lang => lang.toUpperCase());
const upperCased = map(languages, lang => lang.toUpperCase());
console.log('(my function) upperCased: ', upperCased);

// const firstLetters = languages.map(lang => lang[0]);
const firstLetters = map(languages, lang => lang[0]);
console.log('(my function) firstLetters: ', firstLetters);

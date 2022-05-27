var books = [
  {
    isbn: '1234-33472',
    title: 'Learn to Code',
    author: 'Sir Codesalot'
  },
  {
    isbn: '4321-43285',
    title: 'Cooking with Connie',
    author: 'Connie LeCreuset'
  },
  {
    isbn: '9394-39294',
    title: 'Typing for Beginners',
    author: 'Tyler Keyes'
  }
];

console.log('books: ', books);
console.log('typeof books: ', typeof books); // logs object

var booksAsJSON = JSON.stringify(books);

console.log('booksAsJSON: ', booksAsJSON);
console.log('typeof booksAsJSON: ', typeof booksAsJSON);

var manualJSON = '{ "id": 123, "name": "Nigel Thornberry" }';
console.log('manualJSON: ', manualJSON);
console.log('typeof manualJSON: ', typeof manualJSON);

var parsedManualJSON = JSON.parse(manualJSON);
console.log('parsedManualJSON: ', parsedManualJSON);
console.log('typeof parsedManualJSON: ', typeof parsedManualJSON);

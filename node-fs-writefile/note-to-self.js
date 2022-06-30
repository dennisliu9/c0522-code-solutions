const fs = require('fs');

const userInput = process.argv[2] + '\n';

fs.writeFile('./note.txt', userInput, err => { if (err) { console.error(`Something went wrong: ${err}`); } });

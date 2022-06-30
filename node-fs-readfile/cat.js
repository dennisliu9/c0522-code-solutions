/*
process.argv indexes 2 onward
fs.readFile() is asynchronous
  Therefore, in the callback function, the next file should be called

A function needs to process one file, then do the same thing to the next file
  The final part of the recursion will be an index that doesn't exists in process.argv (don't do anything there)
  Otherwise, keep doing the readFile() that we've been doing up until now
    Read in the path, utf-8 encoding
    Callback function
      Logs the data in the file
      After that, call the parent function again on the next index
    Error handle the callback function
*/

const fs = require('fs');

function imitationCat(i) {
  if (process.argv[i] !== undefined) {
    fs.readFile(process.argv[i], 'utf-8', (err, data) => {
      if (!err) {
        console.log(data);
        imitationCat(i + 1);
      } else {
        console.log(`Something went wrong at ${i} which is ${process.argv[i]}.`);
        console.log(`    Error: ${err}`);
      }
    });
  }
}

imitationCat(2);

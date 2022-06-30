/*
Usage: node cp.js note.txt copy-of-note.txt
argv[2] is source file
argv[3] is new file
*/

const fs = require('fs');

const sourcePath = './' + process.argv[2];
const destPath = './' + process.argv[3];

fs.readFile(sourcePath, (err, data) => {
  if (err) {
    console.error(`There was an error: ${err}`);
    // eslint-disable-next-line no-console
    console.exit(1);
  }
  // data now has our source data loaded
  fs.writeFile(destPath, data, wErr => {
    if (wErr) console.error(`There was an error while writing a new file: ${wErr}`);
  });
});

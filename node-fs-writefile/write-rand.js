const fs = require('fs');

fs.writeFile(
  './random.txt',
  String(Math.random()) + '\n',
  err => {
    if (err) {
      console.error(`There's an error: ${err}`);
    }
  }
);

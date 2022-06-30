const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(`./${filePath}`, 'utf-8', (err, data) => {
  if (!err) {
    console.log(
`Data of ${filePath}:
${data}`
    );
  } else {
    console.log(`There was an error: ${err}`);
  }
});

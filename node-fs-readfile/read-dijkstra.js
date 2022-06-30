const fs = require('fs');

fs.readFile('./dijkstra.txt', 'utf-8', (err, data) => {
  if (!err) {
    console.log('dijkstra.txt data: ', data);
  } else {
    console.log(`There was an error: ${err}`);
  }
});

const fs = require('fs');

const read = require('./read');
const add = require('./add');
const del = require('./delete');
const update = require('./update');

const data = require('./data.json');

function saveData(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', jsonData, err => {
    if (err) {
      console.error(`There was an error while writing data.json: ${err}`);
    }
  });
}

const operation = process.argv[2];

if (operation === 'read') {
  read(data);
} else if (operation === 'create') {
  add(data, process.argv[3]);
  saveData(data);
} else if (operation === 'delete') {
  del(data, process.argv[3]);
  saveData(data);
} else if (operation === 'update') {
  update(data, process.argv[3], process.argv[4]);
  saveData(data);
} else {
  console.error(
`⚠ Uh oh! Unexpected input! 😯
Please double-check and try again. 😓
📝 Valid operations are:
- read
- create [entry]
- delete [id]
- update [id] [entry]`
  );
}

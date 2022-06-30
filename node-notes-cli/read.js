// accessed with
// read

function read(data) {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

module.exports = read;

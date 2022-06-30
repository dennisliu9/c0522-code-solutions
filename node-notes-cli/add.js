// accessed with
// create 'Some string'

function add(data, newEntry) {
  if (!newEntry) {
    console.error('No new entry supplied! No changes made.');
    process.exit(1);
  }
  data.notes[data.nextId] = newEntry;
  data.nextId++;
}

module.exports = add;

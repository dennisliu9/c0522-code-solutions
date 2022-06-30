// accessed with
// update idNum 'new string'

function update(data, idNum, updatedEntry) {
  if (!(idNum && updatedEntry)) {
    console.error('No ID or no entry update supplied! No changes made.');
    process.exit(1);
  }
  data.notes[idNum] = updatedEntry;
}

module.exports = update;

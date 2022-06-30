// accessed with
// delete idNum

function del(data, idNum) {
  if (!idNum) {
    console.error('No ID supplied! No deletions made.');
    process.exit(1);
  }
  delete data.notes[idNum];
}

module.exports = del;

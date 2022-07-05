const express = require('express');
const app = express();
app.use('/api/notes', express.json());

const fs = require('fs');

const data = require('./data.json');

const errorObj = {};

// Retrieve notes
function getNotes(data, id) {
  if (!id) {
    const outputArr = [];
    for (const key in data.notes) {
      outputArr.push(data.notes[key]);
    }
    return outputArr;
  } else {
    return data.notes[id];
  }
}

app.get('/api/notes', (req, res) => {
  res.status(200).json(getNotes(data));
});

app.get('/api/notes/:id', (req, res) => {
  const inputId = req.params.id;
  if (Number(inputId) <= 0 || !Number.isInteger(Number(inputId))) {
    errorObj.error = `ID must be a positive integer. You supplied: '${inputId}'.`;
    res.status(400).json(errorObj);
  } else if (!data.notes[inputId]) {
    errorObj.error = `No note was found with supplied ID. You supplied: '${inputId}'.`;
    res.status(404).json(errorObj);
  } else {
    res.status(200).json(getNotes(data, inputId));
  }
});

// Make new notes
app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    errorObj.error = `content is a required field. The fields you entered were: ${Object.keys(req.body)}`;
    res.status(400).json(errorObj);
    return;
  }
  data.notes[data.nextId] = {
    id: data.nextId,
    content: req.body.content
  };
  const newEntry = data.notes[data.nextId];
  data.nextId++;

  fs.writeFile('./data.json',
    JSON.stringify(data, null, 2),
    err => {
      if (err) {
        errorObj.error = 'An unexpected error occurred.';
        console.error('Error occured while writing data.json during post: ', err);
        res.status(500).json(errorObj);
        return;
      }
      res.status(201).json(newEntry);
    }
  );
});

// Delete notes
app.delete('/api/notes/:id', (req, res) => {
  const inputId = req.params.id;
  if (Number(inputId) <= 0 || !Number.isInteger(Number(inputId))) {
    errorObj.error = `ID must be a positive integer. You supplied: '${inputId}'.`;
    res.status(400).json(errorObj);
    return;
  } else if (!data.notes[inputId]) {
    errorObj.error = `No note was found with supplied ID. You supplied: '${inputId}'.`;
    res.status(404).json(errorObj);
    return;
  }
  delete data.notes[inputId];
  fs.writeFile('./data.json',
    JSON.stringify(data, null, 2),
    err => {
      if (err) {
        console.error('Error occured while writing data.json during delete: ', err);
        errorObj.error = 'An unexpected error occurred.';
        res.status(500).json(errorObj);
        return;
      }
      res.status(204).send();
    }
  );
});

// Replace notes
app.put('/api/notes/:id', (req, res) => {
  const inputId = req.params.id;
  if (Number(inputId) <= 0 || !Number.isInteger(Number(inputId))) {
    errorObj.error = `ID must be a positive integer. You supplied: '${inputId}'.`;
    res.status(400).json(errorObj);
    return;
  } else if (!req.body.content) {
    errorObj.error = `content is a required field. The fields you entered were: ${Object.keys(req.body)}`;
    res.status(400).json(errorObj);
    return;
  } else if (!data.notes[inputId]) {
    errorObj.error = `No note was found with supplied ID. You supplied: '${inputId}'.`;
    res.status(404).json(errorObj);
    return;
  }

  data.notes[inputId].content = req.body.content;
  const updatedEntry = data.notes[inputId];

  fs.writeFile('./twerp/data.json',
    JSON.stringify(data, null, 2),
    err => {
      if (err) {
        console.error('An error occured while writing data.json during update: ', err);
        errorObj.error = 'An unexpected error occured.';
        res.status(500).json(errorObj);
        return;
      }
      res.status(200).json(updatedEntry);
    }
  );
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server running, listening on port 3000');
});

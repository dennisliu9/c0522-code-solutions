const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

function getAllGrades(grades) {
  const outputArr = [];
  for (const key in grades) {
    outputArr.push(grades[key]);
  }
  return outputArr;
}

app.get('/api/grades', (req, res) => {
  res.json(getAllGrades(grades));
});

// This returns a middleware that "only parses JSON and only looks at requests where
// the Content-Type header matches the type option" (application/json by default)
// This means when HTTPie send a JSON request, the Content-Type header will match the type option.
// Then the middleware looks at the request and parses the JSON.
// req then gets an object body with the parsed data (req.body)
const json = express.json();
// If there is an application/json request to /api/grades, the middleware json will be used
app.use('/api/grades', json);

app.post('/api/grades', (req, res, next) => {
  const inputData = req.body;
  inputData.id = nextId;
  grades[nextId] = inputData;
  nextId++;
  res.status(201).send(inputData);

  next();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

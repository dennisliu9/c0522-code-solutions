// build express server
const express = require('express');
const app = express();
app.use('/api/grades', express.json());

// set up SQL connection
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// get grades
app.get('/api/grades', (req, res, next) => {
  const sql = `
    SELECT *
    FROM "grades";
    `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(error => {
      console.error('There was an error during GET: ', error);
      res.status(500).json({
        error: 'Sorry, an unexpected error occurred.'
      });
    });
});

// insert a new grade
app.post('/api/grades', (req, res, next) => {
  const inputGrade = req.body;
  const hasReqProperties = (inputGrade.name && inputGrade.course && inputGrade.score);
  const isValidScore = (Number.isInteger(inputGrade.score) && (inputGrade.score >= 0 && inputGrade.score <= 100));
  if (!hasReqProperties || !isValidScore) {
    // If none of these properties are on the request body object
    // Or if the score isn't a valid value, then it's no good.
    res.status(400).json({
      error: 'Invalid grade was supplied, no records were saved. Valid grades must have properties [name, course, score] and score must be an integer between 0 and 100 inclusive.'
    });
    return;
  }
  const sql = `
    INSERT INTO "grades" ("name", "course", "score") VALUES
    ($1, $2, $3::INT)
    RETURNING *;
    `;
  const params = [inputGrade.name, inputGrade.course, inputGrade.score];

  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(error => {
      console.error('An error occurred during POST: ', error);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// update a grade
app.put('/api/grades/:gradeId', (req, res, next) => {
  // check if inputs are legal
  const inputGrade = req.body;
  const hasReqProperties = (inputGrade.name && inputGrade.course && inputGrade.score);
  const isValidScore = (Number.isInteger(inputGrade.score) && (inputGrade.score >= 0 && inputGrade.score <= 100));
  const inputGradeId = Number(req.params.gradeId);
  if (!Number.isInteger(inputGradeId) || inputGradeId <= 0) {
    res.status(400).json({
      error: 'Error: "gradeId" must be a positive integer'
    });
    return;
  } else if (!hasReqProperties || !isValidScore) {
    res.status(400).json({
      error: 'Invalid grade was supplied, no records were updated. Valid grades must have properties [name, course, score] and score must be an integer between 0 and 100 inclusive.'
    });
    return;
  }

  const sql = `
    UPDATE "grades"
    SET "name" = $2,
        "course" = $3,
        "score" = $4
    WHERE "gradeId" = $1
    RETURNING *;
    `;
  const params = [inputGradeId, inputGrade.name, inputGrade.course, inputGrade.score];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `Cannot find a record with supplied gradeId = ${inputGradeId}. No updates were made.`
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(error => {
      console.error('There was an error during POST: ', error);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// delete a grade
app.delete('/api/grades/:gradeId', (req, res, next) => {
  // check if inputs are legal
  const inputGradeId = Number(req.params.gradeId);
  if (!Number.isInteger(inputGradeId) || inputGradeId <= 0) {
    res.status(400).json({
      error: 'Error: "gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
    DELETE FROM "grades"
    WHERE "gradeId" = $1
    RETURNING *;
    `;
  const params = [inputGradeId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `Cannot find a record with supplied gradeId = ${inputGradeId}. No records were deleted.`
        });
      } else {
        res.status(204).send();
      }
    })
    .catch(error => {
      console.error('There was an error during DELETE: ', error);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server running, listening on port 3000');
});

const express = require('express');
const app = express();

app.use((req, res) => {
  // console.log(req.method); // comment this before submitting
  res.send('Here is the response, hope you like it!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

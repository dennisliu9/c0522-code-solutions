const express = require('express');
const path = require('path');

const app = express();

const publicDir = path.join(__dirname, 'public');
const staticMid = express.static(publicDir);

app.use(staticMid);

app.listen(3000, () => {
  console.log('Express server running, listening on port 3000...');
});

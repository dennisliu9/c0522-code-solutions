require('dotenv/config');
const jwt = require('jsonwebtoken');

const payload = {
  userId: 42,
  permissions: [
    'drink',
    'drive'
  ]
};

const token = jwt.sign(payload, process.env.TOKEN_SECRET);

console.log(token);

console.log('verify: ', jwt.verify(token, process.env.TOKEN_SECRET));

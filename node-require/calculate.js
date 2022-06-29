const add = require('./add.js');
const subtract = require('./subtract'); // implicit .js
const multiply = require('./multiply');
const divide = require('./divide');

// calling add would be add.add(x,y)
// Possible operation inputs: plus, minus, times, over

const firstNum = Number(process.argv[2]);
const operation = process.argv[3];
const secondNum = Number(process.argv[4]);

if (operation === 'plus') {
  console.log('result:', add.add(firstNum, secondNum));
} else if (operation === 'minus') {
  console.log('result:', subtract.subtract(firstNum, secondNum));
} else if (operation === 'times') {
  console.log('result:', multiply.multiply(firstNum, secondNum));
} else if (operation === 'over') {
  console.log('result:', divide.divide(firstNum, secondNum));
} else {
  console.log('invalid operation');
}

function reduce(array, reducer, initialValue) {

  let currentIndex;
  let previousValue;
  let currentValue;
  if (initialValue !== undefined) {
    currentIndex = 0;
    previousValue = initialValue;
    currentValue = array[currentIndex];
  } else {
    currentIndex = 1;
    previousValue = array[currentIndex - 1];
    currentValue = array[currentIndex];
  }

  for (let i = currentIndex; i < array.length; i++) {
    currentValue = array[i];
    previousValue = reducer(previousValue, currentValue);
  }

  return previousValue;
}

// Testing function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = reduce(numbers, (previousValue, currentValue) => previousValue + currentValue);
console.log('(my function) sum: ', sum);

const product = reduce(numbers, (previousValue, currentValue) => previousValue * currentValue);
console.log('(my function) product: ', product);

const balance = reduce(account, (previousValue, currentValue) => {
  // previousValue is an object on first call but is a number (the return of the operation) on subsequent calls
  previousValue = (typeof previousValue === 'object') ? previousValue.amount : previousValue;
  return (currentValue.type === 'deposit') ? previousValue + currentValue.amount : previousValue - currentValue.amount;
});
console.log('(my function) balance: ', balance);

const composite = reduce(traits, (previousValue, currentValue) => {
  return Object.assign(previousValue, currentValue);
},
// set initialValue to an empty object so that currentValue's aren't assigned into the object within traits
{}
);
console.log('(my function) composite: ', composite);
console.log('traits (after reduce): ', traits);

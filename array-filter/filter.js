function filter(array, predicate) {
  const outputArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const index = i;
    if (predicate(element, index, array)) {
      outputArr.push(element);
    }
  }
  return outputArr;
}

// Testing function
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

// const evenNumbers = numbers.filter(num => num % 2 === 0);
const evenNumbers = filter(numbers, num => num % 2 === 0);
console.log('(my filter) evenNumbers: ', evenNumbers);

// const overFive = numbers.filter(num => num > 5);
const overFive = filter(numbers, num => num > 5);
console.log('(my filter) overFive: ', overFive);

// const startWithE = names.filter(name => name.startsWith('E', 0));
const startWithE = filter(names, name => name.startsWith('E', 0));
console.log('(my filter) startWithE: ', startWithE);

// const haveD = names.filter(name => name.toLowerCase().includes('d'));
const haveD = filter(names, name => name.toLowerCase().includes('d'));
console.log('(my filter) haveD: ', haveD);

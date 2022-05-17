function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('convertMinutesToSeconds(5): ', convertMinutesToSeconds(5));
console.log("greet('Beavis'): ", greet('Beavis'));
console.log('getArea(17, 42): ', getArea(17, 42));
console.log("getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }): ", getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log("getLastElement(['propane', 'and', 'propane', 'accessories']): ", getLastElement(['propane', 'and', 'propane', 'accessories']));

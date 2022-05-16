var student = {
  firstName: 'Dennis',
  lastName: 'Liu',
  age: '29'
};
var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Data Analyst';

console.log('value of student.livesinIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('student object: ', student);

var vehicle = {
  make: 'Honda',
  model: 'Fit',
  year: '2016'
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = 'false';

console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('vehicle object: ', vehicle);

var pet = {
  name: 'Skazi',
  type: 'cat'
};

delete pet.name;
delete pet['type'];
console.log('value of pet: ', pet);

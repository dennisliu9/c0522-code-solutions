var width = 1920;
var height = 1080;
var area = width * height;

console.log('area: ', area);
console.log('area is type: ', typeof area);

var bill = 115;
var payment = 120;
var change = payment - bill;

console.log('change: ', change);
console.log('change is type ', typeof change);

var quizzes = 98;
var midterm = 102;
var final = 47;
var grade = (quizzes + midterm + final) / 3;

console.log('grade: ', grade);
console.log('grade is type: ', typeof grade);

var firstName = 'Dennis';
var lastName = 'Liu';
var fullName = firstName + ' ' + lastName;

console.log('fullName: ', fullName);
console.log('fullName is type: ', typeof fullName);

var pH = 13;
var isAcidic = pH < 7;

console.log('isAcidic: ', isAcidic);
console.log('isAcidic is type: ', typeof isAcidic);

var headCount = 28;
var isSparta = headCount === 300;

console.log('THIS. IS. SPARTA?: ', isSparta);
console.log('isSparta is type: ', typeof isSparta);

var motto = fullName;
motto = motto + ' is the GOAT';

console.log('motto: ', motto);
console.log('motto is type: ', typeof motto);

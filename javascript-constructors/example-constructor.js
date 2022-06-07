function ExampleConstructor() {}

console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var constructed = new ExampleConstructor();
console.log('value of calling constructor with new: ', constructed);

var isConstructedFromConstructor = constructed instanceof ExampleConstructor;
console.log('value of isConstructedFromConstructor: ', isConstructedFromConstructor);

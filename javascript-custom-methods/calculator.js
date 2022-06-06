/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var total = 0;
    for (var numIdx = 0; numIdx < numbers.length; numIdx++) {
      total += numbers[numIdx];
    }
    return total;
  },
  getAverage: function (numbers) {
    // We can call another method from this object in this method, cool!
    return this.sumAll(numbers) / numbers.length;
  }
};

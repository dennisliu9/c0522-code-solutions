/* exported student */

var student = {
  firstName: 'Dennis',
  lastName: 'Liu',
  subject: 'JavaScript',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    var outputString = 'Hello, my name is ' + this.firstName + ' ' + this.lastName +
    ' and I am studying ' + this.subject + '.';
    return outputString;
  }

};

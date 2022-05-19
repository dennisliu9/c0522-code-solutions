/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  for (var studentObjIdx = 0; studentObjIdx < students.length; studentObjIdx++) {
    studentNames.push(students[studentObjIdx].name);
  }
  return studentNames;
}

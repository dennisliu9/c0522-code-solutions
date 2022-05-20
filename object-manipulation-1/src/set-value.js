/* exported setValue */
/*
Set a property by using bracket notation on the left side of the assignment operator
  Desired new value should be on the right side of the assignment operator
return nothing!

! warning, this is changing the object that is being passed in!
*/
function setValue(object, key, value) {
  object[key] = value;
}

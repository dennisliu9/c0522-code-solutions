/* exported defaults */
/*
Loop through keys in source using for in loop
Try to access object target at the value of source key
  If it is undefined (it doesn't exist in target)
    Set target[source key] = source[source key]
  otherwise do nothing
return nothing, target should be modified
*/
function defaults(target, source) {
  for (var sourceKey in source) {
    if (target[sourceKey] === undefined) {
      target[sourceKey] = source[sourceKey];
    }
  }
}

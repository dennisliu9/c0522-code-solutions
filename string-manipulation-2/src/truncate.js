/* exported truncate */
/*
Use slice to grab the characters of string up until parameter/argument length
  string.slice(0,length)
Concatenate this string with an ellipsis '...'
return this concatenated value

Alternatively:
We could loop from index 0 to the index length (whatever integer that is)
  Iteratively build up untruncated part of the string up until that point in a new variable
  Concatenate an ellipsis to the newly built up string
  return that value
*/
function truncate(length, string) {
  return string.slice(0, length) + '...';
}

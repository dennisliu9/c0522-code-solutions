/* exported titleCase */
/*
Rules list:
  First word always capitalized
  First word after a : is always capitalized
  Words with 4 letters or more are capitalized
  If there is a hypen, capitalize the letter after the hyphen as well
  Words to lowercase if they don't fall under any of those other guidelines:
    and
    or
    nor
    but
    a
    an
    the
    as
    at
    by
    for
    in
    of
    on
    per
    to
  Special Cases
    JavaScript
    API

// High level view
Lowercase the entire string
Go through string and check each word to see if it needs to be capitalized
  If so, use the capitalize function
  Otherwise, keep it lowercase
  In this plan, .toLowerCase() is called only once and capitalize only when needed
    Other way around, capitalize called on every word + .toLowerCase called each time
      it's needed
//

Create a function to capitalize words that takes in a string (lowercased word)
  Create an object to hold special cases, with lowercased versions of input as the
    key and the correct output as the value
  Create a variable addBack with an empty string
    If the word being capitalized has any special characters to account for at the end (like :)
      then assign the special character to addBack to be added back at time of return
      Reduce the word to just the word, excluding the special character at the end
  Check if the object[input] is undefined
    If not, return object[input]
  return concatenation of word[0].toUpper + word.slice(1,word.length) + addBack
Create an array to hold the exception words (the, and, etc.)
Lowercase string and assign to new variable lowerString
Split this string into an array on spaces and save to variable (splitString = lowerString.split(' '))
Create an array to hold the properly cased words (titleCasedWords = [])
Loop through the words in splitString
  Combine the bottom three into one condition
    Check if index is first index (0) OR
    Check if word at index - 1 ends in ':' OR
    Check if word.length >= 4
      If so, capitalize
        If a word is deemed to be capitalized:
          Check if word.includes('-') to handle hyphenation (??? How, .includes?)
            If so,
              Create empty array to hold hyphenated pieces after capitalizing (casedHyphenPieces)
              Split the string on separator '-' and assign to variable hyphenPieces
              Loop through hyphenPieces and apply capitalization on each
                Push capitalized versions to casedHyphenPieces
              Reassemble with hyphens (Array.prototype.join()) and push to titleCasedWords
          If not
            call the capitalize function regularly and push return value to titleCasedWords
  If none of those conditions are true, simply push the word as is (lowercased) to titleCasedWords
Reassemble with spaces using Array.prototype.join
return resulting value
*/

function titleCase(string) {
  function capitalizeWord(lowercasedWord) {
    var specialCases = {
      javascript: 'JavaScript',
      api: 'API'
    };
    // Don't know of a "clever" way to handle cases of JavaScript/API with a colon
    var addBack = '';
    if (lowercasedWord.slice(-1) === ':') {
      addBack = ':';
      lowercasedWord = lowercasedWord.slice(0, -1);
    }
    if (specialCases[lowercasedWord] !== undefined) {
      return specialCases[lowercasedWord] + addBack;
    }
    return lowercasedWord[0].toUpperCase() + lowercasedWord.slice(1) + addBack;
  }

  var exceptionWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var lowerString = string.toLowerCase();
  var splitString = lowerString.split(' ');
  var titleCasedWords = [];

  for (var wordIdx = 0; wordIdx < splitString.length; wordIdx++) {
    var currentWord = splitString[wordIdx];
    if (wordIdx === 0 || splitString[wordIdx - 1].slice(-1) === ':' || currentWord.length >= 4) {
      if (currentWord.includes('-')) {
        var casedHyphenPieces = [];
        var hyphenPieces = currentWord.split('-');
        for (var hyphenIdx = 0; hyphenIdx < hyphenPieces.length; hyphenIdx++) {
          casedHyphenPieces.push(capitalizeWord(hyphenPieces[hyphenIdx]));
        }
        titleCasedWords.push(casedHyphenPieces.join('-'));
      } else {
        titleCasedWords.push(capitalizeWord(currentWord));
      }
    } else if (!exceptionWords.includes(currentWord)) {
      titleCasedWords.push(capitalizeWord(currentWord));
    } else {
      titleCasedWords.push(currentWord);
    }
  }
  return titleCasedWords.join(' ');
}

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
  Check if the specialCasesObject[input] is undefined
    If not, return the special case (value)
    Otherwise return concatenation of word[0].toUpper + word.slice(1,word.length)

Create an array to hold the exception words (the, and, etc.)
Lowercase string and split the string into an array on the separate ': ', assign to new variable splitColon
  This will be an array of strings, each string representing the phrase on either side of a colon
Create an array to hold the properly cased phrases on both sides of the colon (titleCasedColonFragments = [])

Loop through the string phrases in splitColon
  Create a variable with an empty array to store the correctly cased words of the phrase (casedColonFragments)
  Create a variable to store the current phrase (colonFragment)
  Split the phrase on ' ' into an array of words and store the array in splitColonFragment
  Loop through the array of words splitColonFragment
    Combine the bottom three into one condition
        Check if index is first index (0) OR
        Check if word at index - 1 ends in ':' OR (This one is actually not necessary now)
        Check if word.length >= 4
          If so, capitalize
            If a word is deemed to be capitalized:
              Check if word.includes('-') to handle hyphenation
                If so,
                  Create empty array to hold hyphenated pieces after capitalizing (casedHyphenPieces)
                  Split the string on separator '-' and assign to variable hyphenPieces
                  Loop through hyphenPieces and apply capitalization on each
                    Push capitalized versions to casedHyphenPieces
                  Reassemble with hyphens (Array.prototype.join()) and push to casedColonFragments
              If not
                call the capitalize function regularly and push return value to casedColonFragments
      If none of those conditions are true, simply push the word as is (lowercased) to casedColonFragments
    Reassemble with spaces using Array.prototype.join to titleCasedColonFragments
  Reassemble colon pieces and titleCasedColonFragments.join(': ')
return resulting value

*/

function titleCase(string) {
  function capitalizeWord(lowercasedWord) {
    var specialCases = {
      javascript: 'JavaScript',
      api: 'API'
    };
    if (specialCases[lowercasedWord] !== undefined) {
      return specialCases[lowercasedWord];
    }
    return lowercasedWord[0].toUpperCase() + lowercasedWord.slice(1);
  }

  var exceptionWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var splitColon = string.toLowerCase().split(': ');
  var titleCasedColonFragments = [];

  for (var colonFragmentIdx = 0; colonFragmentIdx < splitColon.length; colonFragmentIdx++) {
    var casedColonFragments = [];
    var colonFragment = splitColon[colonFragmentIdx];
    var splitColonFragment = colonFragment.split(' ');

    for (var wordIdx = 0; wordIdx < splitColonFragment.length; wordIdx++) {
      var currentWord = splitColonFragment[wordIdx];
      if (wordIdx === 0 || currentWord.length >= 4) {
        // handle hyphenated words
        if (currentWord.includes('-')) {
          var casedHyphenPieces = [];
          var hyphenPieces = currentWord.split('-');
          for (var hyphenIdx = 0; hyphenIdx < hyphenPieces.length; hyphenIdx++) {
            casedHyphenPieces.push(capitalizeWord(hyphenPieces[hyphenIdx]));
          }
          casedColonFragments.push(casedHyphenPieces.join('-'));
        } else {
          casedColonFragments.push(capitalizeWord(currentWord));
        }
      } else if (!exceptionWords.includes(currentWord)) {
        casedColonFragments.push(capitalizeWord(currentWord));
      } else {
        casedColonFragments.push(currentWord);
      }
    }
    titleCasedColonFragments.push(casedColonFragments.join(' '));
  }
  return titleCasedColonFragments.join(': ');
}

console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
potentially helpful methods from Lodash:
  _.sample(collection)
  _.shuffle(collection)
  _.max(array)
  _.takeRight(array, [n=1])

  Create a set for the 4 player objects
  Create a set for the 52 card decks
    Loop through the 4 suits
      Loop through the 13 ranks
        Create objects and append to the deck set
  Shuffle the deck set
  Loop through the players twice (!! Try to create a generalization here!)
    // generalization: 2 cards * 4 players = 8 rounds. On a given round, give the card to idx (0 -> 8-1) % 4 (players)
    Each iteration, use something like .takeRight or .pop to give a card to the player's hand

*/

var myArray = [1, 2, 3];
var taken = _.takeRight(myArray, 1);

console.log('myArray: ', myArray);
console.log('taken: ', taken);

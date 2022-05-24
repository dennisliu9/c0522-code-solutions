console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
potentially helpful methods from Lodash:
  _.sample(collection)
  _.shuffle(collection)
  _.max(array)
  _.takeRight(array, [n=1])

  function myFunc(players, cardsPerHand)
    // playerNames looks like ['Alice', 'Bob', 'Cathy', 'David']
    // cardsPerHand is an int like 2
    // set up players and cards for play
    players = [] (collection?)
    for (i=0, i<playerNames.length, i++)
      players[i] = {name: playerNames[i], hand: []}

    ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    suits = ['club', 'diamond', 'heart', 'spade']
    cardDeck = [] (collection?)
    for (i=0, i < suits.length, i++)
      for (j=0, j<ranks.length, j++)
        cardDeck.push({rank: ranks[i], suit: suits[j]})
    _.shuffle(cardDeck)
    // deal cards
    function for dealing cards
      to an array of objects players (name and hand properties)
      number of cards per person
      cardDeck at the current moment
    // score cards and assign score to players
    function for scoring hands

    // check for winners
    while loop until one winner
      if tie, call deal cards with just the tied winners and 1 card

  Create a set for the 4 player objects
  Create a set for the 52 card decks
    Loop through the 4 suits
      Loop through the 13 ranks
        Create objects and append to the deck set
  Create a score lookup object
  Shuffle the deck set
  Loop through the players twice
    // generalization: 2 cards * 4 players = 8 rounds. On a given round, give the card to idx (0 -> 8-1) % 4 (players)
    Each iteration, use something like .takeRight or .pop to give a card to the player's hand

*/

var myArray = [1, 2, 3];
var taken = _.takeRight(myArray, 1);

console.log('myArray: ', myArray);
console.log('taken: ', taken);

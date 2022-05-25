console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
// players looks like ['Alice', 'Bob', 'Cathy', 'David']
// cardsPerHand is an int like 2

// set up players and cards for play
Create a variable with an empty array to hold the player objects (playerProfiles)
Loop through the input array players and create corresponding objects, pushing them into playerProfiles
  for (i=0, i<playerNames.length, i++)
    players[i] = {name: playerNames[i], hand: []}
Set up the card deck by looping through all ranks and all suits, pushing them into an array for the deck
  Create variables
    ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    suits = ['club', 'diamond', 'heart', 'spade']
    cardDeck = []
  Loop through both ranks and suits, nested
    for (i=0, i < suits.length, i++)
      for (j=0, j<ranks.length, j++)
        cardDeck.push({rank: ranks[i], suit: suits[j]})
  Shuffle the card deck using _.shuffle() from Lodash
    cardDeck = _.shuffle(cardDeck)

// deal cards to players
Write function for dealing cards, taking in player objects, cards per player, and a card deck
  Loop through the array of player objects
    For each player, splice 2 cards from the beginning of the card deck with .splice(0,2)
      and assign the return to the 'hand' property of the player object

// score cards and assign score to players
Create an object that stores the card rank as the keys and the corresponding score as the value (cardScoring)
Write a function for scoring every player's hand that takes an array of players objects and a card scoring guide
  Loop through each profile
    Create a variable to hold the score of the hand during the loop, initialized to 0 (handScore)
    Loop through the hand (an array of "cards")
      For each card, use the rank property to access the value in cardScoring for that card
      Add this score to handScore
    Assign the player's handScore as a new key to the player object

// find winners
Write a function find the winner(s) of an array of player objects with the handScore property
  Create an empty array to store the winning player objects (winnersArray)
  Create a variable to hold the top score, initialized to 0 (var highestScore = 0)
  !! potentially optimize here
  Loop through the array with the players objects
    Check if the hand score of the current player is higher than the highestScore
      If so, set highestScore = current player's hand score
  Loop through the array with the players objects again
    Check if the player's hand score === highest score
      If so, push that player object to winnersArray

Call the function and store the return in a new variable (gameWinners)

// Check for ties
While gameWinners has more than one value inside (more than one winning player)
  Call the dealCardsFromDeck function again with gameWinners as the players, dealing 1 card, with the same card deck
  Call the addHandScoresToProfiles function again with gameWinners as the players, and the same cardScoring object
  Call the findWinners function again on gameWinners and assign the return back to gameWinners
When the loop stops, there is only one winner in gameWinners, accessible at gameWinners[0]

log the winners to see results
*/
function playGame(players, cardsPerHand) {
  // game setup
  var playerProfiles = [];
  for (var playerIdx = 0; playerIdx < players.length; playerIdx++) {
    playerProfiles.push({ name: players[playerIdx], hand: [] });
  }
  var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  var suits = ['club', 'diamond', 'heart', 'spade'];
  var cardDeck = [];
  for (var suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (var rankIdx = 0; rankIdx < ranks.length; rankIdx++) {
      cardDeck.push({ rank: ranks[rankIdx], suit: suits[suitIdx] });
    }
  }
  cardDeck = _.shuffle(cardDeck);

  // deal cards to players
  function dealCardsFromDeck(playersObjectsArray, cardsPerPlayer, cardDeck) {
    // assuming we will always have enough cards, otherwise do an if check
    var dealIter = 0;
    while (dealIter < playersObjectsArray.length) {
      playersObjectsArray[dealIter].hand = cardDeck.splice(0, cardsPerPlayer);
      dealIter++;
    }

  }
  dealCardsFromDeck(playerProfiles, cardsPerHand, cardDeck);

  // score each player's hand
  var cardScoring = { A: 11, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 10, Q: 10, K: 10 };
  function addHandScoresToProfiles(playersObjectsArray, cardScoring) {
    for (var profileIdx = 0; profileIdx < playersObjectsArray.length; profileIdx++) {
      var handScore = 0;
      var currentHand = playersObjectsArray[profileIdx].hand;
      for (var handIdx = 0; handIdx < currentHand.length; handIdx++) {
        handScore += cardScoring[currentHand[handIdx].rank];
      }
      playersObjectsArray[profileIdx].handScore = handScore;
    }
  }
  addHandScoresToProfiles(playerProfiles, cardScoring);

  // determine a winner
  function findWinners(playersObjectsArray) {
    var winnersArray = [];
    var highestScore = 0;
    // There is probably something in Lodash to simplify this
    for (var playerIdx = 0; playerIdx < playersObjectsArray.length; playerIdx++) {
      if (playersObjectsArray[playerIdx].handScore > highestScore) {
        highestScore = playersObjectsArray[playerIdx].handScore;
      }
    }
    for (playerIdx = 0; playerIdx < playersObjectsArray.length; playerIdx++) {
      if (playersObjectsArray[playerIdx].handScore === highestScore) {
        winnersArray.push(playersObjectsArray[playerIdx]);
      }
    }
    return winnersArray;
  }
  var gameWinners = findWinners(playerProfiles);

  // Check for ties
  while (gameWinners.length > 1) {
    dealCardsFromDeck(gameWinners, 1, cardDeck);
    addHandScoresToProfiles(gameWinners, cardScoring);
    gameWinners = findWinners(gameWinners);
  }

  // Announce winners
  console.log('The winner is: ', gameWinners[0].name, '!');
  console.log('---');
  console.log('player profiles: ', playerProfiles);
}

// example
var samplePlayers = ['Blossom', 'Bubbles', 'Buttercup', 'Prof. Utonium'];
var sampleCardsPerHand = 2;
playGame(samplePlayers, sampleCardsPerHand);

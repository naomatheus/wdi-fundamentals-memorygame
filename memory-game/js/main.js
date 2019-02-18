console.log("Up and running");


// var cards = ["queen","queen","king","king"];
var cards = [
  {
  rank: "queen",
  suit: "hearts",
  cardImage: "memory-game/images/queen-of-hearts.png"
  },
  {
  rank: "queen",
  suit: "diamonds",
  cardImage: "memory-game/images/queen-of-diamonds.png"
  },
  {
  rank: "king",
  suit: "hearts",
  cardImage: "memory-game/images/king-of-hearts.png"
  },
  {
  rank: "king",
  suit: "diamonds",
  cardImage: "memory-game/images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];


var checkForMatch = function(){
  if (cardsInPlay.length === 2) {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You have a match!");
  } else if (cardsInPlay[0] !== cardsInPlay[1]) {
    alert("Sorry, try again");
  }
}
};

var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
//   On the first line inside the flipCard function, use the getAttribute method to get the data-id attribute of the card that was just clicked and store it in a variable cardId.
// HINT: We can use the this keyword to access the card that was clicked: this.getAttribute('attribute-we-want-to-get-goes-here');
  console.log("User flipped " + cards[cardId].rank);
  this.setAttribute('src',cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
  }
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
};

var createBoard = function(arr){
  for (var i = 0; i < arr.length; i++){
    // var newListItem = document.createElement('img');

    var cardElement = document.createElement('img')
    // cardElement.setAttribute('attributeName', 'attributeValue');
    cardElement.setAttribute('src','memory-game/images/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  };
};



// Next, use the addEventListener() method on the cardElement. Add a click event so that when a user clicks on a card, the flipCard function is called.
// Now you have a complete game card, stored in cardElement! Great job.
//
// As the last piece of the for loop, append the cardElement to the game board (which has an id of game-board).
// Hint: use the appendChild() method to do this.

// Next, use the setAttribute() method on cardElement once again. Set the card's 'data-id' attribute to be the current index of the card array, i (no quotes). Now, we can track which card it is.
// NOTE: data- attributes are meant to store data about an element that is not tied to a style.

// flipCard(0);
// flipCard(2);

createBoard(cards);
checkForMatch();

console.log(cardsInPlay);


// Now let's add a bit of new code so that we can "see" the cards that are flipped in our console. Add two console.log() statements. One should log the cardImage and the other should log the suit for the flipped card.

// In the flipCard function, find this console.log statement: console.log("User flipped " + cards[cardId]);
// Update the portion cards[cardId]. Right now, this code is accessing the entire first object in the cards array. You'll want to update this code so that we are accessing the rank property of this object.

// Delete the four strings from the cards array.
// In the cards array, create four objects, one for each card


// Next, we'll want to add the card that the user flipped to the cardsInPlay array.
//
// Use the push method to add the card that the user flipped (cards[cardId]) to the cardsInPlay array.
// Now let's call the flipCard function to simulate the user flipping a card.
//
// On the line after the flipCard function, call the flipCard function, passing in 0 as an argument.

// Within the flipCard function, add a console.log() statement to display the card that was flipped over.
// We'll use the index number that is passed in when the flipCard function is called to access this card from the cards array like so: cards[cardId].
// The message that is logged in the console should read "User flipped queen" or "User flipped king".


// In your main.js file, after the lines with the cards and cardsInPlay arrays, create a function flipCard.
// The function should accept one parameter: cardId.
// Move all the code that you wrote for the last unit's assignment, except for the cards and cardsInPlay arrays into the flipCard function.
// NOTE: We are leaving the two arrays outside of the flipCard function since we want to make sure that the two arrays have global scope.


// First you'll create a function that will store all steps related to selecting, or flipping over, a card. When the user flips a card over, you'll want to add that card to the array of cards that are in play. If the user has flipped over two cards, you'll want to check for a match.
//
// Second, you'll create a function to group together the logic to check to see if the two cards that the user has flipped over match each other. You'll provide feedback to the user letting them know if the two cards match, or if they should try again.

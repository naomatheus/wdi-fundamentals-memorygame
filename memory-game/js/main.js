console.log("Up and running");


var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You have a match!");
  } else if (cardsInPlay[0] !== cardsInPlay[1]) {
    alert("Sorry, try again");
  }
};

var flipCard = function(cardId){
  cardsInPlay.push(cards[cardId]);
  console.log("User flipped " + cards[cardId]);
  if (cardsInPlay.length === 2) {
  }
};

flipCard(0);
flipCard(2);
checkForMatch();

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

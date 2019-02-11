console.log("Up and running");

// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "queen";


var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
  console.log("cardsInPlay length is " + cardsInPlay.length);
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You have a match!");
  } else if (cardsInPlay[0] !== cardsInPlay[1]) {
    alert("Sorry, try again");
  }
}



// Inside of the if statement you created in the last step, create an if...else statement that checks for equality between the two cards in the cardsInPlay array.
// For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal to the second card in the cardsInPlay array.


// Write an if statement that checks to see if the length of the cardsInPlay array is 2.
// For the condition, you can use the length property to find out how many items are in the cardsInPlay array and then use the === operator to see if the length is equal to 2.


// 3rd step
// Create a variable cardTwo.
// Store the third item in the cards array in the variable cardTwo.
// Now we'll want to add this second card to the cardsInPlay array.
//
// Use the push() method to add cardTwo to the end of the cardsInPlay array.

// 2nd step
// Next up, you'll create a variable to represent the first card that the user flipped.
// Create a variable cardOne.
// Store the first item in the cards array in the variable cardOne.
// HINT: Use the array name, square brackets, and the index number to retrieve this card from the array.
//
// Now we'll want to add this first card to the cardsInPlay array.
// Use the push() method to add cardOne to the end of the cardsInPlay array.
// Here's an example of the push() method if you need a syntax refresher:
// ghosts.push('clyde');
// 1st step
// In your main.js file, create an array to store the four cards.
//
// Create an array cards.
// The array should hold four strings - one for each of our cards.
// The strings should be "queen", "queen", "king", and "king".
// After creating the cards array, you can delete the variables you created in the last unit's project.
// Next we'll want to create an empty array. This will eventually hold the cards that are in play.
//
// Create an array cardsInPlay.
// Set its value to an empty array []

/*

Deck Interface Specification:

new Deck()
.getCards() -> return deck's card objects, as array
.reset() - reset the deck to empty**
.count() -> return how many cards in this deck
.dealCard() -> return the top Card object
.addCard(card) - add a constructed Card object
.hasCard(card) -> return true if Card object exists in deck
.shuffle() - shuffle the deck of cards**
.generate() - fill this deck with a standard deck of cards**

Note: all these methods are "one liners" except generate()
Methods with ** should be chainable (return this)

*/


// An object constructor function called as new Deck()
var Deck = function() {
  this.cards = [];
};


////////////////////////////////////
// .reset() - Reset the deck (empty)



////////////////////////////////////
// .getCards() -> Return the deck of cards as an array



////////////////////////////////////
// .count() -> Return count of number of cards in this deck



////////////////////////////////////
// .addCard(card) - Add a card to the deck
// @param card (constructed Card object)



////////////////////////////////////
// .dealCard() -> Return a card off the top of the deck, removing it



////////////////////////////////////
// .shuffle() - Shuffle the current deck of cards



////////////////////////////////////
// .generate() - Generate a deck of cards
// Hint: use this.addCard() method to add, start with:
//    Deck.prototype.generate = function() {
//      var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
//      var cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];



////////////////////////////////////
// .hasCard(card) - Return true if the deck has this card
// @param card (constructed Card object)
// Hint: use array method indexOf()




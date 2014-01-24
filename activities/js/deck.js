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
  this.cards = [ ];
};


////////////////////////////////////
// .reset() - Reset the deck (empty)

Deck.prototype.reset = function(){
	this.cards = [];
};

////////////////////////////////////
// .getCards() -> Return the deck of cards as an array

Deck.prototype.getCards = function(){
	return this.cards;
};


////////////////////////////////////
// .count() -> Return count of number of cards in this deck

Deck.prototype.count = function(){
	return this.cards.length;
};


////////////////////////////////////
// .addCard(card) - Add a card to the deck
// @param card (constructed Card object)

Deck.prototype.addCard = function(card){
	this.cards.push(card);
};


////////////////////////////////////
// .dealCard() -> Return a card off the top of the deck, removing it

Deck.prototype.dealCard = function(){
	return this.cards.shift();
};


////////////////////////////////////
// .shuffle() - Shuffle the current deck of cards

Deck.prototype.shuffle = function(){
	this.cards = _.shuffle(this.cards);
};


////////////////////////////////////
// .generate() - Generate a deck of cards
// Hint: use this.addCard() method to add, start with:
//    Deck.prototype.generate = function() {
//      var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
//      var cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

Deck.prototype.generate = function(){
    var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    var cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (var suit = 0; suit < suits.length; suit++) {
      for (var card = 0; card < cards.length; card++) {
        this.addCard(new Card(suits[suit], cards[card]));
      }
    }
};


////////////////////////////////////
// .hasCard(card) - Return true if the deck has this card
// @param card (constructed Card object)
// Hint: use array method indexOf()

Deck.prototype.hasCard = function(card){
	return this.cards.indexOf(card) >= 0;
};



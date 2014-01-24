/*

Card Interface Specification:

new Card(suit,rank)
.getSuit() -> return the "suit"
.getRank() -> return the "rank" (note: as a string)
.toString() -> return the card name as a string, e.g. "2 of Hearts"
.getClassName() -> return an appropriate CSS class name

Note: all these methods are "one liners" except generate()
Methods with ** should be chainable (return this)

*/

// Basic Card Object Constructor
var Card = function(suit,rank) {
  this.suit = suit;
  this.rank = rank;
};

// Return the card suit
Card.prototype.getSuit = function() {
  return this.suit;
};

// The card can return its rank as a string
Card.prototype.getRank = function() {
  return this.rank.toString();
};

// The card can return its "name" as a string
Card.prototype.toString = function() {
  return this.getRank() + ' of ' + this.getSuit();
};

// The card can return its "class" value, for HTML
Card.prototype.getClassName = function() {
  return 'card ' + this.getSuit().toLowerCase() +
    ' card' + this.getRank().toLowerCase();
};


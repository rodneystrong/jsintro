describe("About Deck objects", function() {

  beforeEach(function(){
    deck = new Deck();
  });

  it("should have no cards to start", function(){
    expect(deck.cards.length).toBe(0);
  });

  it("should support adding cards and knowing length", function(){
    expect(deck.cards.length).toBe(0);
    expect(deck.count()).toBe(0);

    deck.addCard(new Card('Hearts',2));

    expect(deck.cards.length).toBe(1);
    expect(deck.count()).toBe(1);
  });

  it("should generate a valid deck", function(){
    expect(deck.count()).toBe(0);
    deck.generate();
    expect(deck.count()).toBe(52);
  });

  it("should generate more than one deck", function(){
    expect(deck.count()).toBe(0);
    deck.generate();
    deck.generate();
    expect(deck.count()).toBe(104);
  });

  it("should return the top card", function(){
    expect(deck.count()).toBe(0);

    deck.addCard(new Card('Hearts',2));
    deck.addCard(new Card('Diamonds','Ace'));

    var card = deck.dealCard();

    expect(card.getRank()).toBe("Ace");
    expect(card.getSuit()).toBe("Diamonds");
  });

  it("should be chainable for generate()",function(){
    expect(deck.generate() === deck).toBe(true);
  });

  it("should be chainable for shuffle()",function(){
    expect(deck.generate().shuffle() === deck).toBe(true);
  });

  it("should be chainable for reset()",function(){
    expect(deck.reset() === deck).toBe(true);
  });

  it("should be chainable for addCard()",function(){
    expect(deck.addCard(new Card('Hearts',2)) === deck).toBe(true);
  });

});


describe("About Deck objects", function() {

  beforeEach(function(){
    deck = new Deck();
  });

  it("should have no cards to start", function(){
    expect(deck.count()).toBe(0);
  });

  it("should support adding cards and knowing length", function(){
    expect(deck.count()).toBe(0);

    deck.addCard(new Card('Hearts',2));

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
    deck.generate();
    var card = deck.dealCard();

    expect(card.rank).toBe(2);
    expect(card.suit).toBe('Hearts');
  });

  it("should deal the top card", function(){

    deck.addCard(new Card('Hearts',2));
    deck.generate();

    var card = deck.dealCard();

    expect(card.getRank()).toBe("2");
    expect(card.getSuit()).toBe("Hearts");

  });

});


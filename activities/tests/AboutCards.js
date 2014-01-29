describe("About Card objects", function() {

  beforeEach(function(){
    card = new Card('Hearts',2);
  });

  it("should return proper values", function(){
    expect(card.getSuit()).toBe('Hearts');
    expect(card.getRank()).toBe('2');
  });

  it("should return proper card name", function(){
    expect(card.toString()).toBe('2 of Hearts');
  });

  it("should return a card's class",function(){
    expect(card.getClassName()).toBe('card hearts card2');
  });

});

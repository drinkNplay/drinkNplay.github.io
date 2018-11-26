cards.init({table:'#card-table'});

//Create a new deck of cards
deck = new cards.Deck(); 
//By default it's in the middle of the container, put it slightly to the side
deck.x -= 150;

//cards.all contains all cards, put them all in the deck
deck.addCards(cards.all); 
//No animation here, just get the deck onto the table.
deck.render({immediate:true});

lowerhand = new cards.Hand({faceUp:true, y:340});

deck.deal(4, [lowerhand], 50, function() {
});


//When you click on the top card of a deck, a card is added
//to your hand
deck.click(function(card){
	if (card === deck.topCard()) {
		upperhand.addCard(deck.topCard());
		upperhand.render();
	}
});

lowerhand.click(function(card){
	if (card.suit == discardPile.topCard().suit 
		|| card.rank == discardPile.topCard().rank) {
		discardPile.addCard(card);
		discardPile.render();
		lowerhand.render();
	}
});

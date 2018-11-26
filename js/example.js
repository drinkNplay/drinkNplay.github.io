//Tell the library which element to use for the table
cards.init({table:'#card-table'});

function testJS() {
    var b = document.getElementById('name').value,
        url = 'https://drinknplay.github.io/mesa.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}

//Create a new deck of cards
deck = new cards.Deck(); 
//By default it's in the middle of the container, put it slightly to the side
deck.x -= 150;

//cards.all contains all cards, put them all in the deck
deck.addCards(cards.all); 
//No animation here, just get the deck onto the table.
deck.render({immediate:true});

//Now lets create a couple of hands, one face down, one face up.
upperhand = new cards.Hand({faceUp:true, y:160});

//Lets add a discard pile
discardPile = new cards.Deck({faceUp:true});
discardPile.x += 250;


//Let's deal when the Deal button is pressed:
$('#deal').click(function() {
	//Deck has a built in method to deal to hands.
	$('#deal').hide();
	deck.deal(6, [upperhand], 50, function() {
		//This is a callback function, called when the dealing
		//is done.
		discardPile.addCard(deck.topCard());
		discardPile.render();
	});
});


//When you click on the top card of a deck, a card is added
//to your hand
deck.click(function(card){
	if (card === deck.topCard()) {
		upperhand.addCard(deck.topCard());
		upperhand.render();
	}
});

//Finally, when you click a card in your hand, if it's
//the same suit or rank as the top card of the discard pile
//then it's added to it
upperhand.click(function(card){
	if (card.suit == discardPile.topCard().suit 
		|| card.rank == discardPile.topCard().rank) {
		discardPile.addCard(card);
		discardPile.render();
		lowerhand.render();
	}
});

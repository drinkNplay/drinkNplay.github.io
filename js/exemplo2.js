//Tell the library which element to use for the table
cards.init({table:'#card-table'});

lowerhand = new cards.Hand({faceUp:true, y:-100});

window.onload =  deck.deal(4, [lowerhand], 50, function() {
        //This is a callback function, called when the dealing
        //is done.
        discardPile.addCard(deck.topCard());
        discardPile.render();
});

//When you click on the top card of a deck, a card is added
//to your hand
deck.click(function(card){
    if (card === deck.topCard()) {
        lowerhand.addCard(deck.topCard());
        lowerhand.render();
    }
});

//Finally, when you click a card in your hand, if it's
//the same suit or rank as the top card of the discard pile
//then it's added to it
lowerhand.click(function(card){
    if (card.suit == discardPile.topCard().suit
        || card.rank == discardPile.topCard().rank) {
        discardPile.addCard(card);
        discardPile.render();
        lowerhand.render();
    }
});

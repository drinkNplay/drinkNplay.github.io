//Tell the library which element to use for the table
cards.init({table:'#card-table'});

lowerhand = new cards.Hand({faceUp:true, y:-100});

$('#deal').click(function() {
    deck.deal(4, [lowerhand], 50, function() {
        //This is a callback function, called when the dealing
        //is done.
        discardPile.addCard(deck.topCard());
        discardPile.render();
    });
});

lowerhand.click(function(card){
    if (card.suit == discardPile.topCard().suit
        || card.rank == discardPile.topCard().rank) {
        discardPile.addCard(card);
        discardPile.render();
        lowerhand.render();
    }
});


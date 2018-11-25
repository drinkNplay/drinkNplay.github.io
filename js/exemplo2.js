
cards.init({table:'#card-table'});

upperhand = new cards.Hand({faceUp:true, y:160});

upperhand.click(function(card){
        $('.selected').removeClass('selected'); // removes the previous selected class
        $(this).addClass('selected'); // adds the class to the clicked image
	if (card.suit == discardPile.topCard().suit 
		|| card.rank == discardPile.topCard().rank) {
		discardPile.addCard(card);
		discardPile.render();
		lowerhand.render();
	}
});

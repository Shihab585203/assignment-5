//calculate selected player price
document.getElementById('player-price-calculate').addEventListener('click', function(){
    const perPlayerFieldElement = document.getElementById('per-player-field');
    const playerFieldString = perPlayerFieldElement.value;
    const playerAmount = parseInt(playerFieldString);
    //get player list length
    const playerListElement = document.getElementById('list-container');
    const playerCount = playerListElement.childNodes.length;
    //get players price
    const totalPlayerPrice = playerAmount * playerCount;
    //set total player price property
    const playersTotalElement = document.getElementById('players-total-expenses');
    const playersTotalString = playersTotalElement.innerText;
    const playersExpenses = parseInt(playersTotalString);
    playersTotalElement.innerText = totalPlayerPrice;
    
})
    
//calculate selected player price
document.getElementById('player-price-calculate').addEventListener('click', function(){
    const perPlayerFieldElement = document.getElementById('per-player-field');
    const playerFieldString = perPlayerFieldElement.value;
    const playerAmount = parseInt(playerFieldString);
    //get player list length
    const playerListElement = document.getElementById('list-container');
    const playerCount = playerListElement.childNodes.length - 1;
    //get players price
    const totalPlayerPrice = playerAmount * playerCount;
    //set total player price property
    const playersTotalElement = document.getElementById('players-total-expenses');
    const playersTotalString = playersTotalElement.innerText;
    const playersExpenses = parseInt(playersTotalString);
    playersTotalElement.innerText = totalPlayerPrice;
    
})


document.getElementById('calculate-total').addEventListener('click', function(){
    //Player expenses Total
    const playersTotalElement = document.getElementById('players-total-expenses');
    const playersTotalString = playersTotalElement.innerText;
    const playersTotal = parseFloat(playersTotalString); 

    //set Coach Price
    const coachPriceElement = document.getElementById('coach-price');
    const coachPriceString = coachPriceElement.value;
    const coachPrice = parseFloat(coachPriceString);

    //set manager Price
    const managerPriceElement = document.getElementById('manager-price');
    const managerPriceString = managerPriceElement.value;
    const managerPrice = parseFloat(managerPriceString);

    //get Final Total Price
    const finalTotalElement = document.getElementById('final-total');
    const finalTotalString = finalTotalElement.innerText;
    const previousFinalTotal = parseFloat(finalTotalString);

    //calculate Final Total Price
    const newFinalTotal = playersTotal + managerPrice + coachPrice + previousFinalTotal;

    finalTotalElement.innerText = newFinalTotal;
})


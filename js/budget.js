//calculate selected player price
document.getElementById('player-price-calculate').addEventListener('click', function(){
    const perPlayerFieldElement = document.getElementById('per-player-field');
    const playerFieldString = perPlayerFieldElement.value;
    const playerAmount = parseFloat(playerFieldString);

    //set empty value after submission
    perPlayerFieldElement.value = '';
    //if is it not a number then show an alert
    if(isNaN(playerAmount)){
        alert('input valid Number');
        return;
    }

    //get player list length
    const playerListElement = document.getElementById('list-container').children.length;
    
    //get players price
    const totalPlayerPrice = playerAmount * playerListElement;
    //set total player price property
    const playersTotalElement = document.getElementById('players-total-expenses');
    const playersTotalString = playersTotalElement.innerText;
    const playersExpenses = parseFloat(playersTotalString);
    playersTotalElement.innerText = totalPlayerPrice;

   
})

if(playerListElement > 5){
    alert('abc');
    return;
}



document.getElementById('calculate-total').addEventListener('click', function(){
    //Player expenses Total
    const playersTotalElement = document.getElementById('players-total-expenses');
    const playersTotalString = playersTotalElement.innerText;
    const playersTotal = parseFloat(playersTotalString); 

    //set Coach Price
    const coachPriceElement = document.getElementById('coach-price');
    const coachPriceString = coachPriceElement.value;
    const coachPrice = parseFloat(coachPriceString);

    //set empty value after submission
    coachPriceElement.value = '';
    //if is it not a number then show an alert
    if(isNaN(coachPrice)){
        alert('input valid Number');
        return;
    }

    //set manager Price
    const managerPriceElement = document.getElementById('manager-price');
    const managerPriceString = managerPriceElement.value;
    const managerPrice = parseFloat(managerPriceString);
    //set empty value after submission
    managerPriceElement.value = '';
    //if is it not a number then show an alert
    if(isNaN(managerPrice)){
        alert('input valid Number');
        return;
    }
    
    //get Final Total Price
    const finalTotalElement = document.getElementById('final-total');
    const finalTotalString = finalTotalElement.innerText;
    const previousFinalTotal = parseFloat(finalTotalString);
    
    //calculate Final Total Price
    const newFinalTotal = playersTotal + managerPrice + coachPrice + previousFinalTotal;

    finalTotalElement.innerText = newFinalTotal;
})

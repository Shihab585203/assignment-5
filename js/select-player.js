function setPlayerTextValue(selectPlayerString){


    // set the player name inside the selected player list
    // create a  new element (li tag.)
    // set the text of the player name on li tag
    // add li tag as appendchild 

    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = selectPlayerString;
    listContainer.appendChild(li);
}


document.getElementById('player-one-select').addEventListener('click', function(){
    // Get the player name from card
    const selectPlayerName = document.getElementById('player-one');
    const selectPlayerString = selectPlayerName.innerText;

    setPlayerTextValue(selectPlayerString);
})
document.getElementById('player-two-select').addEventListener('click', function(){
    // Get the player name from card
    const selectPlayerName = document.getElementById('player-two');
    const selectPlayerString = selectPlayerName.innerText;

    setPlayerTextValue(selectPlayerString);
})
document.getElementById('player-three-select').addEventListener('click', function(){
    // Get the player name from card
    const selectPlayerName = document.getElementById('player-three');
    const selectPlayerString = selectPlayerName.innerText;

    setPlayerTextValue(selectPlayerString);
})
document.getElementById('player-four-select').addEventListener('click', function(){
    // Get the player name from card
    const selectPlayerName = document.getElementById('player-four');
    const selectPlayerString = selectPlayerName.innerText;

    setPlayerTextValue(selectPlayerString);
})
document.getElementById('player-five-select').addEventListener('click', function(){
    // Get the player name from card
    const selectPlayerName = document.getElementById('player-five');
    const selectPlayerString = selectPlayerName.innerText;

    setPlayerTextValue(selectPlayerString);
})
document.getElementById('player-six-select').addEventListener('click', function(){
    // Get the player name from card
    const selectPlayerName = document.getElementById('player-six');
    const selectPlayerString = selectPlayerName.innerText;

    setPlayerTextValue(selectPlayerString);
})
document.getElementById('player-seven-select').addEventListener('click', function(){
    // Get the player name from card
    const selectPlayerName = document.getElementById('player-seven');
    const selectPlayerString = selectPlayerName.innerText;

    setPlayerTextValue(selectPlayerString);
})
document.getElementById('player-eight-select').addEventListener('click', function(){
    // Get the player name from card
    const selectPlayerName = document.getElementById('player-eight');
    const selectPlayerString = selectPlayerName.innerText;

    setPlayerTextValue(selectPlayerString);
})
document.getElementById('player-nine-select').addEventListener('click', function(){
    // Get the player name from card
    const selectPlayerName = document.getElementById('player-nine');
    const selectPlayerString = selectPlayerName.innerText;

    setPlayerTextValue(selectPlayerString);
})
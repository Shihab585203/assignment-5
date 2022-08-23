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
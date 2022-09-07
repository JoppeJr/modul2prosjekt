function updateViewGame() {


    let html = ""
    html += `
    <div class="current-user">Logget inn som:</div>${model.currentUser}
    <button onclick="logOut()" class="logout-btn">Logg ut</button><br>
    
    <button onclick="generateRandomWord(); createGameObject();" class="buttons">Start</button>
    <button onclick="updateViewResult()" class="buttons">Resultat</button> 
    <button onclick="updateViewLeaderBoard()" class="buttons">Poengtavle</button><br>
    
 `;
    // page cant be draw if game object still dsnt exist, game object is created in game control
    // If statment for å starte denne funksjonen ? fikk ikke med oss alt som ble sagt mandag.
    // model.playerList[model.userIndex].game[model.currentGameIndex]
    //model.currentAttempts

    if (model.playerList[model.userIndex].game[model.currentGameIndex] == null) {
        html += "Trykk på start for å starte spillet"

    } else {
        html += drawRestOfthePage();
    }
    //html += `A B C D E .... `;  



    document.getElementById('app').innerHTML = html


    function drawPoints() {
        let html = ""
        for (i = 0; i < model.guessedWordList.length; i++) {
            let splitedWord = model.guessedWordList[i].word.toUpperCase().split('')
            html += `
        <div style="clear: left;">
        <div style="float:left; background-color: red; padding:1px; width:15px" opacity: 0.7;>${splitedWord[0]}</div> 
        <div style="float:left; background-color: green;  padding:1px; width:15px">${splitedWord[1]}</div> 
        <div style="float:left; background-color: #00FFFF;  padding:1px; width:15px">${splitedWord[2]}</div> 
        <div style="float:left; background-color: yellow;  padding:1px; width:15px">${splitedWord[3]}</div> 
        <div style="float:left; background-color: purple;  padding:1px; width:15px">${splitedWord[4]}</div>
        </div> 
                 points:&nbsp;${model.guessedWordList[i].points}<br>`

        }
        return html
    }

    function drawRestOfthePage() {

        return `
    <hr><br> 
    <div> 
       ${drawButtons()}
    </div>
    


    
    
    <h3>_ _ _ _ _ </h3>
    Antall forsøk : ${
        model.playerList[model.userIndex].game[model.currentGameIndex].attempts }<br>
    <input type="text" oninput="model.guessedWord.word= this.value"><br>
    <button onclick="checkWord()">Gjett</button>
    <br>
    ${drawPoints()}`
    }

    function drawWinningPage() {
        return `<h3>${model.randomWord}</h3>
    Gratulerer! Du har vunnet!<br>
    <button onclick="generateRandomWord(); createGameObject()">Spill Igjen</button>`;
    }

    function drawButtons() {
        let html = ''
        let alphabet = 'abcdefghijklmnopqrstuvwxyzæøå'.split('');
        for (i = 0; i < alphabet.length; i++) {
            html += `<button onclick="changeColor()" class="abc-btns">` + alphabet[i] + `</button>`
                //console.log([i])
        }
        return html

    }
}

// function drawPageWithoutAttemps(){

//     return `<h3>_ _ _ _ _ </h3>
//     Antall forsøk : ${
//         model.playerList[model.userIndex].game[model.currentGameIndex].attempts }<br>
//     <input type="text" oninput="model.guessedWord.word= this.value"><br>
//     <button onclick="checkWord()">Gjett</button>
//     <br>
//     ${drawPoints()}`
// } changeColor(this, 'red', 'green', 'lightblue', 'yellow', 'lightgreen')
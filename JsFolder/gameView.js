function updateViewGame() {


    let html = ""
    html += `
    <div class="current-user">Logget inn som:  
    <span class="current-username">${model.currentUser} </span>
    <button onclick="logOut()" class="logout-btn">Logg ut</button></div><br>
    
    <button onclick="updateViewMenu()" class="buttons">Meny</button>
    <button onclick="updateViewResult()" class="buttons">Resultat</button> 
    <button onclick="updateViewLeaderBoardDif()" class="buttons">Poengtavle</button><br>
    
 `;
    // page cant be draw if game object still dsnt exist, game object is created in game control
    // If statment for å starte denne funksjonen ? fikk ikke med oss alt som ble sagt mandag.
    // model.playerList[model.userIndex].game[model.currentGameIndex]
    //model.currentAttempts

    if (model.playerList[model.userIndex].game[model.currentGameIndex] == null) {
        html += `<div class="start-text">Trykk på start for å starte spillet</div>`

    } else {
        html += drawRestOfthePage();
    }
    //html += `A B C D E .... `;  



    document.getElementById('app').innerHTML = html


    function drawPoints() {
        let html = ""
        for (i = 0; i < model.guessedWordList.length; i++) {
            let splitedWord = model.guessedWordList[i].word.toUpperCase().split('')
            html += `<div style="clear: left;">`
            for (j = 0; j < splitedWord.length; j++) {
                html += `
                <div style="float:left; background-color:${model.color[j]}; padding:1px; width:15px" opacity: 0.7;>${splitedWord[j]}</div>
                `
            }


            html += ` </div> points:&nbsp;${model.guessedWordList[i].points}<br>`

        }
        return html
    }


    function drawRestOfthePage() {

        return `
    <hr><br> 
   
       ${drawButtons()}
    </div>
 
    <h3>${showChar()}</h3><br>
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
        createStuff()
        let html = ''
        let alphabet = 'abcdefghijklmnopqrstuvwxyzæøå'.split('');
        for (i = 0; i < alphabet.length; i++) {
            html += `<button onclick="changeColor(${i})" class="abc-btns"  style="background-color:${model.theNewArray[i].color};">` + alphabet[i] + `</button>`
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


function createStuff() {

    let alphabet = 'abcdefghijklmnopqrstuvwxyzæøå'.split('');
    for (i = 0; i < alphabet.length; i++) {
        const newobj = {
            letter: alphabet[i],
            clicks: 0,
            color: ""
        }
        model.theNewArray.push(newobj)
    }
}

function showChar() {
    model.html = ''
    
    let randomWordArray = []
    for (let i = 0; i < model.randomWord.length; i++) {
      randomWordArray.push(" ");
    }
    for(i=0;i< randomWordArray.length; i++)
    {
        model.html += `<div style="float: left; border: solid ${model.color[i]} 3px; height: 15px; width: 15px; "> ${randomWordArray[i]}</div>`

    }
    return model.html
  }
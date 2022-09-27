function updateViewGame() {


    let html = ""
    html += `
    <div class="current-user">Logget inn som:  
    <span class="current-username">${model.currentUser} </span>
    <button onclick="logOut()" class="logout-btn">Logg ut</button></div><br>
    
    <button onclick="updateViewMenu()" class="buttons">Meny</button>
    <button onclick="updateViewResult()" class="buttons">Resultat</button> 
    <button onclick="updateViewLeaderboardDif()" class="buttons">Poengtavle</button><br>
    
 `;


    if (model.playerList[model.userIndex].game[model.currentGameIndex] == null) {
        html += `<div class="start-text">Trykk på start for å starte spillet</div>`

    } else {
        html += drawRestOfthePage();
    }




    document.getElementById('app').innerHTML = html


    function drawPoints() {
        let html = ""

        for (i = 0; i < model.guessedWordList.length; i++) {
            let splitedWord = model.guessedWordList[i].word.toUpperCase().split('')
            html += `<div style="display: flex; justify-content: center;">`
            for (j = 0; j < splitedWord.length; j++) {
                html += `
                <div style=" flex-direction: row; background-color:${model.color[j]}; padding:1px; width:15px" opacity: 0.7;>${splitedWord[j]}</div>
                `
            }


            html += ` points:&nbsp;${model.guessedWordList[i].points}<br></div> `

        }
        return html
    }


    function drawRestOfthePage() {

        return `
    <hr><br> 
   
       ${drawButtons()}
    </div>
 
    <h3>${showChar()}</h3><br>
    <div class="attempts-div">Antall forsøk : ${
        model.playerList[model.userIndex].game[model.currentGameIndex].attempts } </div><br>
    <input type="text" oninput="model.guessedWord.word= this.value" class="guess-input"><br>
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

        }
        return html

    }
}



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
    let guessedWordSplited = []
    guessedWordSplited = model.guessedWord.word.split("")


    let randomWordArray = []
    for (let i = 0; i < model.randomWord.length; i++) {
        randomWordArray.push(" ");
    }

    model.html += `<div style="display: flex; justify-content: center;">`
    for (i = 0; i < randomWordArray.length; i++) {
        model.html += `
        <div style=" float: left;border: solid black 1.5px; background-color:  ${model.color[i]} ; height: 30px; width: 30px; 
        "class="char-div"> ${randomWordArray[i]} </div>
       `

    }
    model.html += `</div>`;

    ;
    return model.html
}
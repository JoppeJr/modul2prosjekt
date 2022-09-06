function updateViewGame() {


    let html = ""
    html += `
    Logget inn som: ${model.currentUser}<button onclick="logOut()">Logg ut</button><br>
    
    <button onclick="generateRandomWord(); createGameObject()">Start</button>
    <button onclick="updateViewResult()">Resultat</button> 
    <button onclick="updateViewLeaderBoard()">Poengtavle</button><br>
    
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
}


function drawPoints() {
    let html = ""
    for (i = 0; i < model.guessedWordList.length; i++) {
        let splitedWord = model.guessedWordList[i].word.toUpperCase().split('')
        html += `
        <div style="clear: left;">
        <div style="float:left; background-color: red; padding:1px; width:15px">${splitedWord[0]}</div> 
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
        <button style ="background-color:${model.color};"onclick="changeColor()">A</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">B</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">C</button>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">D</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">E</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">F</button></br>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">G</button>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">H</button>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">I&nbsp;</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">J&nbsp;</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">K</button>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">L</button></br> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">M</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">N</button>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">O</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">P</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">Q</button>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">R</button></br> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">S</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">T</button>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">U</button>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">V</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">W</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">X</button></br> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">Y</button>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">Z</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">Æ</button> 
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">Ø</button>
        <button onclick="changeColor(this, 'red', 'green', '#00FFFF', 'yellow'. 'purple', 'black')">Å</button> 
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

// function drawPageWithoutAttemps(){

//     return `<h3>_ _ _ _ _ </h3>
//     Antall forsøk : ${
//         model.playerList[model.userIndex].game[model.currentGameIndex].attempts }<br>
//     <input type="text" oninput="model.guessedWord.word= this.value"><br>
//     <button onclick="checkWord()">Gjett</button>
//     <br>
//     ${drawPoints()}`
// } changeColor(this, 'red', 'green', 'lightblue', 'yellow', 'lightgreen')
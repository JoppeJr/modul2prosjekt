function checkWord() {
    if (model.guessedWord.word.length == model.randomWord.length) {
        model.playerList[model.userIndex].game[model.currentGameIndex].attempts++
            //model.currentAttempts++
            //model.game.attempts++ //
            model.guessedWord.points = 0

        let splitedGuessedWord = ""
        let splitedrandomWord = ''

        splitedGuessedWord = model.guessedWord.word.split('')
        splitedrandomWord = model.randomWord.split('')


        for (i = 0; i < splitedrandomWord.length; i++) {
            if (splitedGuessedWord[i] == splitedrandomWord[i]) {
                model.guessedWord.points++

            }

        }
        if (model.guessedWord.word == model.randomWord) {
            model.playerList[model.userIndex].game[model.currentGameIndex].finished = true


            console.log('game finished');
            model.currentPage = 'win';
            updateView();

        } else {
            pushGuessedWord()
            zeroPoints()
            updateViewGame()
        }





    } else {
        alert("the word you guessed has to be 5 charachters")
    }

}

//start
function generateRandomWord() {



    let newWordList = model.randomWordArray.filter(i => i != model.randomWord);
    let random = Math.floor(Math.random() * newWordList.length);
    model.randomWord = newWordList[random];
    console.log(model.randomWord)



}



function zeroPoints() {
    model.guessedWordList.points = 0;
}




function createGameObject() {
    let gameobject = {};
    let today = new Date();
    let dateOfGame = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    gameobject.gameNumber = model.playerList[model.userIndex].game.length + 1;
    gameobject.date = dateOfGame;
    gameobject.attempts = 0;
    model.currentGameIndex = model.playerList[model.userIndex].game.length
    gameobject.word = model.randomWord;
    gameobject.finished = false;
    //oppdater riktig gameindex
    model.playerList[model.userIndex].game.push(gameobject);
    // model.currentAttempts = model.playerList[model.userIndex].game[model.currentGameIndex].attempts


    //empty guessedWordList
    model.guessedWordList.length = 0



    updateViewGame();
}




function pushGuessedWord() {
    model.guessedWordList.push({
        word: model.guessedWord.word,
        points: model.guessedWord.points
    })

}
 
 




gettekst()
async function gettekst(){
    let response = await fetch("Ordliste5Bokstaver.txt");
    let text = await response.text()
    let fjernNewlineOgDiv = await text.replace(/\r\n/g, " ")
    let stringArray = await fjernNewlineOgDiv.toString().split(" "); 
    model.wordsList5Letters = stringArray 
}
+
// function pushGames() {



//     for (i = 0; i < model.playerList.length; i++) {
//         if (model.playerList[i].game.gotPushed = false) {
//             model.leaderBoardList.push.apply(model.leaderBoardList, model.playerList[i].game);
//             model.playerList[i].gamegotPushed = true
//             console.log('hello')
//         }





//     }

//     model.leaderBoardList.sort(compareAttempts)



// }



function separateAndCheckLetters() {
    let letters = model.guessedWord.word.split("");
    //let thisLetter = letters.some(letter => letter == "A");
    for (i = 0; i < letters.length; i++) {
        for (j = i + 1; j < letters.length; j++) {
            if (letters[i] == letters[j]) {
                return false
            }
        }
    }
    return true

}

function changeColor() {

    model.clicks++
        console.log(model.clicks)
    if (model.clicks == 0) {
        model.color = ''
    }
    if (model.clicks == 1) {
        model.color = "red"
    }
    if (model.clicks == 2) {
        model.color = 'green'
    }
    if (model.clicks == 3) {
        model.color = '#00FFFF'
    }
    if (model.clicks == 4) {
        model.color = 'yellow'
    }

    if (model.clicks == 5) {
        model.color = 'purple'

    }
    if (model.clicks == 6) {
        model.color = 'black'

    }
    if (model.clicks == 7) {
        model.color = ''
        model.clicks = 0
    }



    updateViewGame();
}



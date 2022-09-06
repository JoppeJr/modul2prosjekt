function updateViewLeaderBoard() {
    
    

    
   
   
    document.getElementById('app').innerHTML = `
   Logget inn som: ${model.currentUser}
   <button onclick="logOut()">Logg ut</button><br>
   
   <button onclick="updateViewGame()">Spill igjen</button>
   <button onclick="updateViewResult()">Resultat</button>
   <button onclick="updateViewLeaderBoard()">Poengtavle</button>

   <h2>Poengtavle</h2><br>
   <button onclick="bestAttempts()" >Beste forsøk</button> <button>Beste gjennomsnitt</button>
   <hr>
   ${drawLeaderBoard()}
   `;

   
  

   

 }



function drawLeaderBoard(){
    let playersHtml = "";

    model.playerList.forEach(player => playersHtml += findGamesFromEachPlayer(player));
  return playersHtml

}


     

function findGamesFromEachPlayer(player) {
    let html=""
    let FinishedGames = player.game.filter(game => game.finished == true)
    let sortedGames = FinishedGames.sort(compareAttempts);
    let totalGamesAttempts = FinishedGames.reduce((a, b) => ({ attempts: a.attempts + b.attempts }))
    let average = totalGamesAttempts.attempts / FinishedGames.length
    

    const newObj = {
      userName : player.userName,
      bestGame : sortedGames[0].attempts,
      average : average
    }

    

    model.leaderBoardList.push(newObj)
   

   let bestGameArray = model.leaderBoardList.map(player => player)
   let leastAttemptsArray = model.leaderBoardList.map(player => player)

   bestGameArray.sort(compareBestGame)
   leastAttemptsArray.sort(compareBestAverage)

   console.log(model.leaderBoardList)

    html += `Spiller - ${player.userName} <br>
            Beste spill - ${sortedGames[0].attempts} forsøk <br>
            Gjennomsnitt - ${average}<hr>`
            
           

           return html 

     }


     function compareBestGame(a, b) {
      return a.bestGame - b.bestGame;
  }
 
  function compareBestAverage(a, b) {
    return a.average - b.average;
}


// function leaderBoard(){
//   let FinishedGames = player.game.filter(game => game.finished == true)
//     let sortedGames = FinishedGames.sort(compareAttempts);
//     let totalGamesAttempts = FinishedGames.reduce((a, b) => ({ attempts: a.attempts + b.attempts }))
//     let average = totalGamesAttempts.attempts / FinishedGames.length
    

//     const newObj = {
//       userName : player.userName,
//       bestGame : sortedGames[0].attempts,
//       average : average
//     }
//     let dntRepeatGame = model.leaderBoardList.find(dntRepeat)
//     model.leaderBoardList.push(dntRepeatGame)
//    let bestGameArray = model.leaderBoardList.map(player => player)
//    let leastAttemptsArray = model.leaderBoardList.map(player => player)

//    bestGameArray.sort(compareBestGame)
//    leastAttemptsArray.sort(compareBestAverage)
// }


//function bestAttempts(){
  

function dntRepeat(game, index){
if(game.userName == newObj.userName && game.bestGame == newObj.bestGame && game.average == newObj.average
  || 
  game.userName == newObj.userName && game.bestGame>= newObj.bestGame 
  ||
  game.userName == newObj.userName && game.average>= newObj.average){
    return game[index]
  }
 


}































    // let leaderBoardObj = {};
    // leaderBoardObj.pName = player.userName,
    // leaderBoardObj.bestGame = sortedGames[0],
    // leaderBoardObj.av = average
    // console.log(leaderBoardObj)
    // model.leaderBoardList.push(leaderBoardObj)


// function print5Best(){
//     let html =""
//     for(i=0; i<5; i++){
//         html+= 
//                 Best Game
//                 Average`

//     }
// }



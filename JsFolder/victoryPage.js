function updateViewWin() {
    console.log('running')
    document.getElementById('app').innerHTML = `
    <div class="current-user">Logget inn som:  
    <span class="current-username">${model.currentUser} </span>
    <button onclick="logOut()" class="logout-btn">Logg ut</button></div><br>
    <button onclick="updateViewMenu()">Meny</button>
    <button onclick="updateViewResult()">Resultat</button>
    <button onclick="updateViewLeaderboardDif()">Poengtavle</button><br>
    <h2>Gratulerer du vant på  
    ${model.playerList[model.userIndex].game[model.currentGameIndex].attempts}. 
    forsøk!</h2><br>
    <h2>Med ordet: ${model.randomWord}.`;





}
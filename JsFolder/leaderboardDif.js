function updateViewLeaderboardDif(){

    let html = '';

    html += `
    <div class="current-user">Logget inn som:  
    <span class="current-username">${model.currentUser} </span></div>
    <button onclick="logOut()" class="logout-btn">Logg ut</button><br>
    <button onclick="updateViewMenu()">Meny</button>
    <button onclick="updateViewResult()">Resultat</button>
    <button onclick="updateViewLeaderboardDif()">Poengtavle</button>
    <h2>Poengtavle</h2><br>
    
    <br><hr>
    <button value="fem" onclick="model.leaderDif = this.value; updateViewLeaderBoard(); bestGame();" >Lett</button> 
    <button value="syv" onclick="model.leaderDif = this.value; updateViewLeaderBoard(); bestGame();" >Medium</button> 
    <button value="ni" onclick="model.leaderDif = this.value; updateViewLeaderBoard(); bestGame();" >Vanskelig</button> 
    
    `;

    document.getElementById('app').innerHTML = html;
}
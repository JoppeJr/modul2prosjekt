function updateViewLeaderboardDif(){

    let html = '';

    html += `
    <div class="current-user">Logget inn som:  
    <span class="current-username">${model.currentUser} </span>
    <button onclick="logOut()" class="logout-btn">Logg ut</button><br>
    
    <br><hr>
    <button value="fem" onclick="model.leaderDif = this.value; updateViewLeaderBoard(); bestGame();">Easy</button> 
    <button value="syv" onclick="model.leaderDif = this.value; updateViewLeaderBoard(); bestGame();">Medium</button> 
    <button value="ni" onclick="model.leaderDif = this.value; updateViewLeaderBoard(); bestGame();">Hard</button> 
    
    `;

    document.getElementById('app').innerHTML = html;
}
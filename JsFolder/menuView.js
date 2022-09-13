function updateViewMenu(){

    let html = '';

    html += `
    <div class="current-user">Logget inn som:</div>${model.currentUser}
    <button onclick="logOut()" class="logout-btn">Logg ut</button><br>
    
    <button onclick="updateViewResult()" class="buttons">Resultat</button> 
    <button onclick="updateViewLeaderboardDif()" class="buttons">Poengtavle</button><br>
    <hr><br> 
    Velg vanskelighetsgrad for å starte spillet <br>
    Lett  (5 bokstaver) <button value="fem" onclick="model.difficulty = this.value; generateRandomWord(); createGameObject();" >Spill</button><br>
    Medium (7 bokstaver)<button value="syv" onclick="model.difficulty = this.value; generateRandomWord(); createGameObject();" >Spill </button><br>
    Vanskelig (9 bokstaver) <button value="ni" onclick="model.difficulty = this.value; generateRandomWord(); createGameObject();">Spill </button> 
    <br>
    
    `;

    document.getElementById('app').innerHTML = html;
}
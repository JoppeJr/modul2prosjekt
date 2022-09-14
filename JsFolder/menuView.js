function updateViewMenu(){

    let html = '';

    html += `
    <div class="current-user">Logget inn som:  
    <span class="current-username">${model.currentUser} </span>
    <button onclick="logOut()" class="logout-btn">Logg ut</button></div><br>
    
    <button onclick="updateViewResult()">Resultat</button> 
    <button onclick="updateViewLeaderboardDif()">Poengtavle</button><br>
    <hr><br> 
    Velg vanskelighetsgrad for å starte spillet <br>
    Lett  (5 bokstaver) <button value="fem" onclick="model.difficulty = this.value; generateRandomWord(); createGameObject();" class="play-btn">Spill</button><br>
    Medium (7 bokstaver)<button value="syv" onclick="model.difficulty = this.value; generateRandomWord(); createGameObject();" class="play-btn">Spill </button><br>
    Vanskelig (9 bokstaver) <button value="ni" onclick="model.difficulty = this.value; generateRandomWord(); createGameObject();" class="play-btn">Spill </button> 
    <br><hr>

    <h4>Regler</h4><br>
    Ordet er på lengden du velger i forhold til vanskelighetsgrad og <br>
    det innheholder ingen like bokstaver.<br>
    Du må gjette et ord som er like langt som ordet du skal tippe.<br>
    Det må være et ord som finnes men det kan inneholde like bokstaver.<br>
    Du får poeng for hver riktig bokstav som er på riktig plass.<br>
    Du har alfabetet som du kan trykke på for å markere der du tror bokstaven skal<br>
     være eller at det ikke eksisterer i ordet.<br>
    Du vil ikke se noe på resultat eller poengtavle før du har spilt et spill i vanskelighetsgrad.



    
    `;

    document.getElementById('app').innerHTML = html;
}
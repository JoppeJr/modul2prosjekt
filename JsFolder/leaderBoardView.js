function updateViewLeaderBoard() {
    model.playerList.forEach(player => creation(player))

    document.getElementById('app').innerHTML = `
    <div class="current-user">Logget inn som:  
    <span class="current-username">${model.currentUser} </span>
     <button onclick="logOut()" class="logout-btn">Logg ut</button></div><br>
     
     <button onclick="updateViewMenu()">Meny</button>
     <button onclick="updateViewResult()">Resultat</button>
     <button onclick="updateViewLeaderboardDif()">Poengtavle</button>
  
     <h2>Poengtavle</h2>${tellLevel()}<br>
     <button onclick="bestGame()" class="lb-btns">Beste forsøk</button> <button onclick="bestAttempts()" class="lb-btns">Beste gjennomsnitt</button>
     <hr>
     ${drawLeaderBoard()}
     `;



}

function tellLevel(){
    let html = ""
    if(model.leaderDif == "fem"){
        html+= `<div>LETT</div>`
    }
    if(model.leaderDif == "syv"){
        html+= `<div>MEDIUM</div>`
    }
    if(model.leaderDif == "ni"){
        html+= `<div>VANSKELIG</div>`
    }
    return html
}

function drawLeaderBoard() {
    let playersHtml = "";

    // if (model.filterby == " ") {
    //     model.playerList.forEach(player => playersHtml += findGamesFromEachPlayer(player));
    // }
    if (model.filterby == "best") {
        playersHtml = model.leaderBoardInput
    }
    if (model.filterby == "attempts") {
        playersHtml = model.leaderBoardInput
    }
    return playersHtml

}




function bestGame() {
    let html = ""
    
    if(model.leaderDif == "fem"){ 
    let filteredEasy = model.leaderBoardList.filter(game => game.gameDif == "fem")
    filteredEasy.sort(compareBestGame)
    const unique = filteredEasy.filter((v, i, a) => a.findIndex(v2 => (v2.userName === v.userName )) === i)

    for (i = 0; i < unique.length; i++) {
        html += `Spiller - ${ unique[i].userName} <br>
              Beste spill - ${ unique[i].bestGame} forsøk <br>
              Gjennomsnitt - ${ unique[i].average}<hr>`
        console.log(unique)

    }
    //  model.currentPage = "leaderBoard";
    model.leaderBoardInput = html
    model.filterby = "best";

    //  return html
    updateViewLeaderBoard(); }

    if(model.leaderDif == "syv"){ 
        let filteredMedium = model.leaderBoardList.filter(game => game.gameDif == "syv")
        filteredMedium.sort(compareBestGame)
        const unique = filteredMedium.filter((v, i, a) => a.findIndex(v2 => (v2.userName === v.userName )) === i)
    
        for (i = 0; i < unique.length; i++) {
            html += `Spiller - ${ unique[i].userName} <br>
                  Beste spill - ${ unique[i].bestGame} forsøk <br>
                  Gjennomsnitt - ${ unique[i].average}<hr>`
            console.log(unique)
    
        }
        //  model.currentPage = "leaderBoard";
        model.leaderBoardInput = html
        model.filterby = "best";
    
        //  return html
        updateViewLeaderBoard(); }

        if(model.leaderDif == "ni"){ 
            let filteredHard = model.leaderBoardList.filter(game => game.gameDif == "ni")
            filteredHard.sort(compareBestGame)
            const unique = filteredHard.filter((v, i, a) => a.findIndex(v2 => (v2.userName === v.userName )) === i)
        
            for (i = 0; i < unique.length; i++) {
                html += `Spiller - ${ unique[i].userName} <br>
                      Beste spill - ${ unique[i].bestGame} forsøk <br>
                      Gjennomsnitt - ${ unique[i].average}<hr>`
                console.log(unique)
        
            }
            //  model.currentPage = "leaderBoard";
            model.leaderBoardInput = html
            model.filterby = "best";
        
            //  return html
            updateViewLeaderBoard(); }
}

function bestAttempts() {
    let html = ""
 
    if(model.leaderDif == "fem"){ 
        let filteredEasy = model.leaderBoardList.filter(game => game.gameDif == "fem")
        filteredEasy.sort(compareBestAverage)
        const unique = filteredEasy.filter((v, i, a) => a.findIndex(v2 => (v2.userName === v.userName )) === i)
    
        for (i = 0; i < unique.length; i++) {
            html += `Spiller - ${ unique[i].userName} <br>
                  Beste spill - ${ unique[i].bestGame} forsøk <br>
                  Gjennomsnitt - ${ unique[i].average}<hr>`
            console.log(unique)
    
        }
        //  model.currentPage = "leaderBoard";
        model.leaderBoardInput = html
        model.filterby = "attempts";
    
        //  return html
        updateViewLeaderBoard(); }
    
        if(model.leaderDif == "syv"){ 
            let filteredMedium = model.leaderBoardList.filter(game => game.gameDif == "syv")
            filteredMedium.sort(compareBestAverage)
            const unique = filteredMedium.filter((v, i, a) => a.findIndex(v2 => (v2.userName === v.userName )) === i)
        
            for (i = 0; i < unique.length; i++) {
                html += `Spiller - ${ unique[i].userName} <br>
                      Beste spill - ${ unique[i].bestGame} forsøk <br>
                      Gjennomsnitt - ${ unique[i].average}<hr>`
                console.log(unique)
        
            }
            //  model.currentPage = "leaderBoard";
            model.leaderBoardInput = html
            model.filterby = "attempts";
        
            //  return html
            updateViewLeaderBoard(); }
    
            if(model.leaderDif == "ni"){ 
                let filteredHard = model.leaderBoardList.filter(game => game.gameDif == "ni")
                filteredHard.sort(compareBestAverage)
                const unique = filteredHard.filter((v, i, a) => a.findIndex(v2 => (v2.userName === v.userName )) === i)
            
                for (i = 0; i < unique.length; i++) {
                    html += `Spiller - ${ unique[i].userName} <br>
                          Beste spill - ${ unique[i].bestGame} forsøk <br>
                          Gjennomsnitt - ${ unique[i].average}<hr>`
                    console.log(unique)
            
                }
                //  model.currentPage = "leaderBoard";
                model.leaderBoardInput = html
                model.filterby = "attempts";
            
                //  return html
                updateViewLeaderBoard(); }



}
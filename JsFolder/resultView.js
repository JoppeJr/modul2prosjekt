function updateViewResult() {
    document.getElementById('app').innerHTML = `
    <div class="current-user">Logget inn som:  
    <span class="current-username">${model.currentUser} </span>
    <button onclick="logOut()" class="logout-btn">Logg ut</button></div><br>
   
   <button onclick="updateViewMenu()">Meny</button>
   <button onclick="updateViewResult()">Resultat</button>
   <button onclick="updateViewLeaderboardDif()">Poengtavle</button>
   <h2>Resultat</h2><br>
    <button value="fem" onclick ="model.resultDif = this.value; updateViewResult()" class="result-btn">Lett</button>
    <button value="syv" onclick="model.resultDif = this.value; updateViewResult()" class="result-btn">Medium</button>
    <button value="ni" onclick="model.resultDif = this.value; updateViewResult()" class="result-btn">Vanskelig</button><hr>
   
    ${createResultHtml()}
   

   `;
}



function createResultHtml() {

    let html = ``;

  
    let thisPlayer = model.playerList.find(player => player.userName == model.currentUser);
    let FinishedGames = thisPlayer.game.filter(game => game.finished == true)
    if(model.resultDif == "fem"){ 
    let gameDificulty = FinishedGames.filter(value => value.gameDif == "fem")
    if (thisPlayer && gameDificulty.length>0 ) {
     
        gameDificulty.sort(compareAttempts);

        html += ` 
        Ditt gjennomsnitt: ${averageAttempts()}<br><hr>
        
        
        
        Ditt beste spill: <div>
        <p> Spillnr: ${gameDificulty[0].gameNumber}</p>
        <p> Ord: ${gameDificulty[0].word}</p>
        <p> Dato: ${gameDificulty[0].date}</p>
        <p> Forsøk: ${gameDificulty[0].attempts}</p>
        <p> Vanskelighetsgrad: ${gameDificulty[0].gameDif} bokstaver</p><hr>
         </div>
         
         Ditt dårligste spill: <div>
         <p> Spillnr: ${gameDificulty[gameDificulty.length -1].gameNumber}</p>
         <p> Ord: ${gameDificulty[gameDificulty.length -1].word}</p>
         <p> Dato: ${gameDificulty[gameDificulty.length -1].date}</p>
         <p> Forsøk: ${gameDificulty[gameDificulty.length -1].attempts}</p>
         <p> Vanskelighetsgrad: ${gameDificulty[gameDificulty.length -1].gameDif} bokstaver</p><hr>
          </div> `;
    } 
    else {html += `du har ikke spilt Lett ennå`}
    
 }
    if(model.resultDif == "syv"){ 
        let gameDificulty = FinishedGames.filter(value => value.gameDif == "syv")
        if (thisPlayer && gameDificulty.length>0 ) {
         
            gameDificulty.sort(compareAttempts);
    
            html += ` 
            Ditt gjennomsnitt: ${averageAttempts()}<br><hr>
            
            
            
            Ditt beste spill: <div>
            <p> Spillnr: ${gameDificulty[0].gameNumber}</p>
            <p> Ord: ${gameDificulty[0].word}</p>
            <p> Dato: ${gameDificulty[0].date}</p>
            <p> Forsøk: ${gameDificulty[0].attempts}</p>
            <p> Vanskelighetsgrad: ${gameDificulty[0].gameDif} bokstaver</p><hr>
             </div>
             
             Ditt dårligste spill: <div>
             <p> Spillnr: ${gameDificulty[gameDificulty.length -1].gameNumber}</p>
             <p> Ord: ${gameDificulty[gameDificulty.length -1].word}</p>
             <p> Dato: ${gameDificulty[gameDificulty.length -1].date}</p>
             <p> Forsøk: ${gameDificulty[gameDificulty.length -1].attempts}</p>
             <p> Vanskelighetsgrad: ${gameDificulty[gameDificulty.length -1].gameDif} bokstaver</p><hr>
              </div> `;
        }  
    else {html += `du har ikke spilt Medium ennå`}
}
        if(model.resultDif == "ni"){ 
            let gameDificulty = FinishedGames.filter(value => value.gameDif == "ni")
            if (thisPlayer && gameDificulty.length>0 ) {
             
                gameDificulty.sort(compareAttempts);
        
                html += ` 
                Ditt gjennomsnitt: ${averageAttempts()}<br><hr>
                
                
                
                Ditt beste spill: <div>
                <p> Spillnr: ${gameDificulty[0].gameNumber}</p>
                <p> Ord: ${gameDificulty[0].word}</p>
                <p> Dato: ${gameDificulty[0].date}</p>
                <p> Forsøk: ${gameDificulty[0].attempts}</p>
                <p> Vanskelighetsgrad: ${gameDificulty[0].gameDif} bokstaver</p><hr>
                 </div>
                 
                 Ditt dårligste spill: <div>
                 <p> Spillnr: ${gameDificulty[gameDificulty.length -1].gameNumber}</p>
                 <p> Ord: ${gameDificulty[gameDificulty.length -1].word}</p>
                 <p> Dato: ${gameDificulty[gameDificulty.length -1].date}</p>
                 <p> Forsøk: ${gameDificulty[gameDificulty.length -1].attempts}</p>
                 <p> Vanskelighetsgrad: ${gameDificulty[gameDificulty.length -1].gameDif} bokstaver</p><hr>
                  </div> `;
            } 
            else {html += `du har ikke spilt Vanskelig ennå`}
         }
    



    return html;

}







// function check(){
//     for (i=0;i<model.playerList.length;i++){
//         console.log(model.playerList[i].game.sort(compareAttempts));

//      }
// }

//for(let i = 0; i < model.playerList[userIndex].game[i].attempts.length; i++){
//  let attempts list = []
// 
//}
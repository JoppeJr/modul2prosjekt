function creation(player) {
    if( model.leaderDif == "fem"){ 
    let FinishedGames = player.game.filter(game => game.finished == true && game.gameDif == "fem")
    let sortedGames = FinishedGames.sort(compareAttempts); 
    if(sortedGames.length>0){
        
        let totalGamesAttempts = FinishedGames.reduce((a, b) => ({ attempts: a.attempts + b.attempts }))
        let average = totalGamesAttempts.attempts / FinishedGames.length
    
        
        const newObj = {
            userName: player.userName,
            bestGame: sortedGames[0].attempts,
            average: average,
            gameDif: "fem"
        }
    
        model.leaderBoardList.push(newObj)
     }
    }

    if( model.leaderDif == "syv"){ 
        let FinishedGames = player.game.filter(game => game.finished == true && game.gameDif == "syv")
        let sortedGames = FinishedGames.sort(compareAttempts);
        if(sortedGames.length>0){
            
        let totalGamesAttempts = FinishedGames.reduce((a, b) => ({ attempts: a.attempts + b.attempts }))
        let average = totalGamesAttempts.attempts / FinishedGames.length
    
        
        const newObj = {
            userName: player.userName,
            bestGame: sortedGames[0].attempts,
            average: average,
            gameDif: "syv"
        }
    
        model.leaderBoardList.push(newObj) }

        }
        

        if( model.leaderDif == "ni"){ 
            let FinishedGames = player.game.filter(game => game.finished == true && game.gameDif == "ni")
            let sortedGames = FinishedGames.sort(compareAttempts);
            if(sortedGames.length>0){
               
            let totalGamesAttempts = FinishedGames.reduce((a, b) => ({ attempts: a.attempts + b.attempts }))
            let average = totalGamesAttempts.attempts / FinishedGames.length
        
            
            const newObj = {
                userName: player.userName,
                bestGame: sortedGames[0].attempts,
                average: average,
                gameDif: "ni"
            }
        
            model.leaderBoardList.push(newObj)

            }
             }
}





function compareBestGame(a, b) {
    return a.bestGame - b.bestGame;
}

function compareBestAverage(a, b) {
    return a.average - b.average;
}
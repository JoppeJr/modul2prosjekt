function averageAttempts() {
    let thisPlayer = model.playerList.find(player => player.userName == model.currentUser)
    let FinishedGames = thisPlayer.game.filter(game => game.finished == true)

    if (model.resultDif == "fem") {
        let gameDificulty = FinishedGames.filter(value => value.gameDif == "fem")
        if (gameDificulty.length > 0) {
            let totalAttempts = gameDificulty.reduce((a, b) => ({ attempts: a.attempts + b.attempts }));

            let fullNumber = Math.round(totalAttempts.attempts / gameDificulty.length)
            return Math.round(fullNumber)
        }

    }
    if (model.resultDif == "syv") {
        let gameDificulty = FinishedGames.filter(value => value.gameDif == "syv")

        if (gameDificulty.length > 0) {
            let totalAttempts = gameDificulty.reduce((a, b) => ({ attempts: a.attempts + b.attempts }));

            let fullNumber = totalAttempts.attempts / gameDificulty.length
            return fullNumber
        }

    }
    if (model.resultDif == "ni") {
        let gameDificulty = FinishedGames.filter(value => value.gameDif == "ni")

        if (gameDificulty.length > 0) {
            let totalAttempts = gameDificulty.reduce((a, b) => ({ attempts: a.attempts + b.attempts }));

            let fullNumber = Math.round(totalAttempts.attempts / gameDificulty.length)
            return Math.round(fullNumber)
        }

    }



}

function compareAttempts(a, b) {
    return a.attempts - b.attempts;
}
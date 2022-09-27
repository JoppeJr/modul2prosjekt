function logOut() {
    model.currentPage = 'login';
    model.currentUser = '';
    model.userIndex = 0;
    model.currentGameIndex = 0;
    model.guessedWordList.length = 0;
    updateView();

}

async function checkJson() {
    let response = await fetch('https://ord.uib.no/bm/fil/lemma.json')
        .then((response) => response.json())
        .then((json) => model.randomWordArray.push(json));

    console.log(model.randomWordArray)


    getRightFromJson();
    updateView();
}

function getRightFromJson() {

    let jsonArray = model.randomWordArray[0];


    for (i = 0; i < jsonArray.length; i++) {

        model.jsonWords.push(jsonArray[i][0])


    }





}
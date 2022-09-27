const model = {


    currentPage: 'login', // createUser, resultPage, leaderBoard, game

    currentUser: "",
    userIndex: null, // satt for testing vanligvis null

    currentGameIndex: null, // satt for testing vanligvis null

    randomWord: "",
    color: ["red", "green", "#00FFFF80", "yellow", "purple", "orange", "blue", "pink", "lightgreen"],

    filterby: "",

    leaderDif: "",
    resultDif: "",
    leaderBoardDif: "",


    theNewArray: [],


    thisPlayer: "",


    player: {
        userName: '',
        age: 0,
        password: '',
        repeatPassword: '',
    },

    guessedWord: {
        word: '',
        points: 0
    },

    difficulty: "",





    guessedWordList: [

    ],


    randomWordArray: [],


    jsonWords: [],

    FinishedGames: [],

    leaderBoardList: [

    ],

    wordsList5Letters: "",
    html: ""

}
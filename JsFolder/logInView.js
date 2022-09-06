function updateViewLogin() {

    document.getElementById('app').innerHTML = `
    <h1>ORDDUELL</h1>
    Brukernavn: <input type="text" oninput="model.player.userName = this.value"><br>
    Passord: <input type="password" oninput="model.player.password = this.value">
    <br>
    <button onclick="logIn()">Logg inn</button>
    <button onclick="updateViewCreate()">Create User</button>
    `
}




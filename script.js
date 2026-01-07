function beforeAfter(to, from) {
    document.getElementById(from).classList.remove('active')
    document.getElementById(to).classList.add('active')
}

function toMenu(event) {
    let name = document.getElementById('name').value
    if (!name) return alert('Please Enter your name!')
    event.preventDefault();
    beforeAfter('menuscreen', 'namescreen')
}

function startGame(event) {
    
    event.preventDefault();
    beforeAfter('gamescreen', 'menuscreen')
}
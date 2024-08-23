
var map = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,0,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2,2],
    [2,2,1,2,2,2,2,1,2,2,2,2,1,2,1,2,2,2,1,2,1,1,2,1,2,2,2,1,1,2,1,2,2,1,2,2],
    [2,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,1,2,1,1,2,1,2,2],
    [2,2,1,1,1,2,2,2,2,2,1,1,1,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,1,2,1,2,2],
    [2,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,2,1,2,2,1,2,2,2,1,1,2,1,2,2],
    [2,2,1,2,2,2,2,1,2,2,2,2,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,1,1,2,2,2,2,2],
    [2,2,1,1,1,1,2,1,2,1,1,1,1,2,1,2,1,2,1,2,2,2,1,2,1,1,1,2,1,2,1,1,2,1,2,2],
    [2,2,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,1,1,1,1,2,2,2,1,2,1,2,2,2,2,1,2,2],
    [2,2,1,2,2,1,2,1,2,1,2,2,1,2,1,1,1,2,1,2,2,2,1,1,1,2,1,2,1,1,1,1,1,1,2,2],
    [2,2,1,2,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,2,1,2,2,2,2,1,2,2],
    [-3,0,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,0,3],
    [2,2,1,2,1,2,2,2,2,1,2,1,2,2,2,2,1,2,2,2,1,2,1,2,1,2,1,2,2,2,1,2,2,2,2,2],
    [2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,2],
    [2,2,1,2,1,2,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,2,1,2,2,2,2,1,2,2],
    [2,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,2,2],
    [2,2,1,2,2,2,2,1,2,2,2,2,1,2,1,2,1,2,1,2,2,2,1,2,1,1,1,2,1,2,1,1,2,2,2,2],
    [2,2,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,1,1,1,1,2,2,2,1,2,1,2,2,2,2,1,2,2],
    [2,2,1,2,2,1,2,1,2,1,2,2,1,2,1,1,1,2,1,2,2,2,1,1,1,1,1,2,1,1,1,1,1,1,2,2],
    [2,2,1,2,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,2,1,2,2,2,2,1,2,2],
    [2,2,1,2,1,2,2,2,2,1,2,1,2,2,2,2,1,2,2,2,1,2,1,2,1,2,1,2,2,2,1,1,2,1,2,2],
    [2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 2,
    y: 2
}

var ghost = {
    x: 20,
    y: 11
}

var score = {
    current: 0,
    highest:0
}


let m = document.getElementById('map')
let s = document.getElementById('score')

function displayMap() {
    var output = ''

    for(let i=0; i<map.length; i++){
        output += "\n<div class='row'>\n"
        for(let j=0; j<map[i].length; j++){
            let className;
            switch(map[i][j]){
                case 2:
                    className = "brick"
                    break;
                case 1:
                    className = "coin"
                    break;
                case 0:
                case 3:
                case -3:
                    className = "empty"
                    break;
            }
            output += `\n\t<div class=${className}></div>`
        }
        output += "\n</div>"
    }
    m.innerHTML = output
}

const offSetX = 519
const offSetY = 250

function displayPacman() {
    document.getElementById('pac-man').style.top = (pacman.y * 24 + offSetY) + "px";
    document.getElementById('pac-man').style.left = (pacman.x * 24 + offSetX) + "px";
    console.log(pacman)
}

function displayGhost() {
    document.getElementById('ghost').style.top = (ghost.y * 24 + offSetY) + "px";
    document.getElementById('ghost').style.left = (ghost.x * 24 + offSetX ) + "px";
    console.log(ghost)
}

displayMap()
displayPacman()
displayGhost()

function displayScore() {
    s.innerHTML = score.current
}

document.onkeydown = function(e) {

    if(e.key === "ArrowRight" && map[pacman.y][pacman.x + 1] != 2){
        document.getElementById('pac-man').style.transform = 'scaleX(1)'
        pacman.x++
    } else if(e.key === "ArrowDown" && map[pacman.y + 1][pacman.x] != 2){
        pacman.y++
    } else if(e.key === "ArrowLeft" && map[pacman.y][pacman.x - 1] != 2){
        document.getElementById('pac-man').style.transform = 'scaleX(-1)'
        pacman.x--
    } else if(e.key === "ArrowUp" && map[pacman.y - 1][pacman.x] != 2){
        pacman.y--
    }

    if(map[pacman.y][pacman.x] === 1){
        map[pacman.y][pacman.x] = 0
        score.current += 10

        displayScore()
        displayMap()
    }

    if(map[pacman.y][pacman.x] === 3){
        pacman.y = 12
        pacman.x = 1
    } else if (map[pacman.y][pacman.x] === -3){
        pacman.y = 12
        pacman.x = 34
    }

    displayPacman()
}

let prevRand = null

function ghostmovement() {
    
    let directions = ["right", "left", "up", "down"];
    let rand = Math.floor(Math.random() * directions.length);

    let newX = ghost.x;
    let newY = ghost.y;
    
    
    if (directions[rand] === "right" && map[ghost.y][ghost.x + 1] != 2) {
        newX++;
    } else if (directions[rand] === "left" && map[ghost.y][ghost.x - 1] != 2) {
        newX--;
    } else if (directions[rand] === "down" && map[ghost.y + 1][ghost.x] != 2) {
        newY++;
    } else if (directions[rand] === "up" && map[ghost.y - 1][ghost.x] != 2) {
        newY--;
    }

    let dist = Math.sqrt((ghost.x - pacman.x)**2 + (ghost.y - pacman.y)**2)
    console.log(Math.round(dist))

    if(ghost.x + ghost.y === pacman.x + pacman.y){
        
        if(score.highest < score.current){
            score.highest = score.current
        }

        newX = pacman.x
        newY = pacman.y

        document.onkeydown = function(e) {e.preventDefault()}

        m.innerHTML = `<div class="results"><span id="gameover"> Game Over </span><br>
                        <span id="cscore"> Score: ${score.current}\n </span><br>
                        <span id="hscore"> Highest Score: ${score.highest}</span></div>
                        <button id="restart" onclick="restart()">Restart</button>`
    }

    ghost.x = newX;
    ghost.y = newY;

    prevRand = directions[rand]
    
    displayGhost();
}

setInterval(ghostmovement, 150);

function restart() {
    location.reload()
}
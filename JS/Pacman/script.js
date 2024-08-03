var map = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,2,2,2,1,2,1,2,2,2,1,2,1,1,2,1,2,2,2,1,1,2,1,2,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,1,2,1,1,2,1,2],
    [2,1,1,1,2,2,2,2,2,1,1,1,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,1,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,2,1,2,2,1,2,2,2,1,1,2,1,2],
    [2,1,2,2,2,2,1,2,2,2,2,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,2,1,2,2,2,2],
    [0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,1,1,2,1,1,0],
    [2,1,2,2,2,2,1,2,2,2,2,1,2,1,2,1,2,1,2,2,2,1,2,1,1,1,2,1,2,1,1,1,2,2],
    [2,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,1,1,2,2,2,1,2,1,2,2,2,2,2,2],
    [2,1,2,2,1,2,1,2,1,2,2,1,2,1,1,1,2,1,2,2,2,1,1,1,2,1,2,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,2,1,2,2,2,2,1,2],
    [2,1,2,1,2,2,2,2,1,2,1,2,2,2,2,1,2,2,2,1,2,1,2,1,2,1,2,2,2,1,1,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 1,
    y: 1
}

var score = {
    current: 0,
    last:0,
    highest:0
}

function displayMap(){
    var output = ''

    for(let i=0; i<map.length; i++){
        output += "\n<div class='row'>\n"
        for(let j=0; j<map[i].length; j++){
            if(map[i][j] == 2){
                output += "\n\t<div class='brick'></div>"
            } else if(map[i][j] == 1){
                output += "\n\t<div class='coin'></div>"
            }
            if(map[i][j] == 0){
                output += "\n\t<div class='empty'></div>"
            }
        }
        output += "\n</div>"
    }
    document.getElementById('map').innerHTML = output
}


function displayPacman(){
    document.getElementById('pac-man').style.top = pacman.y * 24 +"px";
    document.getElementById('pac-man').style.left = pacman.x * 24 +"px";
}

displayMap()
displayPacman()

document.onkeydown = function(e){

    if(e.key === "ArrowRight" && map[pacman.y][pacman.x + 1] != 2){
        pacman.x += 1
    } else if(e.key === "ArrowDown" && map[pacman.y + 1][pacman.x] != 2){
        pacman.y += 1
    } else if(e.key === "ArrowLeft" && map[pacman.y][pacman.x - 1] != 2){
        pacman.x -= 1
    } else if(e.key === "ArrowUp" && map[pacman.y - 1][pacman.x] != 2){
        pacman.y -= 1
    }

    if(map[pacman.y][pacman.x] === 1){
        map[pacman.y][pacman.x] = 0
        score.current += 10

        displayScore()
        displayMap()
    }

    displayPacman()
}

function displayScore(){
    document.getElementById('score').innerHTML = score.current
}
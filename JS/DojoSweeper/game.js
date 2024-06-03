var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");

function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, ${theDojo[i][j]}); this.innerText = ${theDojo[i][j]}"></button>`;
    }
  }
  return result;
}

function rand(elm) {
    for (var i = 0; i < elm.length; i++) {
      for (var j = 0; j < elm[i].length; j++) {
        elm[i][j] = Math.floor(Math.random() * 10);
      }
    }
    return elm;
  }

  function restart() {
    theDojo = rand(theDojo);
    dojoDiv.innerHTML = render(theDojo);
    console.table(theDojo);
  }

function howMany(i, j, element) {
  console.log({i, j}, element);
  if (element === 1) {
    alert(`${element} Ninja is hiding here!`)
    dojoDiv.innerHTML = `<button onclick="restart()">restart</button>`;
  } else if (element > 1) {
    alert(`${element} Ninjas are hiding here!`)
    dojoDiv.innerHTML = `<button onclick="restart()">restart</button>`;
  } else {
    alert(`No ninjas hiding here.`)
  }
}
    

var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
console.table(theDojo);
dojoDiv.innerHTML = render(theDojo);    


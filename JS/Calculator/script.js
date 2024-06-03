var op = document.getElementsByClassName("operator")
var num = document.getElementsByClassName("number")
var displayVal = document.getElementById("display")
var hasErr = false

function setOP(op){
    if(hasErr){
        displayVal.innerHTML = "0"
        hasErr = false
    }

    let lastValue = displayVal.innerHTML[displayVal.innerHTML.length - 1]

    switch(op){

        case "*":
        case "/": 
        case "+":
        case "-":
            if (lastValue !== "*" &&
                lastValue !== "/" &&
                lastValue !== "+" &&
                lastValue !== "-" &&
                lastValue !== "."
            ) {
                displayVal.innerHTML += op;
                }
            break
    }
}

function setNum(num){
    if(hasErr){
        displayVal.innerHTML = "0"
        hasErr = false
    }

    if(num === "." && displayVal.innerHTML.includes(".")){
        return
    }

    if(num !== "0"  && displayVal.innerHTML === "0"){
        displayVal.innerHTML = num
    } else {
        displayVal.innerHTML += num
    }

}

function clr(){
    displayVal.innerHTML = "0"
    hasErr = false
}

function calculate(){
    var result = eval(displayVal.innerHTML)

    if(result === Infinity || result === -Infinity){
        displayVal.innerHTML = `<p style="font-size:8px; color:red; padding-left:5px;">Err: Division by zero</p>`
        hasErr = true
    } else {
        displayVal.innerHTML = result
    }
}

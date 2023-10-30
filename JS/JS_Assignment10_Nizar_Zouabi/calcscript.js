let operatorButtons = document.querySelectorAll('.operator');
let displayInput = document.querySelector('#display');
let number = "";

function press(value) {
    number += value;
    displayInput.innerText = number;
}

function calc() {
    operatorButtons.forEach(opButton => {
        opButton.addEventListener('click', (e) => {
            let opKey = e.target.innerText;
            if (opKey === 'C') {
                displayInput.innerText = '';
                number = '';
            } else if (opKey === '=') {
                let result = new Function('return ' + number)();
                displayInput.innerText = result;
                number = result.toString();
            }
        });
    });
}

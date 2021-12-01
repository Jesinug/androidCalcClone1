const display = document.querySelector('.display-container');

const buttons = document.querySelectorAll('.btn');

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        // display.innerHTML = buttons.value
        alert(event.target.innerText);
        // alert(buttons[i].innerHTML)
    });
}

/*
const display = document.querySelector('.display-container');
buttonClicked.addEventListener('click', function() {
    display.innerText = input.value
    });
*/
/* FX
const isDisplayed = document.querySelector()

const addOp() => {};

const substractOp() => {};

const multiplyOp() => {};

const divideOp() => {};
*/
import addNumber from "./addNumber.js";
import addPoint from "./addPoint.js";
import finish from "./finish.js";
import addSymbol from "./addSymbol.js";
window.addEventListener('load', calculator);

function calculator() {
    let result1 = 0;
    const buttons = document.querySelectorAll('button');
    const result = document.getElementById('result');
    const divide = buttons[0];
    const clear = buttons[1];
    const back = buttons[2];
    const seven = buttons[3];
    const eight = buttons[4];
    const nine = buttons[5];
    const multiply = buttons[6];
    const four = buttons[7];
    const five = buttons[8];
    const six = buttons[9];
    const subtract = buttons[10];
    const one = buttons[11];
    const two = buttons[12];
    const three = buttons[13];
    const add = buttons[14];
    const zero = buttons[15];
    const point = buttons[16];
    const equal = buttons[17];
    clear.addEventListener('click', () => {
        result.innerText = 0;
    })
    back.addEventListener('click', () => {
        if (result.innerText == '0' || result.innerText.length == 1) {
            result.innerText = '0';
            return;
        }
        const length = result.innerText.length;
        result.innerText = result.innerText.substring(0, length - 1);
    });
    one.addEventListener('click', () => addNumber(1, result));
    two.addEventListener('click', () => addNumber(2, result));
    three.addEventListener('click', () => addNumber(3, result));
    four.addEventListener('click', () => addNumber(4, result));
    five.addEventListener('click', () => addNumber(5, result));
    six.addEventListener('click', () => addNumber(6, result));
    seven.addEventListener('click', () => addNumber(7, result));
    eight.addEventListener('click', () => addNumber(8, result));
    nine.addEventListener('click', () => addNumber(9, result));
    zero.addEventListener('click', () => addNumber(0, result));
    multiply.addEventListener('click', () => addSymbol('x', result));
    divide.addEventListener('click', () => addSymbol('/', result));
    add.addEventListener('click', () => addSymbol('+', result));
    subtract.addEventListener('click', () => addSymbol('-', result));
    point.addEventListener('click', () => addPoint(result.innerText, result));
    equal.addEventListener('click', () => finish(result.innerText, result));
}



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
        const padding = Number(result.style.paddingLeft.substring(0, 3)) - 10;
        console.log(result.style.paddingLeft)
        result.style.paddingLeft = padding + 'px';
    });
    one.addEventListener('click', () => addNumber(1));
    two.addEventListener('click', () => addNumber(2));
    three.addEventListener('click', () => addNumber(3));
    four.addEventListener('click', () => addNumber(4));
    five.addEventListener('click', () => addNumber(5));
    six.addEventListener('click', () => addNumber(6));
    seven.addEventListener('click', () => addNumber(7));
    eight.addEventListener('click', () => addNumber(8));
    nine.addEventListener('click', () => addNumber(9));
    zero.addEventListener('click', () => addNumber(0));
    multiply.addEventListener('click', () => addSymbol('x'));
    divide.addEventListener('click', () => addSymbol('/'));
    add.addEventListener('click', () => addSymbol('+'));
    subtract.addEventListener('click', () => addSymbol('-'));
    point.addEventListener('click', () => addSymbol(','));
    equal.addEventListener('click', () => finish(result.innerText));

    function finish(text) {

        const array = text.split('');
        if (array.includes('x')) {
            const index = array.indexOf('x');
            const firstNumber = Number(array.slice(0,index).join(''));
            const secondNumber = Number(array.slice(index+1).join(''));
             result1 = firstNumber*secondNumber;
        }
        if (array.includes('/')) {
            const index = array.indexOf('/');
            const firstNumber = Number(array.slice(0,index).join(''));
            const secondNumber = Number(array.slice(index+1).join(''));
             result1 = firstNumber/secondNumber;
        }
        if (array.includes('+')) {
            const index = array.indexOf('+');
        
            const firstNumber = Number(array.slice(0,index).join(''));
            console.log(firstNumber)
            const secondNumber = Number(array.slice(index).join(''));
          
             result1 = firstNumber+secondNumber;
        }
        if (array.includes('-')) {
            const index = array.indexOf('-');
            const firstNumber = Number(array.slice(0,index).join(''));
            const secondNumber = Number(array.slice(index+1).join(''));
             result1 = firstNumber-secondNumber;
        }
      
        return result.innerText = result1;
    }

    function addSymbol(symbol) {
        const length = result.innerText.length;
        if (result.innerText == '0' && symbol !== ',') {
            result.innerText = number;
            return;
        }
        if (length == 11) {
            return;
        }
        if (result.innerText.includes('x') ||
            result.innerText.includes('/') ||
            result.innerText.includes('+') ||
            result.innerText.includes('-') ||
            result.innerText.includes(',') ||
            result.innerText.includes('=')) {

            if (result.innerText[length - 1] == 'x' ||
                result.innerText[length - 1] == '/' ||
                result.innerText[length - 1] == '+' ||
                result.innerText[length - 1] == '-' ||
                result.innerText[length - 1] == ',' ||
                result.innerText[length - 1] == '=') {
                result.innerText = result.innerText.substring(0, length - 1);
            }
            if (result.innerText.includes('x') ||
                result.innerText.includes('/') ||
                result.innerText.includes('+') ||
                result.innerText.includes('-') ||
                result.innerText.includes(',') ||
                result.innerText.includes('=')) {
                return;
            }

            result.innerText += symbol;


            return;
        }
        result.innerText += symbol;
    }
}


function addNumber(number) {

    if (result.innerText == '0') {
        result.innerText = number;
        return;
    }
    if (result.innerText.length == 10) {
        return;
    }
    result.innerText += number;
}



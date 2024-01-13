export default function finish(text, result) {
        
    const array = text.split('');
    let result1 = 0;
    if (array.includes('x')) {
        const index = array.indexOf('x');
        const firstNumber = Number(array.slice(0, index).join(''));
        const secondNumber = Number(array.slice(index + 1).join(''));
        result1 = firstNumber * secondNumber;
    }
    if (array.includes('/')) {
        const index = array.indexOf('/');
        const firstNumber = Number(array.slice(0, index).join(''));
        const secondNumber = Number(array.slice(index + 1).join(''));
        result1 = firstNumber / secondNumber;
    }
    if (array.includes('+')) {
        const index = array.indexOf('+');

        const firstNumber = Number(array.slice(0, index).join(''));
        const secondNumber = Number(array.slice(index).join(''));
        result1 = firstNumber + secondNumber;
    }
    if (array.includes('-')) {
        const index = array.indexOf('-');
        const firstNumber = Number(array.slice(0, index).join(''));
        const secondNumber = Number(array.slice(index + 1).join(''));
        result1 = firstNumber - secondNumber;
    }


    result.innerText = result1;
    if (result.innerText.length > 10) {
        result.innerText = result.innerText.substring(0, 10);
    }
   
}
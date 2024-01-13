export default function addNumber(number, result) {
    const isSymbolInText = result.innerText.includes('x') || result.innerText.includes('/') || result.innerText.includes('+') || result.innerText.includes('-');
    if (result.innerText == '0') {
        result.innerText = number;
        return;
    }
    if(isSymbolInText && result.innerText.length >=10){
        return;
    }
     if (!isSymbolInText && result.innerText.length >= 7) {
        return;
    }
    result.innerText += number;
}
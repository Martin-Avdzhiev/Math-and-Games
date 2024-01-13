export default function addSymbol(symbol, result) {
    const length = result.innerText.length;
    if (symbol == ',') {
        return;
    }
    if (length == 11) {
        return;
    }
    if (result.innerText.includes('x') ||
        result.innerText.includes('/') ||
        result.innerText.includes('+') ||
        result.innerText.includes('-') ||
        result.innerText[length - 1] == '.'||
        result.innerText.includes('=')) {

        if (result.innerText[length - 1] == 'x' ||
            result.innerText[length - 1] == '/' ||
            result.innerText[length - 1] == '+' ||
            result.innerText[length - 1] == '-' ||
            result.innerText[length - 1] == '.') {
            result.innerText = result.innerText.substring(0, length - 1);
        }
        if (result.innerText.includes('x') ||
            result.innerText.includes('/') ||
            result.innerText.includes('+') ||
            result.innerText.includes('-')) {
            return;
        }
        if (result.innerText[length - 1] == '.') {
            return;
        }

        result.innerText += symbol;

        return;
    }
    if (result.innerText[length - 1] == '.') {
        return;
    }
    result.innerText += symbol;
}
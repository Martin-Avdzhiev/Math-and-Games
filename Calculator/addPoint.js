export default function addPoint(text, result) {
    const array = text.split('');
    const length = array.length;
    if(!array.includes('*') && !array.includes('/') && !array.includes('+') && !array.includes('-') && !array.includes('.')){
        result.innerText += '.';
        return;
    }
    else if (array[length - 1] == 'x' ||
            array[length - 1] == '/' ||
            array[length - 1] == '+' ||
            array[length - 1] == '-' ||
            array[length - 1] == '.') {
            result.innerText = result.innerText.substring(0, length - 1);
            result.innerText += '.';
           return;
        }
    else {
        let dots = 0;
        for (const letter of array){
            if (letter === '.'){
                dots++;
            }
        }
        if(dots == 2){
            return;
        }
        result.innerText += '.';
        return;
    }
   
    
}
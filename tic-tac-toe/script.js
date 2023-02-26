const firstDiv = document.querySelector('.firstRow').querySelector('.first');
const secondDiv = document.querySelector('.firstRow').querySelector('.second');
const thirdDiv = document.querySelector('.firstRow').querySelector('.third');
const fourthDiv = document.querySelector('.secondRow').querySelector('.first');
const fifthDiv = document.querySelector('.secondRow').querySelector('.second');
const sixthDiv = document.querySelector('.secondRow').querySelector('.third');
const seventhDiv = document.querySelector('.thirdRow').querySelector('.first');
const eigthDiv = document.querySelector('.thirdRow').querySelector('.second');
const ninethDiv = document.querySelector('.thirdRow').querySelector('.third');
const x = 'x';
const o = 'o';
const array = [];
let isWin = false;
array.push(firstDiv);
array.push(secondDiv);
array.push(thirdDiv);
array.push(fourthDiv);
array.push(fifthDiv);
array.push(sixthDiv);
array.push(seventhDiv);
array.push(eigthDiv);
array.push(ninethDiv);
let index = 0;
for (const div of array) {
    div.addEventListener('click', add);
}
function add(e) {
    let type = '';

    if (isWin) {
        return;
    }
    if (index > 8) {
        return;
    }
    if (e.target.innerText) {
        return;
    }

    if (index % 2 == 0) {
        type = 'X';
    }
    else {
        type = 'O';
    }
    e.target.innerText = type;

    if (firstDiv.innerText != '') {
        const text = firstDiv.innerText;
        if (text == secondDiv.innerText && text == thirdDiv.innerText) {
            isWin = true;
            //firstDiv.style.textDecoration = 'line-through';
            firstDiv.classList.add('center-line');
        }
        if (text == fourthDiv.innerText && text == seventhDiv.innerText) {
            isWin = true;
        }
        if (text == fifthDiv.innerText && text == ninethDiv.innerText) {
            isWin = true;
        }
    }
    if (secondDiv.innerText != '') {
        const text = secondDiv.innerText;
        if (text == fifthDiv.innerText && text == eigthDiv.innerText) {
            isWin = true;
        }
    }
    if (thirdDiv.innerText != '') {
        const text = thirdDiv.innerText;
        if (text == sixthDiv.innerText && text == ninethDiv.innerText) {
            isWin = true;
        }
        if (text == fifthDiv.innerText && text == seventhDiv.innerText) {
            isWin = true;
        }

    }
    if (fourthDiv.innerText != '') {
        const text = fourthDiv.innerText;
        if (text == sixthDiv.innerText && text == fifthDiv.innerText) {
            isWin = true;
        }
    }
    if (seventhDiv.innerText != '') {
        const text = seventhDiv.innerText;
        if (text == eigthDiv.innerText && text == ninethDiv.innerText) {
            isWin = true;
        }
    }
    index++;

}

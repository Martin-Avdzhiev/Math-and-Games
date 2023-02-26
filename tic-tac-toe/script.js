const firstDiv = document.querySelector('.firstRow').querySelector('.first');
const secondDiv = document.querySelector('.firstRow').querySelector('.second');
const thirdDiv = document.querySelector('.firstRow').querySelector('.third');
const fourthDiv = document.querySelector('.secondRow').querySelector('.first');
const fifthDiv = document.querySelector('.secondRow').querySelector('.second');
const sixthDiv = document.querySelector('.secondRow').querySelector('.third');
const seventhDiv = document.querySelector('.thirdRow').querySelector('.first');
const eigthDiv = document.querySelector('.thirdRow').querySelector('.second');
const ninethDiv = document.querySelector('.thirdRow').querySelector('.third');
const title = document.querySelector('.title');
const restart = document.querySelector('button');
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
            firstDiv.classList.add('win');
            secondDiv.classList.add('win');
            thirdDiv.classList.add('win');
        }
        if (text == fourthDiv.innerText && text == seventhDiv.innerText) {
            isWin = true;
            firstDiv.classList.add('win');
            fourthDiv.classList.add('win');
            seventhDiv.classList.add('win');
        }
        if (text == fifthDiv.innerText && text == ninethDiv.innerText) {
            isWin = true;
            firstDiv.classList.add('win');
            fifthDiv.classList.add('win');
            ninethDiv.classList.add('win');
        }
    }

    if (secondDiv.innerText != '') {
        const text = secondDiv.innerText;
        if (text == fifthDiv.innerText && text == eigthDiv.innerText) {
            isWin = true;
            fifthDiv.classList.add('win');
            secondDiv.classList.add('win');
            eigthDiv.classList.add('win');
        }
    }
    if (thirdDiv.innerText != '') {
        const text = thirdDiv.innerText;
        if (text == sixthDiv.innerText && text == ninethDiv.innerText) {
            isWin = true;
            sixthDiv.classList.add('win');
            thirdDiv.classList.add('win');
            ninethDiv.classList.add('win');
        }
        if (text == fifthDiv.innerText && text == seventhDiv.innerText) {
            isWin = true;
            fifthDiv.classList.add('win');
            seventhDiv.classList.add('win');
            thirdDiv.classList.add('win');
        }

    }
    if (fourthDiv.innerText != '') {
        const text = fourthDiv.innerText;
        if (text == sixthDiv.innerText && text == fifthDiv.innerText) {
            isWin = true;
            fourthDiv.classList.add('win');
            sixthDiv.classList.add('win');
            fifthDiv.classList.add('win');
        }
    }
    if (seventhDiv.innerText != '') {
        const text = seventhDiv.innerText;
        if (text == eigthDiv.innerText && text == ninethDiv.innerText) {
            isWin = true;
            seventhDiv.classList.add('win');
            eigthDiv.classList.add('win');
            ninethDiv.classList.add('win');
        }
    }
    if (isWin){
        title.innerText = 'The Winner is ' + type;
            title.style.width = '800px';
    }

    index++;
    if (index > 8) {
        title.innerText = 'DRAW';
    }

}


restart.addEventListener('click',()=>{
    index = 0;
    isWin = false;
    const divs = Array.from(document.querySelectorAll('div'));
    divs.splice(0,3);
    divs.splice(3,1);
    divs.splice(6,1);

    for (const div of divs){
        if(div.classList.length>1){
            div.classList.remove('win');
        }
        title.innerText = 'Tic Tac Toe';
        title.style.width = '575px';
        div.innerText = '';
    }
})
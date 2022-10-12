const container = document.getElementById('container');
const submit = document.getElementById('submit');
const inp = document.getElementById('inp');

let arr = [];
let cell;

submit.addEventListener('click', start);
function start() {
    let num = inp.value;
    if(num > 16 || num < 1) {
        alert('Enter a number 1-16');
        return;
    }
    submit.style.display = 'none';
    inp.style.display = 'none';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    num = num * num;
    for(let i = 0; i < num; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        arr.push(cell);
        container.appendChild(cell);
    }
    addColor();
}

function addColor() {
    arr.sort(() => 0.5 - Math.random());
    for(let i = 0; i < arr.length; i++) {
        let color = generateRandomColor();
        arr[i].style.backgroundColor = color;
    }
}

function generateRandomColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
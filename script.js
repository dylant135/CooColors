const container = document.getElementById('container');
const submit = document.getElementById('submit');
const inp = document.getElementById('inp');

submit.addEventListener('click', start);
function start() {
    let num = inp.value;
    submit.style.display = 'none';
    inp.style.display = 'none';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    num = num * num;
    for(let i = 0; i < num; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}
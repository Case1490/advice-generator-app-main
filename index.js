const titulo = document.querySelector('.title');
const parrafo = document.querySelector('.paragraph');
const botonV = document.querySelector('.boton');

document.addEventListener('DOMContentLoaded', fetchData);

botonV.addEventListener('click', fetchData);

async function fetchData() {
    const url = 'https://api.adviceslip.com/advice';

    await fetch(url)
        .then(result => result.json())
        .then(respt => mostrarHTML(respt.slip))
}

function mostrarHTML(arreglo){
    const { id, advice } = arreglo;

    titulo.textContent = `ADVICE #${id}`;

    parrafo.textContent = `"${advice}"`
}
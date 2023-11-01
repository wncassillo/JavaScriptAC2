//Ex 04
// Tabuada com inputs na pagina

const numeroTabuada = document.querySelector('input'); //obtem o input
const htmlMostrador = document.querySelector('#mostrador') //objeto do mostrador

const atualizarInput = ({ target }) => {
        mostrarTabuada(target.value)
};

numeroTabuada.addEventListener('input', atualizarInput);

const mostrarTabuada = (numerando) => {
    htmlMostrador.innerHTML ="";// limpa a div
    for (let i = 1; i <= 10; i++) {
        htmlMostrador.innerHTML += `<p>${numerando} x ${i} = ${numerando * i}</p>`
    }
}

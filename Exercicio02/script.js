//Ex 02
//Loop 10 a 100 "na tela"

const htmlMostrador = document.querySelector('#mostrador')
htmlMostrador.innerHTML = '';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} //função pra gerar um delay

const alterarMostrador = (numero) => {
    htmlMostrador.innerHTML = `<h2> ${numero} </h2>`;
}

async function loop() {
    for (let i = 10; i <= 100; i++) {
        alterarMostrador(i); //"na tela" como no html
        console.log(i); //"na tela" como no console
        await sleep(50);
    }
}

loop();
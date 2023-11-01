//Ex 03
// Variavel com valor fixo de 5
// Mostre a tabuada

const numeroTabuada = 5;
const htmlMostrador = document.querySelector('#mostrador')

htmlMostrador.innerHTML ="";

for (let i = 1; i <= 10; i++) {
    htmlMostrador.innerHTML += `<p>${numeroTabuada} x ${i} = ${numeroTabuada * i}</p>`
}
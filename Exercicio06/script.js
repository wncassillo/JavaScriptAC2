//Ex 06
// Exiba somente os valores pares de uma array

const arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
const htmlMostrador = document.querySelector('#mostrador'); //objeto do mostrador
const botao = document.getElementById('botao'); //obtem o botao

const extrairPares = (array) => {
    const arrayPares = [];
    for (const n of array){
        if (n % 2 == 0){
            arrayPares.push(n);
        }
    }
    mostrarResultado(arrayPares)
}

botao.addEventListener('click', function() {
    extrairPares(arrayNumeros);
});

const mostrarResultado = (resultado) => {
    htmlMostrador.innerHTML = ""
    htmlMostrador.innerHTML += 
        `<h2>Os números pares na array são: </h2>
        <h2>${resultado.join(',')}</h2>`
}

//Ex 05
// Calculadora com dois campos numericos e opção de operação matematica

const numeros = document.querySelectorAll('input'); //obtem os inputs
const select = document.querySelector('select'); //operação mat
const htmlMostrador = document.querySelector('#mostrador') //objeto do mostrador
const botao = document.getElementById('calcular'); //obtem o botao

const calcular = () => {
    const numero1 = numeros[0].value;
    const numero2 = numeros[1].value;
    const operacao = select.value;
        //'Vazio' está sendo considerado como zero.
    if (numero1 == 0 && numero2 ==0) {
        alert("Informe ao menos um número para prosseguir.")
    } else if (operacao == '+') {
        const resultado = numero1 + numero2
        mostrarResultado(resultado);
    }else if (operacao == '-') {
        const resultado = numero1 - numero2
        mostrarResultado(resultado);
    }else if (operacao == '*') {
        const resultado = numero1 * numero2
        mostrarResultado(resultado);
    }else if (operacao == '/') {
        if (numero2 == '0' || numero2 == '') {
            alert("Impossivel dividir por zero.")
        } else {
        const resultado = numero1 / numero2
        mostrarResultado(resultado);
        }
    }
 };

botao.addEventListener('click', function() {
    calcular();
});

const mostrarResultado = (resultado) => {
    htmlMostrador.innerHTML = ""
    htmlMostrador.innerHTML += `<h2>Resultado: ${resultado}</h2>`
}

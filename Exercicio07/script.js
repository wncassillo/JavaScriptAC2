//Ex 07
// Calculadora preço de carro
// Preço de Fábrica + % distribuidor + % de imposto

const custos = document.querySelectorAll('input'); //obtem os inputs
const htmlMostrador = document.querySelector('#mostrador') //objeto do mostrador
const botao = document.getElementById('btncalcular'); //obtem o botao

const calcular = () => {
    const custoFabrica = custos[0].value;
    const percDistribuidor = custos[1].value;
    const percImposto = custos[2].value;
        //'Vazio' está sendo considerado como zero.
    if (custoFabrica == "" || percDistribuidor == "" || percImposto == "") {
        alert("Todos os dados devem ser informados para prosseguir para prosseguir.")
    } else {
        let valorFinal = (custoFabrica * percImposto) / 100 +
        (custoFabrica * percDistribuidor) /100 ;
        valorFinal = (+valorFinal + +custoFabrica);

        mostrarResultado(valorFinal);
    }
 };

botao.addEventListener('click', function() {
    calcular();
});

const mostrarResultado = (exibir) => {
    htmlMostrador.innerHTML = ""
    htmlMostrador.innerHTML += `<h2>O preço final é: R$${exibir}</h2>`
}

// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')

    console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    const altura = Number(prompt("Digite aqui a altura de um retângulo."));
    const largura = Number(prompt("Digite aqui a largura de um retângulo."));

    console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui
    const anoAtual = Number(prompt("Em que ano estamos?"));
    const nascimento = Number(prompt("Em que ano você nasceu?"));

    console.log(anoAtual - nascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, metros) {
    // implemente sua lógica aqui
    const imc = peso / (metros * metros)

    return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome = prompt("Qual seu nome?");
    const idade = prompt("Qual sua idade?");
    const email = prompt("Qual seu e-mail?");

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
    const cor1 = prompt("digite o nome de uma cor que você gosta.");
    const cor2 = prompt("digite o nome de outra cor que você gosta.");
    const cor3 = prompt("digite o nome de outra cor que você gosta.");

    console.log([cor1, cor2, cor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
    const texto = string.toUpperCase()
    return texto
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
    const ingressosParaVender = custo / valorIngresso
    return ingressosParaVender
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui
    const mesmoTamanho = string1 >= string2
    return mesmoTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
    const lista = [1, 2, 3, 4, 5]
    return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
    const removerUltimo = array.pop()
    array.push(array[0])
    array.splice(0, 1)
    array.unshift(removerUltimo)
    return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
    const checar1 = string1.toLowerCase()
    const checar2 = string2.toLowerCase()

    return checar1 === checar2
}
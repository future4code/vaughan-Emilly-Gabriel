// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


/*
1)

A- Vai ser impresso no comnsole:
10
50



B- Não irá imprimir os valores sem o console.log()

*/



/*
2)

A- Essa função vai colocar o texto em letra minúscula,
e procurar a palavra "cenoura" (retornando true or false)
à partir do textoDoUsuario. Após feito as funções, será 
impresso no console.



B - eu gosto de cenoura
    true

    cenoura é bom pra vista
    true

    cenouras crescem na terra
    true

*/






// EXERCÍCIOS ESCRITAS DE CÓDIGO

//1 - A

function euMesma() {
    const frase = "Eu sou a Emilly, tenho 19 anos, moro em Mongaguá e sou estudante de programação"
    return euMesma(frase)
}
console.log(euMesma)



//1 - B

const parametroPessoa = (nome, idade, cidade, profissao) => {

    console.log(`Eu sou a ${nome}, tenho ${idade} anos, moro em 
    ${cidade} e sou ${profissao}.`);
}
parametroPessoa("Juliana", 20, "Santos", "estudante");
parametroPessoa("Flávio", 20, "Muriaé", "professor");



//2 - A

const somar = (primeiroNumero, segundoNumero) => {
    const soma = Number(primeiroNumero + segundoNumero)

    console.log(soma)
}
somar(20, 30)
somar(50, 70)




//2 - B

const numeros = (quinze, dez) => {
    const maiorOuIgual = quinze >= dez

    console.log(maiorOuIgual)
}
numeros(15, 10)
numeros(25, 25)
numeros(80, 100)



//2 - C

const parOuNao = numero1 => {
    const resto = numero1 % 2

    console.log(resto === 0)
}

parOuNao(16)
parOuNao(21)


//2 - D

const mensagem = texto => {

    console.log(texto.toUpperCase())
}

mensagem(`Eu sou sou muito feliz!`)



/* 3. Crie uma função para cada uma das operações básicas 
(soma, subtração, multiplicação e divisão). Em seguida, peça para o 
usuário inserir dois números e **chame** essas 4 funções com esses valores
 inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
*/
const usuario1 = Number(prompt("Insira um número"))
const usuario2 = Number(prompt("Insira outro número"))

const soma = (usuario1, usuario2) => usuario1 + usuario2
const subtrair = (usuario1, usuario2) => usuario1 - usuario2
const multiplicar = (usuario1, usuario2) => usuario1 * usuario2
const dividir = (usuario1, usuario2) => usuario1 / usuario2


const adicao = soma (usuario1, usuario2)

console.log(`soma: ${adicao}`)

const subtração = subtrair (usuario1, usuario2)

console.log(`subtraia: ${subtração}`)

const multiplicacao = multiplicar (usuario1, usuario2)

console.log(`Multiplique: ${multiplicacao}`)

const divisao = dividir (usuario1, usuario2)

console.log(`divida: ${divisao}`)

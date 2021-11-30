
// Exercícios de interpretação
// 1

// a- false
// b- false
// c- true
// d- boolean 



// 2 

/* Digitei os valores 5 e 4, logo será impresso 54 ao invés de somar. Isso se dá porque são Strings, 
é necessário transformar os Strings em Numbers para efetuar a soma*/


// 3

/*ficaria assim para rodar:
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(Number(soma))*/


// Exercícios escrita de código

//1

const idadeUsuario = Number(prompt("Qual sua idade, usuário?"));
const idadeAmigo = Number(prompt("Qual a idade de seu amigo?"));
const comparacao1 = idadeUsuario >= idadeAmigo;

console.log("Sua idade é maior do que a do seu amigo?", comparacao1)


//2

const restoDaDivisão = Number(prompt("Digite um nº par!"))

console.log(Number(restoDaDivisão % 2))
// Há um padrão quando inserido números pares, todos os resultados são 0
// Quando inserido um número ímpar, o resultado é sempre 1


//3

const idadeEmAnos = Number(prompt("Qual sua idade em anos?"))

console.log(Number(idadeEmAnos * 48)) // meses (48 é a quantidade de semanas no ano)

console.log(Number(idadeEmAnos * 365)) // dias (365 é a quantidade de dias no ano)

console.log(Number(idadeEmAnos * 8760)) // horas (8760 é a quantidade de horas no ano)


//4

const numero1 = Number(prompt("Insira um número!"));
const numero2 = Number(prompt("Insira outro número!"));

const comparacao2 = numero1 > numero2;
const comparacao3 = numero1 === numero2;

const comparacao4 = numero1 % numero2;
const divisivel1 = comparacao4 === 0;

const comparacao5 = numero2 % numero1;
const divisivel2 = comparacao5 === 0; 

console.log("O 1º número é maior que o 2º número?", comparacao2);
console.log("O 1º número é igual ao 2º número?", comparacao3);
console.log("O 1º número é divisível pelo 2º número?",divisivel1);
console.log("O 2º número é divisível pelo 1º?", divisivel2);









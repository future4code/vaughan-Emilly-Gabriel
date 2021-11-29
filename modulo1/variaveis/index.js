/* 1 - let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
10 
10 5 */

/* 2 - let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
10 10 10*/

/* 3 - let tempo = prompt("Quantas horas você trabalha por dia?")
let salario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salario/tempo} por hora`)*/






// 1 - escrita de código
let nome = prompt("Digite seu nome"); 
let idade = prompt("Digite sua idade");

console.log(typeof nome);
console.log(typeof idade);
// undefined, pois o usuário ainda não atribuiu retorno, as variantes ainda não tem valor.
alert(`Olá ${nome} ! Você tem ${idade} anos!`)
// Após atribuir valor, apareceu como String


// 2 - escrita de código
let roupa = prompt("Você está usando uma roupa azul hoje? Sim ou não?")
let tempo = prompt("Onde você mora está fazendo frio? Sim ou não?")
let gato = prompt("Você gosta de gatos? Sim ou não?")

console.log(typeof roupa);
console.log(typeof tempo);
console.log(typeof gato);
alert(`Você está vestido de azul hoje? ${roupa} 
Ai onde você mora, está fazendo frio? ${tempo} 
Você gosta de gatos? ${gato}`
)

// 3 - escrita de código
let a = 10;
let b = 25;
let c = 0;

c = b
b = a
a = c

console.log("O novo valor de a é", a); // = 25
console.log("O novo valor de b é", b); // = 10

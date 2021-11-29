/* 1 - let a = 10
let b = 10

console.log(b)

b+ 5
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
// undefined, pois o usuário ainda não atribuiu retorno
alert(`Seu nome é ${nome} e você tem ${idade} anos!`)


// 2 - escrita de código
let roupa = prompt("Você está usando uma roupa azul hoje? Sim ou Não?")
let tempo = prompt("Onde você mora está fazendo frio? Sim ou Não?")
let gato = prompt("Você gosta de gato? Sim ou Não?")

console.log(typeof roupa);
console.log(typeof tempo);
console.log(typeof gato);
alert(`Você está vestido de azul hoje? ${roupa} 
Ai onde você mora, está fazendo sol hoje? ${tempo} 
Você gosta de animais? ${gato}`
)

let a = 10;
let b = 25;
let c = 0;

c = b
b = a
a = c

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);

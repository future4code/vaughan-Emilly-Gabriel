// INTERPRETAÇÃO DE CÓDIGO

// 1 -
/*
Vai ser impresso no console:
"Matheus Nachtergaele"
"Virginia Cavendish"
canal: "Globo", horario: "14h"
*/





// 2 - 

/* A) nome: "Juca",
      idade: 3,
      raca: "SDR"

      nome: "Juba",
      idade: 3,
      raca: "SDR"
      
      nome: "Jubo",
      idade: 3,
      raca: "SDR"
*/


// B) Ela "copia" as propriedades dos objetos, nesse caso copiou o nome, a idade e a raca,
//    junto com os valores ali atribuidos.







// 3 - A) Vai retornar: false
//                      undefined


// B) False retorna pelo valor atribuido em "backender"
// undefined retorna pois não existe "altura" nesse objeto.




// ESCRITA DE CÓDIGO

// 1 - A 
const pessoa = {
    nome: "Emilly",
    apelido: ["Emi", "Milly", "Mi"],
}

function frase(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelido}.`)

}
    frase(pessoa)


// 1 - B
const novosApelidos = {
    ...pessoa,
    apelido: ["Emilinda", "nega", "princesa"],
}
    frase(novosApelidos);



// 2 - A
const pessoa1 = {
    nome: "Joao",
    idade: 20,
    profissao: "marceneiro",
}



// 2 - B
const pessoa2 = {
    nome: "Gabriella",
    idade: 23,
    profissao: "estudante",
}

function dadosPessoas(pessoa1) {
    console.log(pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length);
}

dadosPessoas(pessoa1);
dadosPessoas(pessoa2);






// 3 - A
const carrinho = [];


// 3 - B
const fruta1 = {
    nome: "Laranja",
    disponibilidade: true
}

const fruta2 = {
    nome: "Pera",
    disponibilidade: true
}

const fruta3 = {
    nome: "Tamara",
    disponibilidade: true
}


// 3 - C
function frutas(fruta) {
    console.log(carrinho.push(fruta))
}

frutas(fruta1);
frutas(fruta2);
frutas(fruta3);


// 3 - D
console.log(carrinho)


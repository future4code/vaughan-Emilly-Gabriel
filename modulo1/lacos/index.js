// 1- O código está somando o valor de i, logo a soma final é 10.


// 2 - A) Irá retornar todos os números maiores que 18;
/*        19
          21
          23
          25
          27
          30
*/

/* 2 - B) Sim, é suficiente. Poderiamos acessar dessa forma: 
console.log(numero[]) e o índice que gostaria de acessar.
*/

/* 3)

*
**
***
****

Iria adicinar uma linha até chegar à 4 linhas, e adicionaria 1 arterisco em cada linha.
*/


// ESCRITAS DE CÓDIGO


// 1 - A & B
let numeroAnimaisEstimacao = Number(prompt("Quantos animais de estimação você tem?"))
let listaNomes = []
    if (numeroAnimaisEstimacao === 0) {
        console.log("Que pena! Você pode adotar um pet!")
    } else for (let i = 0; i < numeroAnimaisEstimacao; i++) {
        let nomesPets = prompt("Digite o nome do seu pet")
        listaNomes.push(nomesPets)
    } 
   
console.log(listaNomes)


// 2 

let arrayOriginal = [1,2,3,4,5,100]

// A) 
for (let item of arrayOriginal) {
    console.log(item)
}

// B)
for (let item of arrayOriginal) {
    console.log(item/10)
}

// C)
let numerosPares 
let arrayPar = []

for (let item of arrayOriginal) {
    if (item % 2 === 0) 
    numerosPares = item
    arrayPar = [... arrayPar, numerosPares]
}

console.log(arrayPar)

// D)

let novoArray = [];

for (let item of arrayOriginal) {
    novoArray = [...novoArray `O elemento do index é ${arrayOriginal.indexOf(item)} é ${item}`]
}

console.log(novoArray);

// E)

function retornaMaiorNumero(arrayOriginal){
    let maiorNumero = 0

    for(let item of arrayOriginal){

      if(item > maiorNumero){
        maiorNumero = item
      }
    }
    return maiorNumero
  }

  function retornaMenorNumero(arrayOriginal){
    let menorNumero = 0

    for(let item of arrayOriginal){

      if(item < menorNumero){
        menorNumero = item
      }
    }
    return menorNumero
  }
  console.log(`O maior número é ${retornaMaiorNumero(arrayOriginal)} menor número é ${retornaMenorNumero(arrayOriginal)}.`)



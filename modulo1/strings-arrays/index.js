// 1 - interpretação de código

/*
let array
console.log('a. ', array)                          A-IMPRIME : UNDEFINED

array = null
console.log('b. ', array)                          B-IMPRIME : NULL

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]        
console.log('c. ', array.length)                   C-IMPRIME : 11

let i = 0
console.log('d. ', array[i])                       D-IMPRIME : 3

array[i+1] = 19
console.log('e. ', array)                          E-IMPRIME : (11) 3, 19, 5, 6, 7, 8, 9, 1, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor)                          F-IMPRIME : 9
*/

// 2

/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

IMPRIMIRÁ: SUBI NUM ÔNIBUS EM MIRROCOS 27 
*/



// ESCRITA DE CÓDIGO

// 1
const nome = prompt("Digite seu nome")
const email = prompt("Digite seu e-mail")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)



// 2
let comidasPreferidas = ["lasanha", "hamburguer", "strogonoff", "fricassê", "temaki"]


console.log(comidasPreferidas)                                



console.log(`Essas são as minhas comidas preferidas: `) 
const item1 = comidasPreferidas[0]  
console.log(item1)  

const item2 = comidasPreferidas[1]
console.log(item2)

const item3 = comidasPreferidas[2]
console.log(item3)

const item4 = comidasPreferidas[3]
console.log(item4)

const item5 = comidasPreferidas[4]
console.log(item5)



const comidaUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas[1] = comidaUsuario

console.log(comidasPreferidas)




// 3
const listaDeTarefas = []                                                                   

const usuario1 = prompt("Cite 1 tarefa diária")                                       
const usuario2 = prompt("Cite 1 tarefa diária")
const usuario3 = prompt("Cite 1 tarefa diária")

listaDeTarefas.push(usuario1) 
listaDeTarefas.push(usuario2)
listaDeTarefas.push(usuario3)

console.log("lista de tarefas", listaDeTarefas)                                                         

const tarefasFeitas = prompt("Escreva qual tarefa já realizou hoje? 0, 1 ou 2")        

const novaLista = listaDeTarefas.splice(Number(tarefasFeitas), 1)                              

console.log("tarefas à fazer", listaDeTarefas)      
         




















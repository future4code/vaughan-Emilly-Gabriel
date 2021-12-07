// ESCRITAS DE CÓDIGO
/*

1- A) O código pergunta ao usuário um número teste, dado o valor,
é feito uma condição. Se o número tem o resto da sua divisão igual à 
2 ou 0, passa no teste, se não, não passa;



B) Números com o resto da divisão ( % ) sendo igual ( === ) à 2 ou 0 (números pares); 

C) Números com o resto da divisão diferentes ( !== ) à 2 ou 0 (números ímpares); 

*/

/*

2- A) O código vai rodar o valor da fruta escolhida pelo cliente, conforme 
a resposta do prompt.

B) "Maçã":
    preco = 2.25

C) O 'break' garante que o programa saia da condicional switch assim que a instrução correspondente
for executada, e executa a instrução que segue logo após o switch. Caso break seja omitido,
o programa continua a execução para a próxima instrução dentro de switch. 

*/

/*

3- A) Está pedindo um número ao usuário (já transformando a string em number).

B) caso for 10: "Esse número passou no teste"
   caso for -10: "Essa mensagem é secreta!!!"

C) O console vai imprimir a mensagem, caso a condição if não for atendida; é um escopo global, 
e por isso pode ser acessado em qualquer lugar do código.

*/


// ESCRITAS DE CÓDIGO
// 1

const idadeUsuario = Number(prompt("Qual sua idade?"));
    if (idadeUsuario >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir.")
    }


// 2
const turnoAluno = prompt("Qual período você estuda? Responda: M (Matutino), V ( Vespertino) ou N (Noturno)");

    if (turnoAluno === "M") {
        console.log("Bom dia!")
    } else if (turnoAluno === "V") {
        console.log("Boa tarde!")
    }   else if (turnoAluno === "N") {
         console.log("Boa noite!")
    }
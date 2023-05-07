/*
Desafio
Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”.
Caso contrário, retorne "Nao sao iguais!” sem as aspas. 

Entrada
As entradas serão dois valores, um em cada linha, representados por A e B, que sempre serão números inteiros. 

Saída
A saída deverá retornar a frase "Sao iguais!" caso A e B sejam o mesmo valor. 
Caso contrário,  retorne "Nao sao iguais!", sem as aspas.*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

//let A = gets();
//let B = gets();

//TODO: Imprima se os valores numéricos passados são iguais ou não.

let a = 20
let b = 20

function check() {
    if( a === b) {
        console.log('Sao iguais!')
    } else {
       console.log('Não são iguais!')
    }
}


check()
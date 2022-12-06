// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

//Desafio
//Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.
//Entrada
//A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 
//Saída
//A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.

//multiplos de 5
//5,10,15,20

//somando os multiplos e retornando

//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

//armazenar os multiplos de 5
//depois somar
var a = 5;
var N = 20;

let soma = 0;

for (i = 1; (a * i) <= N; i++) {
  let resultado = a * i;
  soma += resultado;
 }

console.log(soma)

/*
var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

let soma = 0;

for (i = 1; (a * i) <= N; i++) {
  let resultado = a * i;
  soma += resultado;
 }

 print(soma)
 */
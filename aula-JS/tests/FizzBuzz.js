// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

//let resultado = gets();
//print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

/*
Desafio
Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", 
"Buzz" ou "FizzBuzz". 

Entrada
Você receberá um número onde: 
Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
Se o número for apenas múltiplo de 3 -> "Fizz" ; 
Se o número for apenas múltiplo de 5 -> "Buzz"; 
Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

Saída
Retorne a palavra correta de acordo com o seu múltiplo. Caso o valor não seja múltiplo de 3 ou 5, 
exiba o número, conforme exemplo abaixo:

EXEMPLO DE ENTRADA 
3
5
15
4 

EXEMPLO DE SAÍDA 
Fizz
Buzz
FizzBuzz 
4 
*/

let resultado = gets();
print(fizzBuzz(resultado))

function fizzBuzz(resultado) {
    if (resultado % 3 === 0 && resultado % 5 === 0){
      return 'FizzBuzz';
    }
    else if (resultado % 3 === 0){
      return 'Fizz';
    }
    else if (resultado % 5 === 0){
      return 'Buzz';
    }
    else {
      return resultado;
    }
  }
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

//let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

/*
function somatorio(n){
    return (n === 0 ) ? 0 : n + somatorio(n - 1)

}
console.log(somatorio(n))
*/
//recursão = invoca a si mesma e tem dentro dela uma estrateria para parar

function countDown(fromNumber) {
    console.log(fromNumber)
    
    let nextNumber = fromNumber - 1 

    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

countDown(10)
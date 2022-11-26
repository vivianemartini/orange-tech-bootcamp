/*
1) Crie um programa que dado um número imprima a sua tabuada.



//pode colocar uma variavel, dai tem q trocar no console
const numero = 7

for (let i = 1; i <= 10; i++) {
    console.log(i * numero) 
}
*/

/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.


const numeros = [0 ,1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]


for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i] 

    if (numero % 2 === 0) {
        console.log(numero)
    }
}
*/

/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".


const nomes = ['Maria', 'Vania', 'Carol', 'Valmor']

for (let i = 0; i < nomes.length; i++) {
    const iniciamComV = nomes[i];

    if (iniciamComV[0] === 'V') {
        console.log(iniciamComV)
    
    }

}
*/
/*

4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
*/




/*

5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]



   const lista = [2, 7, 3, 8, 10, 4]
   const media = 5;

   for (let i = 0; i < lista.length; i++) {
    const recuperacao = lista[i];

    if (recuperacao < media){
        console.log('Ficaram em recuperção :' + recuperacao)
    }
   }
   */
   /*

6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4
    */

    const listaNotas = [2, 7, 3, 8, 10, 4]
    const maiorNota = 10

    for (let i = 0; i < listaNotas.length; i++) {
        const maiorNotaDeTodas = listaNotas[i];

        if (maiorNotaDeTodas === maiorNota) {

            console.log('A maior nota é : ' + maiorNota)
        }

    }

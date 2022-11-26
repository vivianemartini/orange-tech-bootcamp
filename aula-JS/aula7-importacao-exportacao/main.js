/*
const { gets, print} = require('./funcoes-auxiliares');

print(gets())


const pessoa = {
    nome: 'vitor'
}

const { nome } = pessoa;
const nome = pessoa.nome;

//esses dois codigos são equivalentes
*/

//O require importa o que esta sendo exportado pelo outro arquivo

/*
Uma saça contem 5 alunos e para cada daluno foi sorteado um númeor de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado

Dados de entrada:
5
50
10
98
23

sáida:98
*/

const { gets, print} = require('./funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteados = gets();
    numerosSorteados.push(numeroSorteados);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteados = numerosSorteados[i];
    if(numeroSorteados > maiorValor) {
        maiorValor = numeroSorteados
    }
    
}

print(maiorValor)

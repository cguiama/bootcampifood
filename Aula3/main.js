// Importando objetos ou funções de arquivos diferentes;
// const funcoes = require("./funcoes-auxiliares");
// uma outra forma de uso é :

const { gets, print } = require("./funcoes-auxiliares");

/*
Uma sala contém 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número.

Dados de entrada:
5
50
10
98
23

Saída: 
23
*/

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
	const numerosSorteado = gets();

	if (numerosSorteado > maiorValor) {
		maiorValor = numerosSorteado;
	}
}
console.log(maiorValor);

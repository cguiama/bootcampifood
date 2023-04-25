/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
*/

class Pessoa {
	nome;
	altura;
	peso;

	constructor(nome, altura, peso) {
		this.nome = nome;
		this.altura = altura;
		this.peso = peso;
	}

	calcularImc() {
		return this.peso / Math.pow(this.altura, 2);
	}
}

const guilherme = new Pessoa('Guilherme', 1.83, 85);

console.log('O IMC de )

/*
   class Pessoa {
        nome;
        idade;

        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }

        descrever() {
            console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
        }
    }

    new Pessoa('Renan', 30).descrever();
*/
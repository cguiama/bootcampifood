/* 
faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua media e sua classificação conforme a tabela abaixo

Média = (nota 1 + nota 2 + nota 3) / 3

Classificação:
- Media < 5 == reprovado;
- Media entre e 7 == recuperação;
- Media > 7 == aprovado;
*/

//variaveis
const nota1 = 5;
const nota2 = 10;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;
let classificacao;

//classificação

if(media < 5)
    {
        classificacao = "reprovado";
        console.log("Sua média final é " + media.toFixed(2) + " e você foi " + classificacao);
    }
else if(media >= 5 && media <= 7)
{
    classificacao = "recuperação";
    console.log("Sua média final é " + media.toFixed(2) + " e você está de " + classificacao);
}
else
{
    classificacao = "aprovado";
    console.log("Sua média final é " + media.toFixed(2) + " e você está " + classificacao);
}

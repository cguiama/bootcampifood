/*
O IMC - Indice de massa corporal é um criterio da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que faça o calculo e mostre sua condição de acordo com a tabela abaixo.

Condições de IM em adultos.

- Abaixo de 18.5 - Abaixo do peso ideal;
- Entre 18.5 e 25 - Peso normal;
- Entre 25 e 30 - Acima do peso;
- Entre 30 e 40 - Obeso;
- Acima de 40 - Obesidade Grave;
*/

let peso = 85;
let altura = 1.83;
let imc = peso / Math.pow(altura, 2);

if(imc < 18.5)
{
    console.log("Seu IMC é de " + imc.toFixed(2) + " e seu peso atual está abaixo do recomendado.\n Se possivel, busque ajuda profissional.")
}
else if(imc >= 18.5 && imc <= 25)
{
    console.log("Seu IMC é de " + imc.toFixed(2) + " e seu peso é considerado normal.")
}
else if(imc >= 25 && imc <= 30)
{
    console.log("Seu IMC é de " + imc.toFixed(2) + " e você está acima do peso ideal.\n Se possivel, busque ajuda profissional.")
}
else if(imc >= 30 && imc <= 40)
{
    console.log("Seu IMC é de " + imc.toFixed(2) + " e sua condição atual é considerada como Obesidade.\n Se possivel, busque ajuda profissional.")
}
else
{
    console.log("Seu IMC é de " + imc.toFixed(2) + " e sua condição de Obesidade é considerada Grave.\n Se possivel, busque ajuda profissional.")
}
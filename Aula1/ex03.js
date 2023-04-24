/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento e efetuar o cálculo adequado.

Código da Condição de pagamento:
- Pagamento à vista debito, recebe 10% de desconto;
- Pagamento à vista em dinheiro ou pix, recebe 15% de desconto;
- Pagamento em duas vezes, preço de etiqueta sem juros;
- Pagamento acima de duas vezes, preço de etiqueta + 10% de juros;
*/

const preco = 215.99;
const debito = preco - (preco * 0.1);
const pix = preco - (preco * 0.15);
const creditoAteDuas = preco;
const creditoParcelado =  preco + (preco * 0.1);
let formaDePgto = 4;


if(formaDePgto === 1)
{
    console.log("Você está pagando com a modalidade débito, portanto recebeu 10% de desconto.\nO valor pago será de R$", debito.toFixed(2)+".");
}
else if(formaDePgto === 2)
{
    console.log("Você está pagando via Pix ou Dinheiro, portanto recebeu 15% de desconto.\nO valor pago será de R$", pix.toFixed(2)+".");
}
else if(formaDePgto === 3)
{
    console.log("Você está pagando com a modalidade credito até duas vezes.\nO valor pago será de R$", creditoAteDuas.toFixed(2)+".");
}
else
{
    console.log("Você está pagando com a modalidade credito parcelado em mais de duas vezes, a taxa de juros cobrada é de 10%.\nO valor pago será de R$", creditoParcelado.toFixed(2)+".");
}
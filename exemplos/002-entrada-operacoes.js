// fazendo referência para a biblioteca de entrada de dados
let entrada = require('prompt-sync')();

let nome = entrada('Digite seu Nome: ');

console.log('Nome digitado: ', nome);
console.log('------------------------------');

//trabalhando com números do jeito errado
// let n1 = entrada ('Digite o 1° número:');
// let n2 = entrada ('Digite o 2° número:');

// do jeito correto
let n1 = entrada ('Digite o 1° número:');
let n2 = entrada ('Digite o 2° número:');

let num1 = parseInt(n1);
let num2 = parseInt(n2);

let soma = num1 + num2;
let subtracao = num1 - num2;
let divisao = num1 / num2; //divisão que armazena o resultado completo
let resto = num1 % num2; // resto da divisão n° quebrado
let mutiplicacao = num1 * num2;
console.log('Resultado da soma entre ' + n1 + ' + ' + n2 + ' = ' + soma);
console.log('Resultado da subtração entre ' + n1 + ' - ' + n2 + ' = ' + subtracao);
console.log('Resultado da divisão entre ' + n1 + ' / ' + n2 + ' = ' + divisao.toFixed(2));
console.log('Resultado da divisão inteiro entre ' + n1 + ' / ' + n2 + ' = ' + parseInt(divisao));
console.log('Resultado da resto entre ' + n1 + ' % ' + n2 + ' = ' + resto);
console.log('Resultado da multiplicação entre ' + n1 + ' x ' + n2 + ' = ' + mutiplicacao);
console.log('------------------------------');



entrada('Pressione Enter para encerrar.....');
//Crie um programa que receba duas notas de 0 a 10,
//Calcule a média e com a média
//exiba as seguintes mensagens para cada faixa de valores
//nota < 5 = I, note > 5 e <6.5 = R, nota > 6.5 e < 8.5 = B
//e nota >= 8.5 MB

let entrada = require('prompt-sync')();

let n1 = entrada ('Digite a 1° nota:');
let n2 = entrada ('Digite a 2° nota:');

let nota1 = parseInt(n1);
let nota2 = parseInt(n2);

let soma = nota1 + nota2;
let media = soma / 2;

if (media < 5) {
    console.log('Sua nota é "I"');
}

if (media >= 5 && media<6.5) {
    console.log('Sua nota é "R"');
}

if (media >= 6.5 && media<8.5) {
    console.log('Sua nota é "B"');
}


if (media >= 8.5) {
    console.log('Sua nota é "MB"');
}
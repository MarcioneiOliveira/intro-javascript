
let notas = [10, 5, 4.35];
let produtos = ['Borracha','Caderno','Caneta'];

console.log(notas);
console.log(produtos);
console.log('1° Produto da lista: ' + produtos[0]);

notas[2] = 4.5;
console.log('Nota corrigida: ' + notas[2]);

console.log('Array com repetição')
for (let cont = 0; cont < produtos.length; cont++) {
    console.log((cont + 1) + ' o produto da lista: ' + produtos[cont]);
}

for (const cont in notas) {
    console.log(parseInt(cont) +1 + '° nota: ' + notas[cont]);
}

let listaProdutos = [
{
    id: 1,
    nome: 'Borracha',
    prco: '1.00'
},
{
    id: 2,
    nome: 'Caderno',
    prco: '6.00'
},
{
    id: 3,
    nome: 'Caneta',
    prco: '4.50'
},
];

console.log('------------------------------')
console.log('ID: ' + listaProdutos[2].id + '\n' + 'nome: ' + listaProdutos[2].nome +
'\n' + 'Preço: R$ ' + listaProdutos[2].preco);
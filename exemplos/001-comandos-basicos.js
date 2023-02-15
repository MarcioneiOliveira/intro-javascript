// comentário de 1 linha
console.log('Hello World!');
/*
comentario de mais
de uma linha
*/

/*
    Pesquisar a diferença entre as instruções
    var, let e const na linguagem java-script
*/

let nome = 'Marcionei';
let idade = 35;
let altura = 1.78;
let trabalha = true;
let corfavorita = 'preto';
let cores_favoritas = ['laranja', 'roxo', 'verde', 'azul', 'preto'];
let endereco = {
    'logradouro'    : 'Rua',
    'nome_log'      : 'Brasil',
    'n'             : '105 A',
    'bairro'        : 'Centro'
};
let covid;
let dengue = null;
const exfunc = () => {};

console.log('Variável nome = ' + typeof(nome));
console.log('Variável idade = ' + typeof(idade));
console.log('Variável altura = ' + typeof(altura));
console.log('Variável trabalha = ' + typeof(trabalha));
console.log('Variável corfavorita = ' + typeof(corfavorita));
console.log('Variável cores_favoritas = ' + typeof(cores_favoritas));
console.log('Variável endereco = ' + typeof(endereco));
console.log('Variável covid = ' + typeof(covid));
console.log('Variável dengue = ' + typeof(dengue));
console.log('Variável exfunc = ' + typeof(exfunc));
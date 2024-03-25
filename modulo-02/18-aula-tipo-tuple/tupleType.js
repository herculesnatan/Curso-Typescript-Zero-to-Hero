"use strict";
// Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
// sempre tem q seguir a ordem fixa de elementos dentro da tupla
pessoa = ['Hércules Natan', 'Computer Engineering Student', 21];
console.log(pessoa);
// Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Hércules Natan', 'Computer Engineering Student', 21];
console.log(pessoa1[1]); // acessando valor da tupla
// Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)
let pessoa2 = ['Hércules Natan', 'Computer Engineering Student', 21];
console.log(pessoa2);
// Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
// Exemplo 05 - Lista Heterogênea de Tupla:
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Hercules', 'Maggie'], [21, 4]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Hércules', 'Medeiros'));
console.log(criarPessoa('Hércules', 'Natan', 'Medeiros'));

"use strict";
// Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
// sempre tem q seguir a ordem fixa de elementos dentro da tupla
pessoa = ['Hércules Natan', 'Computer Engineering Student', 21];
console.log(pessoa);
// Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Hércules Natan', 'Computer Engineering Student', 21];
console.log(pessoa1[1]);
// Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)
let pessoa2 = ['Hércules Natan', 'Computer Engineering Student', 21];
console.log(pessoa2);
// Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);

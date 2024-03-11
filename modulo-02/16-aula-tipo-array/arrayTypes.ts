// Exemplo 01 - Uso de Colchetes
let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);

// Exemplo 02 - Array Object 
let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[0]); // Retorna o abacaxi

// Exemplo 03 - Adicionado mais strings com o método "push"
let idiomas: Array<string> = ['Português','Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
// Adicionado Italiano e Russo
idiomas.push('Italiano');
idiomas.push('Russo')
console.log(idiomas);

// Exemplo 04 - Indentificando o tamanho do array com o método 'lenght'
let idiomas1: Array<string> = ['Português','Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);

// Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros: Array<number> = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);

// Exemplo 06 - Exemplo de Array com laço de iteração
let linguagensArray: string[] = new Array('TypeScript','Python', 'JavaScript', 'Java');

function funcaoLinguagens (linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}

funcaoLinguagens(linguagensArray);
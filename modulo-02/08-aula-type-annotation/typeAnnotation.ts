// Variáveis [Type Annotation]
let nome: string = "Hércules Natan";
console.log(nome);

// ==> Arrays [Type Annotation]
let animais: string[] = ['Elefante', 'Cachorro','Panda', 'Gato'];
console.log(animais);

// ==> Objetos [Type Annotation]

let carro: {
    nome: string;
    ano: number;
    preco:number;
};

carro = {nome: 'Creta', ano: 2019, preco: 80000}
console.log(carro);


// --> Functions [Type Annotation]
function multiplicarNumero(num1: number, num2: number) {
    return num1 * num2;
}

console.log(multiplicarNumero(2, 5));
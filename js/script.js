// Entrada de dados
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

// Processamento
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let exponenciacao = num1 ** num2;
let modulo = num1 % num2;

// Saída de dados
alert("A soma é: " + soma);
alert("A subtração é: " + subtracao);
alert("A multiplicação é: " + multiplicacao);
alert("A divisão é: " + divisao);
alert("A Exponenciação de num1 a num2 é: " + exponenciacao);
alert("O Resto da divisão é: " + modulo);


let a = 10;
let b = 20;

let ehIgual = a == b;
let ehDiferente = a != b;
let ehEstritIgual = a === b;
let ehEstritDiferente = a !== b;
let ehMaior = a > b;
let ehMenor = a < b;
let ehMenorOuIgual = a <= b;
let ehMaiorOuIgual = a >= b;

let naoEhIgual = !ehIgual;
let naoEhDiferente_EhMenor_ou_EhMaiorOuIgual = !ehDiferente && (ehMenor || ehMaiorOuIgual);

console.log("É igual: " + ehIgual);
console.log("É diferente: " + ehDiferente);
console.log("É Estritamente Igual: " + ehEstritIgual);
console.log("É Estritamente Diferente: " + ehEstritDiferente);
console.log("É Maior Ou Igual: " + ehMaiorOuIgual);
console.log("É Menor Ou Igual: " + ehMenorOuIgual);
console.log("Não É igual: " + naoEhIgual);
console.log("Não É Diferente e É Menor ou É Maior Ou Igual: " + naoEhDiferente_EhMenor_ou_EhMaiorOuIgual);

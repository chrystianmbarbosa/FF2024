/* Declare uma constante texto, uma variável de número inteiro, 
 uma constante de um número decimal e imprima no console todos 
 juntos separados por vírgula.*/

const texto = "Texto Corrido";
let numeroInteiro = 10;
const numeroDecimal = 10.5;
//Forma 1
console.log(texto + " , " + numeroInteiro + " , " + numeroDecimal);
//Forma 2
console.log(texto + ' , ' + numeroInteiro + ' , ' + numeroDecimal);
//Forma 3
console.log(`${texto} , ${numeroInteiro} , ${numeroDecimal}`);
/*
Crie 1 função que retone se o valor digitado 
é ou não é um número e exiba em um alert.
*/

function verificarNumero(valor) {
    return isNaN(valor);
}

alert(`É uma letra? ${verificarNumero('L')}`);


// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

function potenciadeDois(numero) {
    let incremento = 2;
    for (let a = 1; a < numero; a++) {
    incremento += 1 * incremento;
    }
    return incremento
}
console.log(potenciadeDois(10));

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

// ***************
function retornaNumMaior (num1, num2, num3) {
    let maior = 0;
    if (maior < num1) {
        maior = num1;
    }
    if (maior < num2) {
        maior = num2;
    }
    if (maior < num3) {
        maior = num3;
    }
    return maior;
}
console.log(retornaNumMaior(10,20,30));
    

// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

function recebeNumeroPrimo(numero) {
    for (let a = 2; a < numero; a++) {
        if (numero % a === 0) {
            return false;
        } 
    }
    return true;
}
console.log(recebeNumeroPrimo(17));

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

function contarVogais(nome) {
    let contador = 0;
    let vogais = ['A', 'E', 'I', 'O', 'U'];
    for (let a = 0; a < nome.length; a++) {
      /* if (nome.toUpperCase().charAt(a) === 'A' || nome.toUpperCase().charAt(a) === 'E' || nome.toUpperCase().charAt(a) === 'I' || nome.toUpperCase().charAt(a) === 'O' || nome.toUpperCase().charAt(a) === 'U') {
        contador = contador + 1;
        } */
        for (let b = 0; b < vogais.length; b++) {
            if (nome.toUpperCase().charAt(a) === vogais[b]) {
                contador = contador +1;
            }
        }
    }
    return contador;
}
console.log(contarVogais("otto"));

// Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma array de números e retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
// Exemplo:
// function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]

function inverteArray(numeros) {
    let retorno = new Array(numeros.length);
    let contador = 0;
    for (a = numeros.length; a > 0; a--) {
        retorno[contador] = numeros[a-1];
        contador = contador +1;
    }
    return retorno;
}
console.log(inverteArray([1,2,3,4]));
// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(numero1, numero2){
    return numero1 + numero2;
}
function subtracao(numero1, numero2){
    return numero1 - numero2;
}
function multiplicacao(numero1, numero2){
    return numero1 * numero2;
}
function divisao(numero1, numero2){
    return numero1 / numero2;
}

console.log(soma(2, 2));
console.log(subtracao(4, 2));
console.log(multiplicacao(4, 4));
console.log(divisao(4, 2));


// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

function multiplicaSemZero(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 'não queremos zero';
    }
        return num1 * num2;
}
console.log(multiplicaSemZero(4, 2));
console.log(multiplicaSemZero(4, 0));

function divisaoSemZero(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 'não queremos zero';
    }
        return num1 / num2;
}
console.log(divisaoSemZero(4, 2));
console.log(divisaoSemZero(4, 0));


// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function calculadora(num1, num2, operacao) {
    if (operacao === '+' ){
        return "O resultado da operação ".concat("soma").concat(" é ").concat(soma(num1, num2));
    } else if (operacao === '-'){
        return "O resultado da operação ".concat("subtração").concat(" é ").concat(subtracao(num1, num2));
    } else if (operacao === '*'){
        return "O resultado da operação ".concat("multiplicação").concat(" é ").concat(multiplicaSemZero(num1, num2));
    } else
        return "O resultado da operação ".concat("divisão").concat(" é ").concat(divisaoSemZero(num1, num2));
        }
console.log(calculadora(1, 2, '+'));
console.log(calculadora(4, 2, "-"));
console.log(calculadora(8, 9, "*"));
console.log(calculadora(8, 2, "/"));
    


// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, crie uma função que resolva a conta 36325 * (9824 + 777).

function calculo(num1, num2, num3) {
    return multiplicaSemZero(num1, soma(num2, num3));
}
console.log(calculo(36325, 9824, 777));

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

function recebaDoisNumeros(min, max){
     var radom1 = Math.floor(Math.random() * (max - min)) + min;
     var radom2 = Math.floor(Math.random() * (max - min)) + min;
     var resultado = "A soma de ".concat(radom1).concat(" e ").concat(radom2).concat( " é " ) .concat(soma(radom1, radom2));
     return resultado;
}
console.log(recebaDoisNumeros(2, 8));

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

function recebaTresNumeros(num1, num2, num3) {
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
        return "Preencha todos os valores corretamente!"
    } else {
        return soma(multiplicaSemZero(num1, multiplicaSemZero(num2, num3)),2);
    }
}
console.log(recebaTresNumeros(2, 4, 6));

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"

function recebeTresParametros(num1, num2, num3) {
    if (num1 != undefined && num2 == undefined && num3 == undefined) {
        return num1
    }   else if (num1 != undefined && num2 != undefined && num3 == undefined) {
        return num1 + num2
    }   else if (num1 != undefined && num2 != undefined && num3 != undefined) {
        return (num1 + num2) / num3
    }   else {
        return "não recebeu parâmetro"
    }
}
console.log(recebeTresParametros())
console.log(recebeTresParametros(2, 5, 2))

// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

    /**
     * a função split quebra os caracteres, reverse inverte os caracteres, join junta os caracteres
     */
function recebeString(valor) {
    return valor.split('').reverse().join('');
    }
console.log(recebeString("Monique"));
console.log(recebeString("Otto"));

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".
function comparaPalindromo(valor) {
    var palindromo = valor.split('').reverse().join('');
    /**
     * Se caso quisermos desconsiderar o case sensitive, ou seja, a letra maiúscula da palavra,
     * poderíamos utilizar a função toUpperCase, exemplo:
     * 
     if (valor.toUpperCase() === palindromo.toUpperCase()) {
     */
     if (valor === palindromo) {
         return true;
     } else {
         return false;
}
}
console.log(comparaPalindromo("otto"));

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"

/** 
 * length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array.
*/

function retornaMaior(valor1, valor2) {
     if (valor1.length > valor2.length) {
         return valor1;
     } else { return valor2;
}  
} 
console.log(retornaMaior('Francisco', 'Monique'))

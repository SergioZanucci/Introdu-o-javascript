// conversão de tipos *
// tipo de dado
// booleano

//conversão implicita

// const numero = 456;
// const numerostring = "456";

// console.log(numero === numerostring); // me retornou que elas não correspondem, elas não são a mesma coisa.
// Estamos comparando um número com um texto. Um número é diferente de um texto para o JavaScript. === false

// O JavaScript nos ajuda, também, nesse ponto com a Conversão Implícita. Como a fazemos? 
// Nós usamos, invés dos três iguais, vamos usar dois iguais só.

// console.log(numero == numerostring); // Ele pegou o nosso número 456 e converteu numa string e comparou os dois.
// Nesse ponto, agora os dois são uma string com o valor 456. Eles são iguais. == true

// console.log(numero + numerostring); //  O que aconteceu? Ele pegou o nosso número e transformou numa string, então,
// na hora que colocamos o operador de soma, que é o mais, na verdade ele vira uma concatenação.
// Você tem uma string 456 com outra string 456. E, aí, você só colocou uma atrás da outra. + concatena


// conversão explicita

// Number()
// String()

const numero = 456;
const numeroString = Number("456");

console.log(numero + numeroString);
/**
 * Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova 
 * função que só executa fn se não for chamada novamente dentro do intervalo. 
 */

//Utilizado os comando npm install prompt-sync e const prompt = require('prompt-sync')() recebimento
//dados externos
const prompt = require('prompt-sync')();

//Informações dadas pelo usuário
let palavraInformada = prompt("Digite a palavra desejada: ");

//Função para controlar a quantidade de vezes que uma função é executada, utilizando o debounce,
//  com outra função interna para limpar o tempo anterior e determinar o tempo de delay
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

//Saída de dados
const palavraEscrita = debounce(() => {
  console.log(palavraInformada);
}, 1000);

//Saída de dados onde só a última será executada após o delay
palavraEscrita();
palavraEscrita();
palavraEscrita();
palavraEscrita();
/**
 * Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, 
 * e n === 0 retornando 1. 
 */

//Utilizado os comando npm install prompt-sync e const prompt = require('prompt-sync')() recebimento
//dados externos
const prompt = require('prompt-sync')();

//Informações dadas pelo usuário
let valorAFatorar = Number(prompt("Digite um valor: "));

//Função para fatorar o valor informado pelo usuário
function fatorial(n) {
  if (n < 0) {
    throw new Error("O fatorial não é definido para números negativos.");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

//Sída de dados
console.log(fatorial(valorAFatorar));

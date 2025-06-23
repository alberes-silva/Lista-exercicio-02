/**
 * Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), 
 * retornando resultados instantâneos em repetidas invocações. 
 */

//Utilizado os comando npm install prompt-sync e const prompt = require('prompt-sync')() recebimento
//dados externos
const prompt = require('prompt-sync')();

//Informações dadas pelo usuário
let valorAFatorar = Number(prompt("Digite um valor: "));


//Função para armazenamento em cache
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const chave = JSON.stringify(args);
    if (cache[chave]) {
      console.log("Resultado do cache.");
      return cache[chave];
    }
    const resultado = fn.apply(this, args);
    cache[chave] = resultado;
    return resultado;
  };
}

//Saída de dados
const fatorialMemo = memoize(function f(n) {
  if (n <= 1) return 1;
  return n * f(n - 1);
});

//Esse Calcula e armazena
console.log(fatorialMemo(valorAFatorar)); 
//Usa o cache armazenado
console.log(fatorialMemo(valorAFatorar)); 

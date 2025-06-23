/**
 * Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair 
 * todas as palavras únicas e exibi-las em um array. 
 */

//Utilizado os comando npm install prompt-sync e const prompt = require('prompt-sync')() recebimento
//dados externos
const prompt = require('prompt-sync')();

//Informações dadas pelo usuário
let fraseInformada = prompt("Digite a frase desejada: ");

//Função para identificar as palavras únicas
function palavrasUnicas(frase) {
  const palavras = frase.toLowerCase().split(" ");
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    if (palavras.indexOf(palavras[i]) === palavras.lastIndexOf(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }

  return unicas;
}

//Saída de dados
console.log(palavrasUnicas(fraseInformada));

/**
 * Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. 
 * Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo”
 * a cada palpite errado. 
 */

//Utilizado os comando npm install prompt-sync e const prompt = require('prompt-sync')() recebimento
//dados externos
const prompt = require('prompt-sync')();

//Gerando um número aleatório entre 1 e 100, utilizando a biblioteca Math
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

//Contador de quantas tentativas o usuário fez
let tentativas = 0;
//Armazenando o número digitado pelo usuário
let palpite = 0;    

//Ilustração para informar ao usuário o que fazer
console.log("Tente adivinhar o número secreto entre 1 e 100.");

//Calculo para aumentar a contagem de tentativas, dica para o usuário (Mais alto ou mais baixo) e 
//saída de dados informando a conclusão (Acertou e o números de tentativas)
while (palpite !== numeroSecreto) {
  palpite = parseInt(prompt("Digite seu palpite: ")); 
  tentativas++;

  if (palpite < numeroSecreto) {
    console.log("Mais alto!");
  } else if (palpite > numeroSecreto) {
    console.log("Mais baixo!");
  } else {
    console.log("Parabéns! Você acertou!");
    console.log("Tentativas: " + tentativas);
  }
}


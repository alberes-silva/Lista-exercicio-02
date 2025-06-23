
/**
 * Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real 
 * (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário. 
 */

//Utilizado os comando npm install prompt-sync e const prompt = require('prompt-sync')() recebimento
//dados externos
const prompt = require('prompt-sync')();

//Entrada de dados pelo usuário (Externos)
const dataInformada = prompt("Informe a data desejada (dd/mm/aaaa): ");

//Formulas para separar a string em dia, mês e ano convertendo para números
const [diaString, mesString, anoString] = dataInformada.split('/');
const dia = parseInt(diaString, 10);
const mes = parseInt(mesString, 10);
const ano = parseInt(anoString, 10);

//Função para confirmação se a informação do usuário é uma data válida
function ehDataValida(dia, mes, ano) {
  const data = new Date(ano, mes - 1, dia);
  return data.getDate() === dia &&
         data.getMonth() === mes - 1 &&
         data.getFullYear() === ano;
}

//Saída de dados
console.log(ehDataValida(dia, mes, ano));



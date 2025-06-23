/**
 * Escreva duas funções: ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] 
 * e retorna o objeto equivalente. ○ objetoParaPares(obj) faz o inverso, retornando um array de pares. 
 */


//Função para mostrar informações em pares (Chave e valor)
function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

//Função para retorno do objeto equivalente
function objetoParaPares(obj) {
  return Object.entries(obj);
}

//Entrada de dados
const pares = [['nome', 'Alberes'], ['idade', 47]];
const objeto = { nome: 'Alberes', idade: 47 };

//Saída de dados (Chave e valor)
console.log(paresParaObjeto(pares));
//SAída de dados(objeto equivalente)
console.log(objetoParaPares(objeto));

/**
 * Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array 
 * apenas com os nomes, ordenados por preço crescente, usando map, sort. 
 */

//Array de produtos para verificação, com os produtos e seus valores
const produtos = [
  { nome: "Blusa Feminina", preco: 230 },
  { nome: "Bermuda", preco: 85 },
  { nome: "Camisa Polo", preco: 80 },
  { nome: "Calça", preco: 180 }
];

//Função para ordenar pelo valor dos produtos
function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

//Saída de dados
console.log(nomesOrdenadosPorPreco(produtos));

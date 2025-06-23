/**
 * Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um 
 * cliente e o valor é a soma de todos os seus total. 
 */

//Array de vendas para verificação com nomes dos vendedores e suas vendas
const vendas = [
  { cliente: "Antonio", total: 100 },
  { cliente: "Gabriela", total: 150 },
  { cliente: "Maria", total: 50 },
  { cliente: "Gabriela", total: 200 },
  { cliente: "Maria", total: 130 },
  { cliente: "Vildaquita", total: 200 },
  { cliente: "Adriana", total: 500 },
];


function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

//Saída de dados
console.log(agruparPorCliente(vendas));

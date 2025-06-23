📘 Lista de Tarefas 2 – Resumo das Atividades
Este projeto contempla desafios fundamentais de JavaScript, com foco em controle de fluxo, funções (incluindo recursão e otimização) e manipulação de arrays e objetos. Ele está dividido em três seções principais:

🔁 Seção 1: Estruturas de Controle Avançadas
Validação de Datas

Função ehDataValida(dia, mes, ano): Verifica se a data é real, considerando a variação de dias por mês e anos bissextos.

Jogo de Adivinhação

Geração de número aleatório de 1 a 100.

Utiliza while para repetição até o acerto, com feedback de "mais alto" ou "mais baixo".

Palavras Únicas

Recebe uma string e retorna um array com palavras únicas, usando if/else e laços for.

🔁 Seção 2: Funções e Recursão
Fatorial Recursivo

Função fatorial(n) implementada recursivamente.

Lança erro se n < 0 e retorna 1 para n === 0.

Debounce

Função debounce(fn, delay): Executa fn apenas se não for chamada novamente dentro do intervalo de tempo.

Memoization

Função memoize(fn): Armazena os resultados anteriores de fn para evitar recomputações desnecessárias.

🔁 Seção 3: Arrays e Objetos Complexos
Mapeamento e Ordenação

A partir de produtos = [{ nome, preco }], gera um array ordenado com apenas os nomes, via map e sort.

Agrupamento por Propriedade

Usando reduce, transforma vendas = [{ cliente, total }] em um objeto onde cada chave é o cliente e o valor é a soma total de compras.

Conversão Entre Formatos

paresParaObjeto(pares): Converte array de pares [ [chave, valor] ] para objeto.

objetoParaPares(obj): Faz o inverso, convertendo objeto para array de pares.

# <h1 style="text-align: center;color:lightblue;">POC 2 - Métodos de Array</h1>

Para explicar os conceitos dos métodos de Array, optei por seguir uma linha de raciocínio como um relatório de estoque.

Para isso criei o seguinte array de Objects:
<img style="height:400px; width:auto" src="images/productsObject.png"/>

Os dados desse array serão usados para demonstrar todos os métodos requisitados dessa POC.

Para facilitar comparações dos valores, criei uma tabela inicial com apenas esses dados no arquivo index.html

<img src="images/productsList.png"/>

### Spread



### Descrição:
<p style="font-size:16px">O operador spread é usado para expandir um objeto iterável, como array ou atributos de um objeto. Por exemplo</p>
<p style="font-size:16px">Para usar basta apenas colocar < ... > antes de um objeto ou array, como o exemplo abaixo. 
</p>

<img src="images/spread-how-to-use.png"/>

<p style="font-size:16px">
        Alguns casos de uso:
</p>

- Usar spread para extrair um dado específico de um array

- Adicionar ou sobrescrever atributos de um objeto

O exemplo que usei de spread é adicionar um campo de desconto na tabela de produtos, como o código abaixo:

<img src="images/spreadCode.png">

Que resulta na tabela:

<img src="images/spreadTable.png"/>

<hr/>

### Map

### Descrição:

<p style="font-size:16px">O método map() é responsável por mapear os valores de um array baseado em uma função. <br/>
Para demonstrar chamei o método map() para substituir o valor do preço com o valor de retorno de uma função aplica 50% de desconto no produto.
</p>

<img src="images/mapCode.png"/>

Resultando na tabela:

<img src="images/mapTable.png"/>

### Pontos Importantes:

- Cria um novo array com o resultado de uma função
- Não executa a função em elementos vazios
- Não modifica o array original

<hr/>

### Reduce

### Descrição:
<p style="font-size:16px">
    O método reduce() é responsável executar uma função em cada elemento do array e reduzi-lo em apenas um valor.<br/>
    Para exemplificar, reduzi a lista de produtos em apenas um campo que simboliza o faturamento no código abaixo:
 </p>

<img src="images/reduceCode.png">

Gerando a tabela:

<img src="images/reduceTable.png"/>

### Pontos Importantes:

- Ao usar reduce, ele executa a função em todos os elementos do array
- A função deve retornar apenas um único valor
- Não executa a função em elementos vazios
- O método reduce não modifica o array original

<hr/>

### Filter

### Descrição:
<p style="font-size:16px;">
    Para usar o método filter() você precisa de uma função que retorna valores baseado em alguma condição, assim filtrando o array. <br/>
    Para exemplificar filtrei apenas os objetos com menos de 15 quantidades no estoque. Como demonstra o código abaixo:
</p>

<img src="images/filterCode.png"/>

Gerando a tabela:

<img src="images/filterTable.png"/>

### Pontos Importantes:

- Cria um novo array com os elementos retornados pela função
- Não executa a função em elementos vazios
- Não modifica o array original

<hr/>

### Sort

### Descrição: 
 
<p style="font-size:16px;">
    O método sort é responsável por ordenar os elementos de um array baseado em uma função de ordenação onde deve retornar um número positivo, negativo ou 0.
</p>
<img src="images/sortCode.png"/>

    
    No caso do código eu quis ordenar os produtos por preço de ordem decrescente, para isso usei o 2° parametro - o 1° parâmetro, porque ele apareceria primeiro na lista ordenada. Resultando na tabela:

<img src="images/sortTable.png">



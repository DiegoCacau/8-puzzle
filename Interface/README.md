# N-Puzzle

Para rodar o simulador, basta abrir o arquivo `index.html` no browser (testes foram feitos no Chrome, havendo a possibilidade de não haver compatibilidade com browsers mais antigos, como Internet Explorer 6). É nessário também ter acesso à internet já que alguns arquivos de estilo e de bibliotecas usadas para gerar a àrvore estão hospedados no `Cloudflare`.
Outra limitação do simulador é que no caso de a árvore ficar muito grande (muito mais do que 100 nós), a gereção da visualização da árvore pode travar. Isso acontece por uma limitação na iteração entre o browser e a biblioteca que usamos para gerar a árvore. Nos nossos testes, verificamos que isso tende a só ocorrer em tabuleiros de tamanho 4x4 ou maiores.

## Uso

Para rodar os testes, basta: 
- Selecionar o tamanho do tabuleiro no campo numérico, abaixo do botão `Inserir dados de entrada`.
- Caso queira inserir uma configuração inicial do tabuleiro, clique no botão `Inserir dados de entrada` e insira os valores separados por `-`. Ex: 1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-0
- Existem duas formas de rodar os testes:
	- Ou Rodando a busca direta, clicando no botão `Buscar Resultado`;
	- Ou iterando um passo de cada vez, clicando no botão `Iterar um passo`


## Sobre os Nós
Cada nó da árvore representa um estado do tabuleiro e ao clicar em um, o valor da Manhattan Distance é mostrada abaixo do campo para inserir o tamanho do tabuleiro.


## Sobre o Resultado
A forma de identificar um resultado com sucesso é se houver um caminho em verde, percorrido na árvore. 
Por exemplo, para a entrada `3-0-1-2` todos os nós, ao final de um processamento, ficam cinza, isto é esse é um valor inicial não solucionável. 
Entretanto, para o valor inicial `3-1-2-0` é possível ver o caminho que leva à solução.
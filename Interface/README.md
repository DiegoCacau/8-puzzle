# N-Puzzle

Para rodar o simulador, basta abrir o arquivo `index.html` no browser (testes foram feitos no Chrome, havendo a possibilidade de não haver compatibilidade com browsers mais antigos, como Internet Explorer 6). É nessário também ter acesso à internet já que alguns arquivos de estilo e de bibliotecas usadas para gerar a àrvore estão hospedados no `Cloudflare`.


## Uso

Para rodar os testes, basta: 
- Selecionar o tamanho do tabuleiro no campo numérico, abaixo do botão `Inserir dados de entrada`.
- Caso queira inserir uma configuração inicial do tabuleiro, clique no botão `Inserir dados de entrada` e insira os valores separados por `-`. Ex: 1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-0
- Existem duas formas de rodar os testes:
	- Ou Rodando a busca direta, clicando no botão `Buscar Resultado`;
	- Ou iterando um passo de cada vez, clicando no botão `Iterar um passo`


## Sobre os Nós
Cada nó da árvore representa um estado do tabuleiro e ao clicar em um, o valor da Manhattan Distance é mostrada abaixo do campo para inserir o tamanho do tabuleiro.
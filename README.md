# BookLab – Livraria Virtual

## Descrição

O BookLab é um aplicativo de livraria virtual desenvolvido em React Native, que permite aos usuários explorar um catálogo de livros, visualizar informações detalhadas sobre cada obra e adicionar livros ao carrinho de compras. O aplicativo também oferece filtros por categoria e funcionalidades para gerenciar os itens selecionados, como alterar quantidades, remover livros e consultar o valor total da compra.

## Aluno

- **Nome:** Júlia Carolina Gomes Barbosa
- **RGM:** 44077254

## Telas

O aplicativo possui três telas principais:

1. **Lista de Livros (`Lista`):** apresenta o catálogo de livros disponíveis, com capas, informações básicas e filtros por categoria. Permite selecionar um livro para visualizar seus detalhes.

2. **Detalhes do Livro (`Detalhes`):** exibe informações completas sobre o livro selecionado, incluindo título, autor, categoria, descrição e preço. Também permite adicionar o livro ao carrinho.

3. **Carrinho de Compras (`Carrinho`):** apresenta os livros adicionados, permitindo aumentar ou diminuir quantidades, remover itens e visualizar o valor total da compra.

## Fonte de dados

**Dados locais:** o aplicativo utiliza um array de objetos chamado `LIVROS`, localizado no arquivo `screens/Lista.js`.

Os dados incluem título, autor, categoria, preço, descrição e imagem de cada livro. As imagens das capas estão armazenadas localmente na pasta `assets/`.

Não utiliza API externa ou banco de dados.

## Onde estão os requisitos

- **Componentes:** `components/Card.js`, `components/BotaoAcao.js` e `components/ItemCarrinho.js`.
- **Props com callback:** `Card.js` recebe a função `aoPressionar` para comunicar à tela principal a seleção de um livro. `BotaoAcao.js` também recebe uma função por props.
- **useState:** `App.js` controla os livros do carrinho; `screens/Lista.js` controla o filtro de categorias; `screens/Detalhes.js` controla a mensagem de confirmação ao adicionar um livro.
- **useEffect:** `screens/Carrinho.js` atualiza dinamicamente o título do cabeçalho conforme a quantidade de livros no carrinho.
- **Navegação com parâmetros:** implementada em `screens/Lista.js`, utilizando `navigation.navigate('Detalhes', { livro })`. Os parâmetros são recebidos em `screens/Detalhes.js` por meio de `route.params`.

## Vídeo de demonstração

demo/projetolivraria.mp4

## Como executar
npm install

npx expo start

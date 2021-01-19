Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Features](#Features)
   * [Como usar](#Como-usar)
      * [Pre Requisitos](#Pré-requisitos)
      * [Rodando API]()
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->
<h4 align="center">
 <b>Crud</b> 🦸‍♂️
</h4>

<br>

### Sobre

<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🔗 React</a>
</h1>
<p align="center">🚀 Esse projeto foi meu primeiro projeto de verdade feito a partir do zero. Foi feito tanto para aprender um pouco mais sobre react quanto pra aprender em como é desevolver um sistema real. Decidi fazer ele como um Single Page Aplication por acreditar ser um desafio ainda maior</p>

<h4 align="center"> 
	🚧  🚀 Interrompido  🚧
</h4>

### Features

- [x] Cadastro de usuário
- [x] Listagem de cadastros
- [x] Exclusão de cadastro
- [ ] Edição do cadastro

### Como usar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [XAMPP](https://www.apachefriends.org/pt_br/index.html). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
A API usada esta como um outro projeto em outro repositório, e será necessaria para que tudo funcione

### 🎲 Rodando o server

```bash
# Estar rodando o XAMPP com o MySQL iniciado

# Clone este repositório
$ git clone <https://github.com/sandrovisky/API-NODE>

# Instale as dependências
$ npm install

# Acesse a pasta do projeto no terminal/cmd
Abra o arquivo /src/config/databse.js
Configure com os dados do seu banco de dados

# Execute o comando que iá criar a tabela "clientes" no banco de dados
$ npx sequelize db:migrate

# Vá para a pasta src
$ cd src 

# Execute a aplicação 
$ node server.js

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
### 🎲 Rodando o projeto

```bash

# Clone este repositório
$ git clone <https://github.com/sandrovisky/crud-SPA-react>

# Acesse a pasta do projeto no terminal/cmd

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# O servidor inciará na porta:3000 caso não esteja sendo usada - acesse <http://localhost:3000>
```
### :rocket: Tecnologias usadas
Este maravilindo projeto foi desenvolvido com as seguintes tecnologias:
- [React](https://pt-br.reactjs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://www.npmjs.com/package/axios)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [React-Router](https://reactrouter.com/)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)

<p align="center">Feito com ❤️ por <strong>Sandrovisky :wave: </p>
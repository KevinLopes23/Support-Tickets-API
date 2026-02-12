# 🎫 Support Tickets API

> Uma API RESTful simples e eficiente para gerenciamento de tickets de suporte, construída com Node.js puro.

![Badge License](https://img.shields.io/badge/license-ISC-brightgreen)
![Badge Node](https://img.shields.io/badge/node.js-v18%2B-blue)

## 📖 Sobre o Projeto

Este projeto é uma API backend desenvolvida para facilitar o controle de chamados de suporte. Ele permite a criação, listagem, atualização e remoção de tickets, além de controlar o status de cada solicitação.

O diferencial deste projeto é a sua implementação **sem frameworks** (como Express ou Fastify), utilizando apenas os módulos nativos do **Node.js**, o que demonstra um entendimento profundo do funcionamento interno da plataforma.

## 🚀 Funcionalidades

- **Criação de Tickets**: Registre novos chamados com equipamento, descrição e nome do usuário.
- **Listagem de Tickets**: Visualize todos os tickets ou filtre pelo status (ex: `open`, `closed`).
- **Atualização de Detalhes**: Edite as informações de equipamento e descrição de um ticket existente.
- **Gerenciamento de Status**: Atualize o status do ticket (ex: marcar como resolvido) e adicione uma solução.
- **Remoção**: Exclua tickets que não são mais necessários.

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
- **Módulos Nativos**:
  - `http`: Para criação do servidor e manipulação de requisições.
  - `crypto`: Para geração de UUIDs únicos.
  - `fs` (implícito na database): Para persistência de dados.

## 📦 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/en/download/) instalado em sua máquina.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/KevinLopes23/Rocketseat.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Rocketseat
   ```
3. Instale as dependências (caso haja alguma futura):
   ```bash
   npm install
   ```

### Executando

Para iniciar o servidor em modo de desenvolvimento (com watch mode):

```bash
npm run dev
```

O servidor iniciará na porta `3333`.

## 📍 Rotas da API

| Método   | Rota                   | Descrição                          | Corpo da Requisição (JSON)                                               |
| -------- | ---------------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| `POST`   | `/tickets`             | Cria um novo ticket                | `{ "equipment": "PC", "description": "Não liga", "user_name": "Kevin" }` |
| `GET`    | `/tickets`             | Lista todos os tickets             | N/A                                                                      |
| `GET`    | `/tickets?status=open` | Lista tickets filtrados por status | N/A                                                                      |
| `PUT`    | `/tickets/:id`         | Atualiza dados do ticket           | `{ "equipment": "Nova info", "description": "Nova descrição" }`          |
| `PATCH`  | `/tickets/:id`         | Atualiza status p/ `closed`        | `{ "solution": "Troca de fonte" }`                                       |
| `DELETE` | `/tickets/:id`         | Remove um ticket                   | N/A                                                                      |


---

Feito com 💜 por [Kevin Lopes](https://github.com/KevinLopes23)

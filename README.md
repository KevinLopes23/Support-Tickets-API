<div align="center">

# 🎫 Support Tickets API

**API REST para gerenciar chamados de suporte, feita só com os módulos nativos do Node.js.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

## 💡 Sobre

API para abrir, listar, editar e encerrar tickets de suporte. Foi escrita sem frameworks: o servidor usa `node:http`, o roteamento é feito com expressões regulares e os dados ficam num arquivo JSON (`src/database/db.json`).

## ✨ Funcionalidades

- Abrir ticket com equipamento, descrição e nome do usuário (status inicial `open`)
- Listar tickets, com filtro opcional por status (`?status=open`)
- Editar equipamento e descrição de um ticket
- Encerrar ticket (status `closed`) registrando a solução
- Remover ticket
- Persistência em arquivo JSON, sem banco de dados

## 🛠️ Tecnologias

- Node.js (`node:http`, `node:fs/promises`, `node:crypto`)
- JavaScript (ES Modules)

## 📌 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/tickets` | Cria um ticket (`equipment`, `description`, `user_name`) |
| `GET` | `/tickets` | Lista tickets (filtro opcional `?status=`) |
| `PUT` | `/tickets/:id` | Atualiza `equipment` e `description` |
| `PATCH` | `/tickets/:id` | Encerra o ticket e registra a `solution` |
| `DELETE` | `/tickets/:id` | Remove o ticket |

## 🚀 Como rodar

Requer Node.js 18 ou superior (usa `node --watch`). Não há dependências para instalar.

```bash
git clone https://github.com/KevinLopes23/Support-Tickets-API.git
cd Support-Tickets-API
npm run dev
```

A API sobe em `http://localhost:3333`.

## 👤 Autor

Feito por [Kevin Lopes](https://github.com/KevinLopes23)

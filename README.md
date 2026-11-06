# Orvixel

Projeto inicial de uma plataforma educacional para estudantes de programação.

## Objetivo

Ajudar estudantes de Ciência da Computação a estudar programação, consultar conteúdos de aula e praticar com exercícios. A ideia futura é permitir que uma IA explique erros e sugira melhorias no código, sem substituir o aprendizado do aluno.

## Tecnologias

- Node.js
- Express — criação da API
- dotenv — configuração de variáveis de ambiente
- cors — comunicação entre o front-end e a API

## Como executar

1. Instale o Node.js.
2. Abra o terminal na pasta do projeto.
3. Execute `npm install`.
4. Copie `.env.example` para `.env`.
5. Execute `npm run dev`.
6. Acesse `http://localhost:3000`.

## Rotas disponíveis

- `GET /` — mensagem inicial.
- `GET /api/saude` — verifica se a API está funcionando.
- `GET /api/exercicios` — lista exercícios de exemplo.

## Próximas melhorias

- Criar cadastro e login de alunos.
- Permitir que professores publiquem materiais.
- Salvar matérias e exercícios em um banco de dados.
- Integrar uma IA para explicar erros e gerar exercícios a partir do conteúdo estudado.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE`.

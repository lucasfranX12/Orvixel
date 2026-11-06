import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    projeto: "Orvixel",
    mensagem: "API de estudos de programação está funcionando!"
  });
});

app.get("/api/saude", (req, res) => {
  res.json({ status: "ok", projeto: "Orvixel" });
});

// Exemplo inicial: futuramente, os exercícios poderão vir de um banco de dados.
const exercicios = [
  {
    id: 1,
    materia: "JavaScript",
    titulo: "Variáveis",
    descricao: "Crie uma variável chamada nome e atribua seu nome a ela."
  },
  {
    id: 2,
    materia: "Lógica de programação",
    titulo: "Condição",
    descricao: "Crie uma condição que verifique se um número é positivo."
  }
];

app.get("/api/exercicios", (req, res) => {
  res.json(exercicios);
});

app.listen(PORT, () => {
  console.log(`Orvixel rodando em http://localhost:${PORT}`);
});

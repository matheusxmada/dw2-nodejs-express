// Importando o framework Express
import express from "express";

const rota = express.Router();

// ROTA DE PRODUTOS
// Lista de produtos (dados mockados)
// Futuramente os dados virão do banco de dados
// Array de objetos
const produtos = [
  { nome: "Computador", marca: "Lenovo", preco: 3500 },
  { nome: "Celular", marca: "Samsung", preco: 4000 },
  { nome: "Notebook", marca: "Dell", preco: 5100 },
  { nome: "Tablet", marca: "Asus", preco: 2400 },
];

rota.get("/produtos", (req, res) => {
  res.render("produtos", {
    // Enviando a lista de produitos para a página
    produtos: produtos,
  });
});

export default rota;
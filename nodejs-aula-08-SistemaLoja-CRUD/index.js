// Importando o Express
// const express = require("express")
import express from "express";
// Iniciando o Express
const app = express();
// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// Importando o Controller Cliente
import ClienteController from "./controllers/ClienteController.js";
// Importando o Controller Produto
import ProdutoController from "./controllers/ProdutoController.js";
// Importando o Controller Pedido
import PedidosController from "./controllers/PedidosController.js";

// Configurando rotas
// Inicializando a porta de Cliente
app.use(ClienteController);
// Inicializando a porta de Produto
app.use(ProdutoController);
// Inicializando a porta Pedido
app.use(PedidosController);

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});

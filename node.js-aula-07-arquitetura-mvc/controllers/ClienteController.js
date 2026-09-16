// Importando o framework Express
import express from "express";
// Primeiramente, ele permanece apagado, pois ele foi declarado mas seu valor ainda não foi lido (o módulo ainda não foi utilizado)
// router() : método do Express para criar rotas
const rota /* Uma boa prática futuramente é chamar a variável de router */ = express.Router(); // Agora, quando queremos chamar a rota de clientes, usaremos rota.get

// ROTA DE CLIENTES
rota.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Diego Max", cpf: "999.999.999-99" },
    { nome: "Gregory Souza", cpf: "888.888.888-98889" },
    { nome: "Laura Júlia", cpf: "777.777.777-77" },
    { nome: "Mario Takahashi", cpf: "666.666.666-66" },
  ];

  res.render("clientes", {
    clientes: clientes,
  });
});
// RES -> Resposta do servidor
// Exportando o módulo ClienteController, para que ela seja "enxergada" pelo index.js
export default rota;
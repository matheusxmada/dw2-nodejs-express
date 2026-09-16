// Importando o framework Express
import express from "express";

const rota = express.Router();




// ROTA DE SERVIÇOS
rota.get("/servicos", (req, res) => {
  res.render("servicos");
});

export default rota;
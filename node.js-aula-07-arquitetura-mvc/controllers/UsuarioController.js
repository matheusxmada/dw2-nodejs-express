// Importando o framework Express
import express from "express";

const rota = express.Router();




// RODA DE PERFIL
rota.get("/perfil", (req, res) => {
  res.render("perfil");
});

export default rota;
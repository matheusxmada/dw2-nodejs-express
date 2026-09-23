// Importando o framework Express
import express from "express";
// Importando o Model
import Pedidos from "../models/Pedido.js";

// Criando a porta
const router = express.Router();

// ROTA PEDIDOS
router.get("/pedidos",function(req,res){
    Pedidos.findAll().then((pedidos) => {
    res.render("pedidos", {
     pedidos: pedidos,
    });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os pedidos. Erro ${error}`)
    })
});
// Exportando o módulo
export default router;
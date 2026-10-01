// Importando o framework Express
import express from "express";
// Importando o Model
import Cliente from "../models/Cliente.js";

// Criando a rota
const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // Selecionando todos os clientes do banco de dados (PROMISSE), equivalente à query SELECT * FROM clientes;
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
    // Enviando a lista de clientes para a página HTML (front-end)
    clientes: clientes,
    });
  }).catch(error => {
    console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`)
  })
});

// Rota de trabalho de clientes
router.post("/clientes/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
// Chamando o model para gravar os dados no banco
// Equivalente ao INSERT INTO
Cliente.create({
  nome: nome,
  cpf: cpf,
  endereco: endereco,
})
  .then(() => {
    res.redirect("/clientes");
  })
  .catch((error) => {
    console.log(`Ocorreu um erro ao cadastrar o cliente. Erro: ${error}`);
  });
});

// ROTA PARA EXCLUIR UM CLIENTE
// :id -> Cria um parâmetro na rota
router.get("/clientes/excluir/:id", (req,res) => {
    // Criando uma variável para armazenar o parâmetro que chega pela URL
    const id = req.params.id;
    // Chamando o Model e pedindo para excluir o cliente
    Cliente.destroy({
      where : {
        id : id,
      },
    }).then(() => {
      res.redirect("/clientes");
    }).catch(error => {
      console.log(`Ocorreu um erro ao excluir o cliente. Erro: ${error}.`)
    });
});

// ROTA DE EDIÇÃO DE CLIENTE
// Rota para buscar um cliente e colocar no formulário de edição, para começar a alterar as informações do cliente.
router.get("/clientes/editar/:id", (req, res) => {
  // Coletando o parâmetro da URL
  const id = req.params.id;
  // Buscando o cliente no banco pela ID
  Cliente.findByPk(id).then(cliente => {
    res.render("clienteEditar", {
      // Enviando um objeto com os dados do cliente para a página
      cliente: cliente,
    });
  }).catch(error => {
    console.log(`Ocorreu um erro ao buscar o cliente. Erro: ${error}`);
  });
});

// ROTA QUE ALTERA UM CLIENTE NO BANCO DE DADOS
router.post("/clientes/alterar", (req, res) => {
  // Coletando os dados do formulário
  // Mando o id pelo formulário, e não pela URL, com mais segurança.
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // Chamando o model e pedindo para alterar no banco de dados
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where : {id : id}}
  ).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(`Ocorreu um erro ao alterar o cliente. Erro: ${error}`);
  });
});

// Exportando o módulo
export default router;
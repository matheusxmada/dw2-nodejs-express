// UsuariosController.js para o controle de todas as rotas relacionadas ao usuário: /login /cadastro /autenticar etc. De acordo com a hierarquia MVC.
import express from "express";
const router = express.Router();
// Importando o Model
import Usuario from "../model/Usuario.js";
// Importando a biblioteca BCRYPT (hash de senha)
import bcrypt from "bcrypt";

// ROTA DE LOGIN
router.get("/login", (req, res) => {
  res.render("login");
});

// ROTA DE AUTENTICAÇÃO
router.post("/autenticar", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

router.post("/cadastro/novo", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;
  // Buscando o usuário no banco
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    // SE O USUÁRIO EXISTIR
    if (usuario != undefined) {
      // Se o usuario existe, valide a senha para ver se ela bate com o banco de dados através do bcrypt
      // VALIDANDO A SENHA (HASH)
      const senhaCorreta = bcrypt.compareSync(password, usuario.password);
      // (password, usuario.password) -> password é o que o usuário digitou e usuario.password é a senha do banco. Estes dados serão comparados
      // SE A SENHA FOR VÁLIDA
      if (senhaCorreta) {
        res.redirect("/");
        // SE A SENHA FOR INVÁLIDA
      } else {
        res.send(`Senha inválida!<br>
            Verifique os dados e tente novamente!<br>
            <a href="/login">Voltar</a>`);
      }
      // SE O USUÁRIO NÃO EXISTIR
    } else {
      res.send(`USuário não existe!<br>
        Verifique os dados e tente novamente!<br>
        <a href="/login">Voltar</a>`);
    }
  });

  // Verificando se o usuário já existe
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    // Usuario não encontrado
    if (usuario == undefined) {
      // Se o usuário não foi encontrado, então cadastra usuário:

      // Algoritmo para o hashs de senha, com o mesmo salt para todas as senhas. Para isso, precisamos baixar, no terminal, o dcrypt com npm install bcrypt.
      // Salt é um valor número que entra no cálculo do hash. Ele pode ser aleatório todas as vezes, ou ser o mesmo com a mesma senha.
      // GERANDO O HASH DE SENHA
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // Enviando para o banco de dados
      Usuario.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log("Erro ao criar a conta. Erro: " + error);
        });
    } else {
      // USUÁRIO JÁ CADASTRADO
      res.send(`Usuario já cadastrado!<br>
        Verifique os dados e tente novamente.<br>
        <a href="/login">Voltar</a>`);
    }
  });
});

export default router;

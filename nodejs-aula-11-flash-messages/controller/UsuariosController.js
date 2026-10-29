// UsuariosController.js para o controle de todas as rotas relacionadas ao usuário: /login /cadastro /autenticar etc. De acordo com a hierarquia MVC.
import express from "express";
const router = express.Router();
// Importando o Model
import Usuario from "../model/Usuario.js";
// Importando a biblioteca BCRYPT (hash de senha)
import bcrypt from "bcrypt";

// ROTA DE LOGIN
router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true,
    // Coletando a flash message e enviando para a página
    messages: req.flash()
  });
});

// ROTA DE LOGOUT
router.get("/logout", (req, res) => {
  req.session.user = undefined;
  // Limpa a sessão
  res.redirect("/");
  // Redireciona para a Home
});

// ROTA DE AUTENTICAÇÃO
router.post("/autenticar", (req, res) => {
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
        // AUTORIZA O LOGIN E CRIA A SESSÃO PARA O USUÁRIO
        req.session.user = {
          id: usuario.id,
          email: usuario.email,
        };

        // TESTANDO A SESSÃO
        // res.send(`Usuário logado:<br>
        //   ID: ${req.session.user['id']} <br>
        //   E-mail: ${req.session.user['email']}`);

        // Criando a mensagem de feedback de sucesso
        req.flash('success', 'Login efetuado com sucesso!');

        // Redirecionar para a home após o login
        res.redirect("/");

        // SE A SENHA FOR INVÁLIDA
      } else {
        req.flash('danger', 'A senha informada está incorreta! Tente novamente.')
        req.redirect("/login")
      }
      // SE O USUÁRIO NÃO EXISTIR
    } else {
      req.flasah('danger', 'O usuário informado não existe! Verifique os dados e tente novamente.')
      req.redirect("/login")
    }

  });
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    loggedOut: true,
    // Coletando a flash message e enviando para a página
    messages: req.flash()
  });
});

router.post("/cadastro/novo", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

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
      req.flash('danger', 'O usuário informado já está cadastrado! Faça o login.')
      res.redirect("/cadastro")
    }
  });
});

export default router;

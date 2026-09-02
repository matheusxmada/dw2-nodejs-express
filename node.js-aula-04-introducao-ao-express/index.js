// index.js : arquivo principal do back-end.

// Importando o Express para o projeto. Geralmete as importações sempre são feitas no arquivo principall
const express = require("express"); // Forma clássica (CommonJS Modules)

const app = express(); // Criando uma instância do Express. Pegando o Express e carregando-o na variável app.

// Configurando o EJS
app.set("view engine", "ejs"); // EJS renderiza as páginas do site

// AQUI IRÃO AS ROTAS DO SITE:
// ROTA PRINCIPAL
// .get() -> Cria uma rota na aplicação. É um método usado para lidar com requisições HTTP do tipo GET, que servem para o cliente (como um navegador) solicitar a leitura ou a exibição de dados de um servidor
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  res.render("produtos");
});

//ROTA DE SERVIÇOS
app.get("/servicos", (req, res) => {
  res.render("servicos");
});

//ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  res.render("clientes");
});

//RODA DE PERFIL
app.get("/perfil", (req, res) => {
  res.render("perfil");
});

// Método do Express para iniciar o servidor back-end
// app.listen()
// Iniciando o servidor na porta 8080. Neste caso, o servidor será na nossa própria máquina
// Portas em redes de computadores são endereços virtuais baseados em software que dizem ao sistema operacional para qual programa ou serviço os dados devem ser entregues
const port = 8080;
app.listen(port, (error) => {
  // Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    // Em caso de sucesso
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});

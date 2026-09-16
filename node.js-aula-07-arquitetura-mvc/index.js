// index.js : arquivo principal do back-end.

// Importando o Express para o projeto. Geralmete as importações sempre são feitas no arquivo principall
// const express = require("express"); // Forma clássica (CommonJS Modules) // No package.jason o type estava "commonjs"
import express from "express" // Forma de importação do EJ6, agora trocando o type de "commonjs" para "modules", no arquivo package.json, das configurações iniciais do projeto

const app = express(); // Criando uma instância do Express. Pegando o Express e carregando-o na variável app.

// Importando o Controller de Cliente
import ClienteController from "./controllers/ClienteController.js"
// Importando o Controller de Produtos
import ProdutoController from "./controllers/ProdutoController.js"
// Importando o Controller de Servicos
import ServicoController from "./controllers/ServicoController.js"
// Importando o Controller de Usuarios
import UsuarioController from "./controllers/UsuarioController.js"

// O fato de importar não significa que ele foi inicializado (chamado), por isso que, inicialmente, permanece apagado.

// CONFIGURAÇÕES DO EXPRESS

// Referência de diretórios: 
// .\ -> é a pasta atual, a partir do diretório atual
// . -> pasta atual
// .. -> volta 2 diretórios

// Configurando o EJS
app.set("view engine", "ejs"); // EJS renderiza as páginas do site

// Configurando a pasta 'public' para arquivos estáticos
app.use(express.static("public"));

// Configurando rotas
// Inicializando as rotas de Cliente
app.use(ClienteController);
// Inicializando as rotas de Produto
app.use(ProdutoController);
// Inicializando as rotas de Servico
app.use(ServicoController);
// Inicializando as rotas de Usuario
app.use(UsuarioController);




// AQUI IRÃO AS ROTAS DO SITE:

// ROTA PRINCIPAL
// .get() -> Cria uma rota na aplicação. É um método usado para lidar com requisições HTTP do tipo GET, que servem para o cliente (como um navegador) solicitar a leitura ou a exibição de dados de um servidor
app.get("/", (req, res) => {
  res.render("index");
});
// Não é necessário criar uma controller para a rota principal. Todas as outras rotas vão para seus respectivos controllers.

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

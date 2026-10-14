// Um novo model para a comunicação com o banco em relação aos usuários. Ele criará a tabela usuarios com os campos email e password.
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Usuario = connection.define('usuarios', {
    // 'usuarios' é o nome da tabela que será criada no banco de dados
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// import Sequelize from "sequelize";: Importa a classe principal e os tipos de dados do pacote ORM Sequelize.
// import connection...: Importa a instância ativa de conexão com o banco de dados (o objeto do Sequelize client configurado).
// const Usuario = ...: Define uma constante que recebe o objeto de mapeamento do Model gerado pelo framework.
// connection.define('usuarios', { ... });: Instancia um novo modelo no schema, vinculando o objeto JavaScript à tabela física usuarios.
// email: { ... }: Define a propriedade email mapeada como uma coluna do tipo VARCHAR (STRING) e com a constraint NOT NULL.
// password: { ... }: Define a propriedade password também mapeada como um VARCHAR com a constraint NOT NULL.


Usuario.sync({ force: false });
// Usuario: Representação da sua tabela do banco de dados dentro do código.
// .sync(): Comando que avisa ao banco de dados para criar a tabela se ela ainda não existir.
// { force: false }: É a segurança que garante que seus dados salvos não serão apagados caso a tabela já exista.


export default Usuario;

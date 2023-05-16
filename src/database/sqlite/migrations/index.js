const sqliteConnection = require("../../sqlite"); // 34 - Importando a conexão com o db
const createUsers = require("./createUsers"); // 35 - Importando a variável com a criação da tabela users

async function migrationRun() {
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error));
}; // 36 - Criando a função para executar as migrations

module.exports = migrationRun; // 37 - Exportando a função para executar as migrations
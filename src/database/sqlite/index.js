const sqlite3 = require("sqlite3"); // 26 - Importando o Sqlite3 (driver para estabelecer a comunicação com o db)
const sqlite = require("sqlite"); // 27 - Importando o Sqlite (responsável por conectar o db)
const path = require("path"); // 28 - Importando o Path (resolve problemas de estrutura de navegação de diretórios)

async function sqliteConnection() { // 29 - Cria a conexão com o db e se ele não existir, também cria o db.
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    });

    return database;
}

module.exports = sqliteConnection; // 30 - Exporta a conexão com o db
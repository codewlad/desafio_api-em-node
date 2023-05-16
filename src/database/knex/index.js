const config = require("../../../knexfile"); // 43 - Importando as configurções do knex
const knex = require("knex"); // 44 - Importando o knex

const connection = knex(config.development); // 45 - Armazenando as configurações de conexão do knex em uma variável

module.exports = connection; // 46 - Exportando as configurações do knex
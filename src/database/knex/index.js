const config = require("../../../knexfile")
const knex = require("knex")

//Conexão do knex com o banco de dados.
const connection = knex(config.development)

module.exports = connection
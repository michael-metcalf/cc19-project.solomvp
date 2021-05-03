const knex = require("knex") ({
  client: "pg",
  connection: {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432
  }
});
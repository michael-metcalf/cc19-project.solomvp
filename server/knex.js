const { PG_USER, PG_PW, PG_NAME } = process.env;

const knex = require("knex") ({
  client: "pg",
  connection: {
    host: PG_HOST,
    user: PG_USER,
    password: PG_PW,
    database: PG_NAME,
    port: PG_PORT || 5432
  }
});
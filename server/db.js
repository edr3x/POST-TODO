const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "Postgre.r3x",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;

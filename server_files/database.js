
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "r4r473",
  host: "localhost",
  port: 5432,
  database: "registration",
});

module.exports =pool

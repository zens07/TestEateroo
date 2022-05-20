require("dotenv").config();

const env = process.env.NODE_ENV || "development";

const capsEnv = env.toUpperCase();

const username = process.env["DB_USERNAME_" + capsEnv];
const password = process.env["DB_PASSWORD_" + capsEnv];
const database = process.env["DB_DATABASE_" + capsEnv];
const host = process.env["DB_HOST_" + capsEnv];
const dialect = process.env["DB_DIALECT_" + capsEnv];

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect,
  },
  test: {
    username,
    password,
    database,
    host,
    dialect,
  },
  production: {
    username,
    password,
    database,
    host,
    dialect,
  },
};

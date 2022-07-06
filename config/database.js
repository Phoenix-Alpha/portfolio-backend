const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: host ?? '127.0.0.1',
        port: port ?? 5432,
        database: database ?? 'portfolio',
        user: user ?? 'portfolio_admin',
        password: password ?? 'password',
        ssl: host === 'localhost' ? false : { rejectUnauthorized: false }
      }
    }
  }
};

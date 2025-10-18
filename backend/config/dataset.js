const { Sequelize } = require('sequelize'); //Trae la clase Sequelize, que sirve para crear la conexión con la base de datos y definir modelos (tablas).
require('dotenv').config(); //Lee el archivo .env para obtener tus datos de conexión sin ponerlos directamente en el código.

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

module.exports = sequelize;

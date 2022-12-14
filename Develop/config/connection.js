require('dotenv').config();

const Sequelize = require('sequelize');

let Sequalize;

if(process.env.JAWSDB_URL){
  ? new Sequelize(process.env.JAWSDB_URL);
} else {
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
}

module.exports = sequelize;

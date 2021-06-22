'use strict';
const Sequelize = require('sequelize');
const conf = require('../../config')
const mysql2 = require('mysql2');

const sequelize = new Sequelize(
    conf.mysql_conn_param_accounts.database,
    conf.mysql_conn_param_accounts.user,
    conf.mysql_conn_param_accounts.password,
    {
        host: conf.mysql_conn_param_accounts.host,
        dialect: 'mysql',
        dialectModule: mysql2
    }
)
let db={};

const fs = require('fs'), path = require('path')

 fs.readdirSync(__dirname+'/models/').forEach(file => {
     let model = require(path.join(__dirname+/models/, file))(sequelize, Sequelize);
     db[model.name] = model;
 });

Object.keys(db).forEach(modelName => {
     if ('associate' in db[modelName]) {
         db[modelName].associate(db);
     }
 });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

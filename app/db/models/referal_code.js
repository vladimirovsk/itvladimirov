const Sequelize = require('sequelize');
class Referal_code extends Sequelize.Model {}

module.exports =  (sequelize) => {
    Referal_code.init({
            code:{type:Sequelize.STRING(20)}
        },
        {sequelize, modelName: 'Referal_code', tableName: 'referal_code', timestamps: false}
    )
    return Referal_code;
}

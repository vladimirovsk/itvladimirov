const Sequelize = require('sequelize');
class Fees extends Sequelize.Model {}

module.exports =  (sequelize) => {
    Fees.init({
        code:{type:Sequelize.STRING(10)},
        currency:{type:Sequelize.SMALLINT},
        category:{type:Sequelize.STRING(10)},
        deposit:{type:Sequelize.SMALLINT, defaultValue:1},
        amount_min:{type:Sequelize.DECIMAL, defaultValue:0},
        amount_max:{type:Sequelize.DECIMAL, defaultValue:0},
        fee_min:{type:Sequelize.DECIMAL, defaultValue:0},
        fee_max:{type:Sequelize.DECIMAL, defaultValue:0},
        fee_rate:{type:Sequelize.DECIMAL, defaultValue:0},
        fee_fixed:{type:Sequelize.DECIMAL, defaultValue:0}
    },
{sequelize, modelName: 'Fees', tableName: 'fees', timestamps: false}
    )
    return Fees;
}

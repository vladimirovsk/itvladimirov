const Sequelize = require('sequelize');
class Variables extends Sequelize.Model {}

module.exports =  (sequelize) => {
    Variables.init({
            name:{type:Sequelize.STRING(10)},
            value:{type:Sequelize.STRING}
        },
        {sequelize, modelName: 'Variables', tableName: 'variables', timestamps: false}
    )
    return Variables;
}

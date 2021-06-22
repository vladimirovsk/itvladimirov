const Sequelize = require('sequelize');
class Coin_para extends Sequelize.Model {}

module.exports =  (sequelize) => {
     Coin_para.init(
        {
            code: {type: Sequelize.STRING(10)},
            para: {type: Sequelize.STRING(10)},
            is_active: {type: Sequelize.SMALLINT, defaultValue: 1},
        },
        {
        indexes:[
            {
                name: 'public_para_idx',
                using: 'BTREE',
                fields: ['para']
            }
        ],
        sequelize, modelName: 'Coin_para', tableName: 'coin_para',timestamps: false}
    )
    return Coin_para;
}



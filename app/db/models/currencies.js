const Sequelize = require('sequelize');
class Currencies extends Sequelize.Model {}

module.exports =  (sequelize) => {
     Currencies.init({
            code: {type: Sequelize.STRING(10)},
            name: {type: Sequelize.STRING(10)},
            coin: {type: Sequelize.SMALLINT},
            sort_order: {type: Sequelize.SMALLINT},
            icon: {type: Sequelize.STRING},
            category: {type: Sequelize.STRING(10)},
            full_name: {type: Sequelize.STRING},
            precision: {type: Sequelize.SMALLINT},
        },
        {
            indexes:[
                {
                    name: 'public_coin_idx',
                    using: 'BTREE',
                    fields: ['coin']
                }
            ],
            sequelize, modelName: 'Currencies', timestamps: false, tableName: 'currencies'}
    )

    return Currencies;
}


const Sequelize = require('sequelize');
class Trade extends Sequelize.Model {}

module.exports =   (sequelize) => {
    Trade.init({
            type:{type:Sequelize.STRING(10)},
            order_id:{type:Sequelize.INTEGER},
            status:{type:Sequelize.SMALLINT, defaultValue:1},
            amount_in:{type:Sequelize.DECIMAL, defaultValue: 0},
            amount_out:{type:Sequelize.DECIMAL, defaultValue: 0},
            provider_order_id:{type:Sequelize.STRING},
            created_at:{type:Sequelize.BIGINT},
            updated_at:{type:Sequelize.BIGINT},
            type_trade:{type:Sequelize.SMALLINT, defaultValue:1}
        },
        {sequelize, modelName: 'Trade', tableName: 'trade', timestamps: true}
    )
    return Trade;
}
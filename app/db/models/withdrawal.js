const Sequelize = require('sequelize');
class Withdrawal extends Sequelize.Model {}

module.exports =   (sequelize) => {
    Withdrawal.init({
            order_id:{type:Sequelize.INTEGER},
            status:{type:Sequelize.SMALLINT, defaultValue:1},
            amount:{type:Sequelize.DECIMAL, defaultValue: 0},
            amount_received:{type:Sequelize.DECIMAL, defaultValue: 0},
            payment_card:{type:Sequelize.STRING(20)},
            provider_wd_id:{type:Sequelize.STRING},
            created_at:{type:Sequelize.BIGINT},
            updated_at:{type:Sequelize.BIGINT},
            fee:{type:Sequelize.DECIMAL, defaultValue: 0},
            fees:{type:Sequelize.DECIMAL, defaultValue: 0}
        },
        {sequelize, modelName: 'Withdrawal', tableName: 'withdrawal', timestamps: true}
    )
    return Withdrawal;
}
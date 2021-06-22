const Sequelize = require('sequelize');
class Deposit extends Sequelize.Model {}

module.exports =   (sequelize) => {
    Deposit.init({
        order_id:{type:Sequelize.INTEGER},
        status:{type:Sequelize.SMALLINT, defaultValue:1},
        amount:{type:Sequelize.DECIMAL, defaultValue: 0},
        amount_received:{type:Sequelize.DECIMAL, defaultValue: 0},
        payment_url:{type:Sequelize.STRING},
        provider_deposit_id:{type:Sequelize.STRING},
        created_at:{type:Sequelize.BIGINT},
        updated_at:{type:Sequelize.BIGINT},
        fee:{type:Sequelize.DECIMAL},
        address:{type:Sequelize.STRING}
    },
{sequelize, modelName: 'Deposit', tableName: 'deposit', timestamps: true}
)
    return Deposit;
}
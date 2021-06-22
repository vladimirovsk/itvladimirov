const Sequelize = require('sequelize');
class Order_sell extends Sequelize.Model {}

module.exports = (sequelize) => {
        Order_sell.init({
                status:{type:Sequelize.SMALLINT, defaultValue:1},
                device_token:{type:Sequelize.TEXT},
                wd_id:{type:Sequelize.INTEGER},
                wd_asset:{type:Sequelize.STRING(10)},
                wd_amount:{type:Sequelize.DECIMAL, defaultValue: 0},
                fee:{type:Sequelize.INTEGER},
                trade_id:{type:Sequelize.INTEGER},
                trade_asset:{type:Sequelize.STRING(10)},
                trade_amount_in:{type:Sequelize.DECIMAL, defaultValue: 0},
                trade_amount_out:{type:Sequelize.DECIMAL, defaultValue: 0},
                text_error:{type:Sequelize.TEXT},
                customer_id:{type:Sequelize.INTEGER},
                created_at:{type:Sequelize.BIGINT},
                updated_at:{type:Sequelize.BIGINT},
                payment_card:{type:Sequelize.STRING(20)},
                fees:{type:Sequelize.DECIMAL, defaultValue:0},
                amount_from:{type:Sequelize.DECIMAL, defaultValue: 0},
                amount_to:{type:Sequelize.DECIMAL, defaultValue: 0},
        },
        {sequelize, modelName: 'Order_sell', tableName: 'order_sell', timestamps: true}
    )
    return Order_sell;
}
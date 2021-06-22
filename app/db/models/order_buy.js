const Sequelize = require('sequelize');
class Order_buy extends Sequelize.Model {}

module.exports =   (sequelize) => {
    Order_buy.init({
            status:{type:Sequelize.SMALLINT, defaultValue:1},
            device_token:{type:Sequelize.TEXT},
            deposit_id:{type:Sequelize.INTEGER},
            deposit_asset:{type:Sequelize.STRING(10)},
            deposit_amount:{type:Sequelize.DECIMAL, defaultValue: 0},
            fee:{type:Sequelize.INTEGER},
            trade_id:{type:Sequelize.INTEGER},
            trade_asset:{type:Sequelize.STRING(10)},
            trade_amount_in:{type:Sequelize.DECIMAL, defaultValue: 0},
            trade_amount_out:{type:Sequelize.DECIMAL, defaultValue: 0},
            text_error:{type:Sequelize.TEXT},
            customer_id:{type:Sequelize.INTEGER},
            created_at:{type:Sequelize.BIGINT},
            updated_at:{type:Sequelize.BIGINT},
            fees:{type:Sequelize.DECIMAL, defaultValue: 0},
            amount_from:{type:Sequelize.DECIMAL, defaultValue: 0},
            amount_to:{type:Sequelize.DECIMAL, defaultValue: 0},
        },
        {
                // hooks : {
                //         afterCreate : function(order_buy_insert, insert_epoch_timestamp) {
                //                 console.log(insert_epoch_timestamp);
                //         }
                // },
                sequelize, modelName: 'Order_buy', tableName: 'order_buy', timestamps: true}
    )

        // sequelize.query(`create trigger order_buy_insert before
        // insert
        // on
        // public.order_buy for each row execute function insert_epoch_timestamp()`)
    return Order_buy;
}
const Sequelize = require('sequelize');
class Tx extends Sequelize.Model {}

module.exports =   (sequelize) => {
    Tx.init({
            type:{type:Sequelize.STRING(10)},
            created_at:{type:Sequelize.BIGINT},
            amount:{type:Sequelize.DECIMAL, defaultValue: 0},
            asset:{type:Sequelize.STRING(10)},
            document:{type:Sequelize.STRING(10)},
            document_id:{type:Sequelize.INTEGER},
            customer_id:{type:Sequelize.INTEGER}
        },
        {
            indexes:[
                {
                    name: 'public_tx_asset_idx',
                    using: 'BTREE',
                    fields: ['asset']
                },
                {
                    name: 'public_tx_created_at_idx',
                    using: 'BTREE',
                    fields: ['created_at']
                },
                {
                    name: 'public_tx_customer_id_idx',
                    using: 'BTREE',
                    fields: ['customer_id']
                },
                {
                    name: 'public_tx_document_id_idx',
                    using: 'BTREE',
                    fields: ['document_id']
                },
                {
                    name: 'public_tx_document_idx',
                    using: 'BTREE',
                    fields: ['document']
                },
            ],
            sequelize, modelName: 'Tx', tableName: 'tx', timestamps: true}
    )
    return Tx;
}
const Sequelize = require('sequelize');
class Tickers extends Sequelize.Model {}

module.exports =  (sequelize) => {
    Tickers.init({
        code:{type:Sequelize.STRING(10)},
        price:{type:Sequelize.DECIMAL, defaultValue: 0},
        infee:{type:Sequelize.DECIMAL, defaultValue: 0},
        outfee:{type:Sequelize.DECIMAL, defaultValue: 0},
        is_active:{type:Sequelize.SMALLINT, defaultValue: 1},
        assetfrom:{type:Sequelize.STRING(10)},
        assetto:{type:Sequelize.DECIMAL(10)},
        type:{type:Sequelize.STRING(10)},
        internal_fee:{type:Sequelize.DECIMAL, defaultValue: 1},
        base_precision:{type:Sequelize.SMALLINT, defaultValue: 2},
        min_amount:{type:Sequelize.DECIMAL, defaultValue: 0.000001}
},
        {sequelize, modelName: 'Tickers', tableName: 'tickers', timestamps: false}
    )
    return Tickers;
}

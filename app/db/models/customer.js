const Sequelize = require('sequelize');
class Customer extends Sequelize.Model {}

module.exports =  async (sequelize) => {
    await Customer.init({
        name: {type: Sequelize.STRING},
        status: {type: Sequelize.SMALLINT},
        email: {type: Sequelize.STRING},
        data_create: {type: Sequelize.DATE},
        data_last_connect: {type: Sequelize.DATE},
        id_referal: {type: Sequelize.SMALLINT},
        link_referal: {type: Sequelize.SMALLINT}
    },
    {
            sequelize, modelName: 'Customer', tableName: 'customer', timestamps: false }
    )
    return Customer
}
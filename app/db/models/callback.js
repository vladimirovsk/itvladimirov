const Sequelize = require('sequelize');
class Callback extends Sequelize.Model {}

module.exports =   (sequelize) => {
      Callback.init({
            address: {type: Sequelize.TEXT},
            callback_id: {type: Sequelize.STRING},
            currency: {type: Sequelize.STRING},
            amount:{type:Sequelize.DECIMAL, defaultValue: 0},
            payment_address_id: {type: Sequelize.STRING},
            count_callback: {type: Sequelize.INTEGER, defaultValue: 0}
        },
          {sequelize, modelName: 'Callback', tableName: 'callback', timestamps: true}
    )

    return Callback

}
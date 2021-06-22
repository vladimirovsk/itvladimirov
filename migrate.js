'use strict';
const   models = require('./app/db'),
        sequelize = models.sequelize;
        sequelize.sync({force: true});


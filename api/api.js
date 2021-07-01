let express = require('express');
let router = express.Router();
let conf = require('../config');

router.all('/*', require('./' + conf.version + '/routes'));

module.exports = router;

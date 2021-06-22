var express = require('express');
var router = express.Router();
var conf = require('../config');

router.all('/*', require('./' + conf.version + '/routes/test'));
//router.all('/account*', require('./'+conf.version+'/routes') )

module.exports = router;

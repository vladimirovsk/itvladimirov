const express = require('express');
const router = express.Router();

router.get('/test' , async (req, res, next) => {

    res.send('<h1>Route test</h1>');
});

module.exports = router;

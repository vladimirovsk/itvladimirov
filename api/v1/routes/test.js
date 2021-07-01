const express = require('express');
const router = express.Router();


router.get('/routeTest/', async (req, res, next) => {
    console.log('/routeTest')
    res.send('<h1>Route test</h1>');
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index.html');
});

router.get('/app', function(req, res, next){
    res.render('app.html');
});

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index.html');
});

router.get('/aboutme', function(req, res, next){
    res.render('aboutme.html');
});

router.get('/portfolio', function(req, res, next){
    res.render('portfolio.html');
});

router.get('/photography', function(req, res, next){
    res.render('photography.html');
});

module.exports = router;
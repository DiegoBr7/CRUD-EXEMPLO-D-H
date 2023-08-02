
const ServicosModel = require('../models/sevicosModel')


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
// DER ALGUM ERRO USE console.LOG
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = {
    chiave: "valore",
    chiave2: 3
  }

  res.status(200).json(obj);
});

module.exports = router;




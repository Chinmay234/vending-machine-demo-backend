var express = require('express');
var router = express.Router();

/* all vending routes */

router.get('/', function(req, res, next) {
  res.send('vending');
});

module.exports = router;
